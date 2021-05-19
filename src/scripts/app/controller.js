import consoleSeparator from './app';
//model
import * as model from './model';
import paginationView from './views/paginationView';

//views
import recipeView from './views/recipeView';
import resultsView from './views/resultsView';
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
    resultsView.renderSpinner();
    //1). Get Search query
    const query = searchView.getQuery();

    if (!query) throw new Error('An invalid request');

    //2). call load search results
    await model.loadSearchResults(query);

    //get the query string
    resultsView.getQueryString(model.state.search.query);

    //3). Render results
    //resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage(1));

    //4). Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
    resultsView.renderError(err);
  }
};

const controlPagination = function (goToPage) {
  //1). render new results
  resultsView.render(model.getSearchResultsPage(goToPage));
  //2). pagination updated buttons
  paginationView.render(model.state.search);
};

//publisher-subscriber pattern
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();
