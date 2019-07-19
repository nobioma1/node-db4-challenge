exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          instruction_step: 1,
          instruction:
            'Preheat the oven to 375 degrees F (190 degrees C). Line the bottom and sides of a 15 1/2x10 1/2x1-inch jelly roll pan with waxed paper.',
          recipe_id: 1,
        },
        {
          instruction_step: 2,
          instruction:
            'Beat egg whites, vanilla extract, and salt using an electric mixer in a mixing bowl until soft peaks form. Beat in 1/2 cup white sugar gradually until combined.',
          recipe_id: 1,
        },
        {
          instruction_step: 3,
          instruction:
            'Beat egg yolks in a separate bowl using an electric mixer until thick and lemon-colored. Fold into egg white mixture. Fold in flour and chopped walnuts carefully until combined. Spread batter into the prepared jelly roll pan.',
          recipe_id: 1,
        },
        {
          instruction_step: 4,
          instruction:
            'Bake in the preheated oven until cake springs back when lightly touched and a toothpick inserted into the center comes out clean, about 12 minutes.',
          recipe_id: 1,
        },
        {
          instruction_step: 5,
          instruction:
            'Remove from the oven and let cool for 5 minutes. Loosen sides of cake; turn out onto a towel sprinkled with sifted confectioners sugar. Peel off wax paper and let cool to lukewarm, 5 to 10 minutes.',
          recipe_id: 1,
        },
        {
          instruction_step: 6,
          instruction:
            'Roll cake and towel together starting at the narrow end. Let cool completely on a wire rack, 15 to 20 minutes.',
          recipe_id: 1,
        },
        {
          instruction_step: 7,
          instruction:
            'While cake cools, beat cold heavy cream and 1 tablespoon white sugar together in a mixing bowl using an electric mixer just until stiff peaks form.',
          recipe_id: 1,
        },
        {
          instruction_step: 8,
          instruction:
            'Unroll cake and spread with whipped cream, reserving some for topping. Re-roll cake and let chill in the refrigerator for at least 30 minutes. Top with dollops of whipped cream and walnut halves. Slice and serve.',
          recipe_id: 1,
        },
        {
          instruction_step: 1,
          instruction:
            'Preheat the oven to 350 degrees F (175 degrees C). Line 2 baking sheets with parchment paper.',
          recipe_id: 2,
        },
        {
          instruction_step: 2,
          instruction:
            'Whisk flour, baking powder, baking soda, cardamom, cinnamon, and salt together in a bowl.',
          recipe_id: 2,
        },
        {
          instruction_step: 3,
          instruction:
            'Cream brown sugar, butter, and white sugar together in a bowl until fluffy. Beat in eggs 1 at a time until thoroughly combined. Mix in instant espresso powder and vanilla extract.',
          recipe_id: 2,
        },
        {
          instruction_step: 4,
          instruction:
            'Mix flour mixture into the butter mixture until just combined; do not overmix. Fold in chocolate chips.',
          recipe_id: 2,
        },
        {
          instruction_step: 5,
          instruction:
            'Drop dough by the tablespoon onto the prepared baking sheets about 2 inches apart.',
          recipe_id: 2,
        },
        {
          instruction_step: 6,
          instruction:
            'Bake in the preheated oven until edges of cookies are set, 10 to 15 minutes. Cool cookies on the pans 2 to 3 minutes before transferring to a wire rack to cool completely.',
          recipe_id: 2,
        },
      ]);
    });
};
