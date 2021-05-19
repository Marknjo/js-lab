import consoleSeparator from './app';

import { API_URL, RES_PER_PAGE } from './config';
import { getJSON } from './helpers';

//Code
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: RES_PER_PAGE,
    page: 1,
  },
};

export const loadRecipe = async function (id) {
  try {
    //get JSON data
    const data = await getJSON(`${API_URL}${id}`);

    //format recipe data
    let { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    console.log(`${err} 💥💥💥💥`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    //fetch datahttps://forkify-api.herokuapp.com/api/v2/recipes?search=pizza
    const data = await getJSON(`${API_URL}?search=${query}`);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
  } catch (err) {
    console.log(`${err} 💥💥💥💥`);
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  //calculate the pagination
  const start = (page - 1) * state.search.resultsPerPage; //0
  const end = page * state.search.resultsPerPage; // 9;

  //return part of the results
  return state.search.results.slice(start, end);
};
