import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>Ingredients</p>
            <ol>
               {ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient.text}</li>
               ))}
            </ol>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
};

export default Recipe;