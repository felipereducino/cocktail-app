<template>
    <div class="drink-details">
      <h1 class="drink-title">{{ drink.strDrink }}</h1>
      <img :src="drink.strDrinkThumb" :alt="drink.strDrink" class="drink-image" />
      <p class="drink-instructions">{{ drink.strInstructions }}</p>
  
      <footer class="footer">
        <button class="back-button" @click="goBack">Voltar</button>
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
      const drinkId = this.$route.params.id; // Obter o ID da bebida da rota
  
      try {
        this.drink = await getDrinkDetails(drinkId);
      } catch (error) {
        console.error('Erro ao carregar detalhes da bebida:', error);
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
  }
  
  .drink-title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .drink-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
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