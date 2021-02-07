import React from 'react';
import CharacterList from './components/CharacterList';
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      
    }
  };

  render() {
    return (
      <div className="App">
        <h2>super squad</h2>
        <CharacterList/>
        
      </div>
    );
  }
}

export default App;
