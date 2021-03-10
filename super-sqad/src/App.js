import React from 'react';
import CharacterList from './components/CharacterList';
import '../src/styles/index.css';
import HeroList from './components/HeroList';
class App extends React.Component {

  constructor() {
    super();

    // this.state = {
      
    // }
  };

  render() {
    return (
      <div className="App">
        <h2>super squad</h2>
        <CharacterList/>
        <HeroList/>        
      </div>
    );
  }
}

export default App;
