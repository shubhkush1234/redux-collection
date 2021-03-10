import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';


class CharacterList extends Component {
    render(){
        console.log("props in char list: ", this.props);
        //It will also show all the action creators dispatched by mapDispatchToProps
        return(
            <div>
            <h4>Character</h4>
            <ul className="list-group">
                    {this.props.characters.map(characters => {
                        return (
                            <li key={characters.id} className="list-group-item">
                                <div className="list-item">{characters.name}</div>
                                <div className="list-item right-button" onClick={() => this.props.addCharacterById(characters.id)}>+
                            </div>
                            </li>
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

// function mapDispatchToProps( dispatch ){
//     return bindActionCreators({addCharacterById}, dispatch)
// };
export default connect(mapStateToProps, {addCharacterById})(CharacterList);