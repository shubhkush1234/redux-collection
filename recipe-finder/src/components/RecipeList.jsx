import React, { Component } from 'react';
// import { Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

class RecipeList extends Component {


    render() {
        console.log("this.props", this.props);

        return (
            <div>
                I'm recipeList
                <div>
                    {
                        this.props.recipes.map((recipe, index) => {
                            return (
                                <RecipeItem key={index}
                                 recipe={recipe}
                                 favouriteButton={true}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

//now lets create our mapStateToProps which will return an object containing our recipes from redux store.

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(RecipeList);