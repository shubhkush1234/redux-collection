import React, { Component } from 'react';
// import { Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';

class RecipeList extends Component {


    render() {
        console.log("this.props", this.props);

        return (
            <div>
                I'm recipeList
                <div>
                    {
                        this.props.recipes.map((recipes, index) => {
                            return (
                                <div key={index}>
                                    <h5>{recipes.title}</h5>
                                </div>
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