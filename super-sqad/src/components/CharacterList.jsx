import React, {Component} from 'react';
import {connect} from 'react-redux';


class CharacterList extends Component {
    render(){
        console.log("props in char list: ", this.props);
        return(
            <div>
            <h4>Character</h4>
            <ul>
                {this.props.characters.map(characters => {
                    return(
                        <li key={characters.id}>{characters.name}</li>
                    )
                })}    
            </ul>    
            </div>

        )
    }
}

function mapStateToProps(state){
    console.log("state in mapStateToProps: ", state );
        //this state is equivalent to our current store
    // debugger;
    return{characters: state.characters};
    
};
export default connect(mapStateToProps, null)(CharacterList);