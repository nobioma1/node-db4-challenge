exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Walnut-Cream Roll' },
        { recipe_name: 'Cardamom and Espresso Chocolate Chip Cookies' },
      ]);
    });
};
