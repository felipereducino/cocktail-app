<template>
  <div class="categories-list">
    <h1>Drinks Category</h1>
    <ul class="categories">
      <li v-for="category in categories" :key="category.strCategory">
        <router-link :to="`/category/${category.strCategory}`">{{ category.strCategory }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getCategories } from '~/services/cocktailService';

export default {
  data() {
    return {
      categories: [],
    };
  },
  async mounted() {
    try {
      this.categories = await getCategories();
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
    }
  },
};
</script>

<style scoped>
.categories-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.categories {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.categories li {
  margin: 10px 0;
}

.categories a {
  display: block;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #007bff;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.categories a:hover {
  background-color: #f0f0f0;
}
</style>