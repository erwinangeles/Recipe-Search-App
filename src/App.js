import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = 'bf3fa3dd';
  const APP_KEY = 'b2e02205265fe7cab5030eee41e02681';
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('apple');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
   setSearch(e.target.value); 
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>

      </form>
      <div className="recipes">
      {recipes.map((recipe, i) => (
        <Recipe 
        key={i}
        title={recipe.recipe.label}
        calories={parseInt(recipe.recipe.calories)}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
         />
      ))}
      </div>
    </div>
  );
}

export default App;
