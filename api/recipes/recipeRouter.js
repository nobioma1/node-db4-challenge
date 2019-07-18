const express = require('express');
const { getRecipes, getShoppingList } = require('./recipeModels');

const recipeRouter = express.Router();

recipeRouter.get('/', async (req, res) => {
  try {
    const recipes = await getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Error getting Recipes ' });
  }
});

recipeRouter.get('/:id/shoppingList', async (req, res) => {
  try {
    const shoppingList = await getShoppingList(req.params.id);
    res.status(200).json(shoppingList);
  } catch (error) {
    res.status(500).json({ error: 'Error getting Shopping List for Recipe' });
  }
});

module.exports = recipeRouter;
