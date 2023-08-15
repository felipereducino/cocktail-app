<template>
  <div class="drink-details">
    <h1 class="drink-title">{{ drink.strDrink }}</h1>
    <img :src="drink.strDrinkThumb" :alt="drink.strDrink" class="drink-image" />
    <p class="drink-instructions">{{ drink.strInstructions }}</p>

    <footer class="footer">
      <button class="back-button" @click="goBack">Back</button>
    </footer>
  </div>
</template>

<script>
import { getDrinkDetails } from '~/services/cocktailService';

export default {
  data() {
    return {
      drink: {},
    };
  },
  async mounted() {
    const drinkId = this.$route.params.id; // Get the drink ID from the route

    try {
      this.drink = await getDrinkDetails(drinkId);
    } catch (error) {
      console.error('Error loading drink details:', error);
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.drink-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.drink-title {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

.drink-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.drink-instructions {
  font-size: 18px;
  margin-bottom: 20px;
}

.back-button {
  background-color: #f06d06;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #d55503;
}

.footer {
  padding: 12px;
  display: flex;
  justify-content: flex-end;
}
</style>
