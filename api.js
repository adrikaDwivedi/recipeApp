import axios from "axios";
const API_KEY = "53e25bc44c7f4fe18e72de116d998cfd";
const api = axios.create({
  baseURL: 'https://api.spoonacular.com/',
});

export const getRecipes = async (query) => {
  try {
    const response = await api.get('recipes/complexSearch', {
      params: {
        query,
        apiKey: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recipes: ', error);
    throw error;
  }
};

export const getRecipeDetails = async (recipeId) => {
  try {
    const response = await api.get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details: ', error);
    throw error;
  }
};
