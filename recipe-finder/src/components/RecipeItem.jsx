import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favouriteRecipes } from '../actions/index';

class RecipeItem extends Component {

    constructor() {
        super();
        this.state = {
            favorited: false
        }
    }

    favourite(recipe) {
        this.props.favouriteRecipes(recipe);
        this.setState({
            favorited: true
        });
        console.log(this.state);
    }

    render() {

        let { recipe } = this.props;

        return (
            <div className="recipe-item">

                {
                    this.props.favouriteButton ?

                        this.state.favorited ? <div className="star">&#9733;</div> :
                            <div className="star" onClick={() => this.favourite(recipe)}>&#9734;</div>

                        : <div></div>
                }


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

export default connect(null, { favouriteRecipes })(RecipeItem);