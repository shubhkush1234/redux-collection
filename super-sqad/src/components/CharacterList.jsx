import React, {Component} from 'react';
import {connect} from 'react-redux';


class CharacterList extends Component {
    render(){
        console.log("props in char list: ", this.props);
        return(
            <div>Character</div>
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