import axios from 'axios'

const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1'

export async function getCategories() {
  try {
    const response = await axios.get(`${API_BASE_URL}/list.php?c=list`)
    return response.data.drinks
  } catch (error) {
    throw new Error('Erro ao obter categorias de bebidas')
  }
}

export async function getCategoryDrinks(category: string) {
  try {
    const response = await axios.get(`${API_BASE_URL}/filter.php?c=${category}`)
    return response.data.drinks
  } catch (error) {
    throw new Error('Erro ao obter bebidas da categoria')
  }
}

export async function getDrinkDetails(id: string) {
  try {
    const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${id}`)
    return response.data.drinks[0]
  } catch (error) {
    throw new Error('Erro ao obter detalhes da bebida')
  }
}
