import React, { Component } from 'react';
// import { connect } from 'react-redux';

class RecipeItem extends Component {
    render() {
        return (

            <h4> {this.props.recipe.title}</h4>
                
        )
    }
}

// function mapStateToProps(state) {
//     return state;
// }

export default RecipeItem;