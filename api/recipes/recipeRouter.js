const express = require('express');
const { getRecipes } = require('./recipeModels');

const recipeRouter = express.Router();

recipeRouter.get('/', async (req, res) => {
  try {
    const recipes = await getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Error getting Recipes ' });
  }
});

module.exports = recipeRouter;
