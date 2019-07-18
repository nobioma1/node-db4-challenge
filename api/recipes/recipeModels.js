const db = require('../../data/dbConfig');

module.exports = { getRecipes, getShoppingList, getInstructions };

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
