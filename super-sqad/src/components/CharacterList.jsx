import React, {Component} from 'react';
import {connect} from 'react-redux';


class CharacterList extends Component {
    render(){
        return(
            <div>Character</div>
        )
    }
}

function mapStateToProps(state){
    console.log("state: ", state);
    return{};
};
export default connect(mapStateToProps, null)(CharacterList);