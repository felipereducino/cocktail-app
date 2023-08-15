<template>
  <div class="categories-list">
    <h1 class="title">Explore Drink Categories</h1>
    <ul class="categories">
      <li v-for="category in categories" :key="category.strCategory">
        <router-link :to="`/category/${category.strCategory}`" class="category-link">{{ category.strCategory }}</router-link>
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
      console.error('Error loading categories:', error);
    }
  },
};
</script>

<style scoped>
.categories-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
}

.categories {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.categories li {
  margin: 0;
}

.category-link {
  display: block;
  padding: 15px;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  color: #007bff;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.category-link:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .categories {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
