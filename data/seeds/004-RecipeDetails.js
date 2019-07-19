exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipeDetails')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipeDetails').insert([
        { ingredient_qty: 4, ingredient_id: 1, recipe_id: 1 },
        { ingredient_qty: 0.5, ingredient_id: 6, recipe_id: 1 },
        { ingredient_qty: 1, ingredient_id: 2, recipe_id: 1 },
        { ingredient_qty: 0.5, ingredient_id: 3, recipe_id: 1 },
        { ingredient_qty: 0.5, ingredient_id: 4, recipe_id: 1 },
        { ingredient_qty: 0.8, ingredient_id: 5, recipe_id: 1 },
        { ingredient_qty: 4, ingredient_id: 16, recipe_id: 1 },
        { ingredient_qty: 0.5, ingredient_id: 6, recipe_id: 1 },
        { ingredient_qty: 0.75, ingredient_id: 5, recipe_id: 2 },
        { ingredient_qty: 1, ingredient_id: 7, recipe_id: 2 },
        { ingredient_qty: 1, ingredient_id: 8, recipe_id: 2 },
        { ingredient_qty: 1, ingredient_id: 9, recipe_id: 2 },
        { ingredient_qty: 1, ingredient_id: 14, recipe_id: 2 },
        { ingredient_qty: 0.5, ingredient_id: 3, recipe_id: 2 },
        { ingredient_qty: 1.5, ingredient_id: 10, recipe_id: 2 },
        { ingredient_qty: 1, ingredient_id: 12, recipe_id: 2 },
        { ingredient_qty: 1, ingredient_id: 4, recipe_id: 2 },
        { ingredient_qty: 2, ingredient_id: 1, recipe_id: 2 },
        { ingredient_qty: 2, ingredient_id: 2, recipe_id: 2 },
        { ingredient_qty: 12, ingredient_id: 15, recipe_id: 2 },
      ]);
    });
};
