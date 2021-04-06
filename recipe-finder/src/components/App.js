import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import styles from '../styles/index.css';
import RecipeList from './RecipeList';
import FavouriteRecipesList from './FavouriteRecipeList';

class App extends Component {
    render() {
        return (
            <div>
            <SearchRecipes/>
            <RecipeList/>
            <FavouriteRecipesList/>
            </div>
        )
    }
}
export default App;