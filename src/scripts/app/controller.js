import consoleSeparator from './app';
import { MODAL_CLOSE_SECS } from './config';
import { calcNumPages } from './helpers';
//model
import * as model from './model';
import addRecipeView from './views/addRecipeView';
import bookmarksView from './views/bookmarksView';
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
    //0) update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

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
    resultsView.getPaginationInfo(
      model.state.search.page,
      model.state.search.totalSearchResults
    );

    resultsView.render(model.getSearchResultsPage());

    //4). Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
    resultsView.renderError(err);
  }
};

const controlPagination = function (goToPage) {
  try {
    const numPages = calcNumPages(
      model.state.search.results,
      model.state.search.resultsPerPage
    );

    if (goToPage > numPages || !goToPage || goToPage < 0)
      throw new Error(`Can't fetch requested page`);

    resultsView.getPaginationInfo(
      goToPage,
      model.state.search.totalSearchResults
    );

    //1). render new results
    resultsView.render(model.getSearchResultsPage(goToPage));
    //2). pagination updated buttons
    paginationView.render(model.state.search);
  } catch (err) {
    resultsView.renderError(err);
  }
};

//Updating servings
const controlServings = function (newServings) {
  //update the recipe servings (in state)
  model.updateServings(newServings);
  //update the recipe view
  //recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlBookmarkStatus = function () {
  //1). handle toggle bookmarks status
  model.state.recipe.bookmarked
    ? model.deleteBookmark(model.state.recipe.id)
    : model.addBookmark(model.state.recipe);

  //2) update recipe view
  recipeView.update(model.state.recipe);

  //3). Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarksFreshPageLoad = function () {
  if (model.state.bookmarks.length < 1) return;
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  //
  try {
    //show loading spinner
    addRecipeView.renderSpinner();

    //Upload data
    await model.uploadRecipe(newRecipe);

    //render recipe
    recipeView.render(model.state.recipe);

    //Render bookmarks
    bookmarksView.render(model.state.bookmarks);

    //success message
    addRecipeView.renderMessage();

    //close model
    await new Promise(resolve => {
      resolve(
        setTimeout(() => {
          addRecipeView.toggleWindow();
        }, MODAL_CLOSE_SECS * 1000)
      );
    });
  } catch (err) {
    console.log(`💥💥 ${err}`);
    addRecipeView.renderError(err);
  }
};

//publisher-subscriber pattern
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarksFreshPageLoad);

  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlBookmarkStatus);

  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);

  addRecipeView.addHandlerUpload(controlAddRecipe);

  //addRecipeView();
};

init();
