import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favouriteRecipes } from '../actions';
import RecipeItem from './RecipeItem';

class FavouriteRecipesList extends Component {
    render() {
        return (

            <div>

                <h4>Favourite items list</h4>

                {this.props.favouriteRecipes.map((recipe, index) => {
                    return (

                <RecipeItem key={index}
                 recipe={recipe}
                 favouriteButton={false} />

                )


            })}

            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        favouriteRecipes: state.favouriteRecipes

    }
}

export default connect(mapStateToProps, null)(FavouriteRecipesList);