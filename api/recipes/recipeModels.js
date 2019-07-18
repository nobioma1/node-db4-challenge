const db = require('../../data/dbConfig');

module.exports = { getRecipes, getShoppingList };

function getRecipes() {
  return db('recipes');
}

function getShoppingList(recipe_id) {
  return db('recipeDetails')
    .select('ingredients.ingredient_name', 'recipeDetails.ingredient_qty')
    .innerJoin('ingredients', 'ingredient_id', 'ingredients.id')
    .where({ recipe_id: recipe_id });
}
