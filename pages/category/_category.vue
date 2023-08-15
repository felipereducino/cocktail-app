<template>
  <div class="category-drinks">
    <h1 class="category-title">{{ categoryName }}</h1>

    <div class="filter-section">
      <input
        v-model="searchKeyword"
        placeholder="Filter by drink name"
        class="search-input"
      />
    </div>

    <ul class="drinks-grid">
      <li
        v-for="drink in filteredDrinks"
        :key="drink.idDrink"
        class="drink-card"
      >
        <router-link :to="`/drink/${drink.idDrink}`">
          <div class="drink-image">
            <img :src="drink.strDrinkThumb" :alt="drink.strDrink" />
          </div>
          <div class="drink-name">{{ drink.strDrink }}</div>
        </router-link>
      </li>
    </ul>
    <footer class="footer">
      <button class="back-button" @click="goBack">Back</button>
    </footer>
  </div>
</template>

<script>
import { getCategoryDrinks } from '~/services/cocktailService';

export default {
  data() {
    return {
      categoryName: '',
      drinks: [],
      searchKeyword: '',
    };
  },
  computed: {
    filteredDrinks() {
      if (!this.searchKeyword) {
        return this.drinks;
      }
      const keyword = this.searchKeyword.toLowerCase();
      return this.drinks.filter((drink) =>
        drink.strDrink.toLowerCase().includes(keyword)
      );
    },
  },
  async mounted() {
    const category = this.$route.params.category; // Get the category name from the route
    this.categoryName = category;

    try {
      this.drinks = await getCategoryDrinks(category);
    } catch (error) {
      console.error('Error loading drinks from category:', error);
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
.category-drinks {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.category-title {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

.filter-section {
  margin-bottom: 20px;
}

.search-input {
  padding: 10px;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  max-width: 300px;
}

.drinks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.drink-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.drink-image img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.drink-name {
  font-weight: bold;
  margin-top: auto;
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
