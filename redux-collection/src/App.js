import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import { render } from '@testing-library/react';
import React from 'react';
import AgeStats from './components/AgeStats';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      newDate: '',
      birthday: '1995-11-13'
    }
  };

  changeBirthday = () => {
    console.log(this.state);
    this.setState({ birthday: this.state.newDate });
  };

  render() {
    return (
      <div className="App">
        <h2>Enter your birthday:</h2>
        <Form>
          <FormControl type="date" onChange={(event) => this.setState({ newDate: event.target.value })}>
          </FormControl><br />
          {' '}
          <Button onClick={() => this.changeBirthday()}>Submit</Button>
          {/* if instead of writing () => this.changeBirthday() inside onClick,
           if we give this.changeBirthday() alone, it will be executed even if the btn is not clicked */}
          <AgeStats date={this.state.birthday || "enter some date dude"} />

        </Form>
        {' '}
      </div>
    );
  }
}

export default App;
