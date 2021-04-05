import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favouriteRecipes } from '../actions/index';

class RecipeItem extends Component {
    render() {

        let { recipe } = this.props;

        return (
            <div className="recipe-item">
                <div className="star" onClick={() =>this.props.favouriteRecipes(recipe)}>&#9734;</div>
                <div className="recipe-text">
                    <a href={recipe.href}>
                        <h4 >
                            {recipe.title}</h4>
                    </a>
                    <p>{recipe.ingredients}</p>
                </div>
                <img src={recipe.thumbnail}
                    alt={recipe.title}
                    className="recipe-img" />

                
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return state;
// }

export default connect(null, {favouriteRecipes})(RecipeItem);