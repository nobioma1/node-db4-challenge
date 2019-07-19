const db = require('../../data/dbConfig');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesForIngredient,
};

function getRecipes() {
  return db('recipes');
}

function getShoppingList(recipe_id) {
  return db('recipeDetails')
    .select('ingredients.ingredient_name', 'recipeDetails.ingredient_qty')
    .innerJoin('ingredients', 'ingredient_id', 'ingredients.id')
    .where({ recipe_id });
}

function getInstructions(recipe_id) {
  return db('instructions')
    .select('instruction', 'instruction_step')
    .where({ recipe_id })
    .orderBy('instruction_step');
}

function getRecipesForIngredient(ingredient_id) {
  return db('recipeDetails')
    .select('recipe_name')
    .innerJoin('recipes', 'recipe_id', 'recipes.id')
    .where({ ingredient_id });
}
