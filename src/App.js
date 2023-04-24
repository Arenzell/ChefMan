import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import RecipeComponent from "./components/recipe";
import FormComponent from "./components/form";
import HomeComponent from "./components/home";
require("dotenv").config();

function App() {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [Recipes, setRecipes] = useState([]);
  var REQ_URL = `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${API_KEY}`;

  const [initial, setInitial] = useState(true);

  const fetchRecipes = async () => {
    await fetch(REQ_URL)
      .then((res) => res.json())
      .then((data) => setRecipes(data.hits));
  };

  const newSearch = (e, searchInput) => {
    if (initial) {
      setInitial(false);
    }
    e.preventDefault();
    REQ_URL = `https://api.edamam.com/search?q=${searchInput.Search}&app_id=${APP_ID}&app_key=${API_KEY}`;
    fetchRecipes();
  };
  if (!initial) {
    return (
      <div className="app">
        <FormComponent submit={newSearch} />
        <div className="row content">
          {Recipes.map((rec, index) => (
            <RecipeComponent
              key={index}
              image={rec.recipe.image}
              calories={rec.recipe.calories}
              title={rec.recipe.label}
              share={rec.recipe.shareAs}
              ingredients={rec.recipe.ingredientLines}
              url={rec.recipe.url}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <HomeComponent submit={newSearch} />;
  }
}

export default App;
