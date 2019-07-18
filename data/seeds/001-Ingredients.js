exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'Egg' },
        { ingredient_name: 'teaspoon Vanilla Extract' },
        { ingredient_name: 'teaspoon Salt' },
        { ingredient_name: 'cup white Sugar' },
        { ingredient_name: 'cup of enriched Flour' },
        { ingredient_name: 'Cup of Walnut' },
        { ingredient_name: 'Teaspoon Baking Powder' },
        { ingredient_name: 'Teaspoon Baking Soda' },
        { ingredient_name: 'Teaspoon ground cinnamon' },
        { ingredient_name: 'Teaspoon Brown Sugar' },
        { ingredient_name: 'Instant Expresso Powder' },
        { ingredient_name: 'Cup Butter' },
        { ingredient_name: 'Unsalted Butter' },
        { ingredient_name: 'Teaspoon Ground Cardamom' },
        { ingredient_name: 'Chocolate Chips' },
        { ingredient_name: 'Egg yolk' },
      ]);
    });
};
