import consoleSeparator from './app';
//model
import * as model from './model';

//views
import recipeView from './views/recipeView';
import searchView from './views/searchView';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    //render spinner
    recipeView.renderSpinner();

    //1). loading recipe
    await model.loadRecipe(id);

    //2. Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    //1). Get Search query
    const query = searchView.getQuery();

    if (!query) return;

    //2). call load search results
    await model.loadSearchResults(query);

    //3). Render results
    console.log(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

//publisher subscriber pattern

//publisher-subscriber pattern
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
