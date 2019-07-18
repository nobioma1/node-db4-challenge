exports.up = function(knex) {
  return knex.schema
    .createTable('ingredients', table => {
      // Ingredients Table
      table.increments();
      table
        .text('ingredient_name')
        .unique()
        .notNullable();
    })
    .createTable('recipes', table => {
      // Recipes Table
      table.increments();
      table
        .text('recipe_name')
        .unique()
        .notNullable();
    })
    .createTable('instructions', table => {
      // Instructions Table
      table.increments();
      table.integer('instruction_step').notNullable();
      table.text('instruction').notNullable();
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE');
    })
    .createTable('recipeDetails', table => {
      // Recipe Details Table
      table.increments();
      table.float('ingredient_qty').notNullable();
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipeDetails')
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients');
};
