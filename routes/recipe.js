const express = require("express");
const router = express.Router();

// ******************** RECIPE ROUTES ********************
module.exports = (databaseHelperFunctions) => {
  // check if recipe exists
  router.post("/check", (req, res) => {
    const { recipeName } = req.query;
    databaseHelperFunctions
      .checkRecipe(recipeName)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.status(500).send(err));
  });

  // add recipe to recipe table
  router.post("/add", (req, res) => {
    const {
      recipeName,
      calories,
      fatInG,
      carbsInG,
      proteinInG,
      sugarInG,
      fiberInG,
      cholesterolInMg,
      sodiumInMg,
      imageUrl,
    } = req.body;

    databaseHelperFunctions
      .addRecipe(
        recipeName,
        calories,
        fatInG,
        carbsInG,
        proteinInG,
        sugarInG,
        fiberInG,
        cholesterolInMg,
        sodiumInMg,
        imageUrl
      )
      .then((data) => {
        console.log("the data is:", data);
        res.json(data);
      })
      .catch((err) => console.error(err));
  });

  return router;
};