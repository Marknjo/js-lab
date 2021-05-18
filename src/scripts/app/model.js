import consoleSeparator from './app';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    //1. Loading single recipe
    const resp = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );

    //convert to JSON -> Get data
    const data = await resp.json();

    //check errors
    if (!resp.ok) throw new Error(`${data.message} (${resp.status})`);

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

    console.log(state.recipe);
  } catch (err) {
    alert(err);
  }
};
