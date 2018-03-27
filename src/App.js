import React from 'react';
import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import './App.css';

class App extends React.Component {
  state = {
    charsArr: [],
    theWord: '',
  }

  onInputChangeHandler = (event) => {
    this.setState({
      theWord: event.target.value,
      charsArr: event.target.value.split(''),
    })
  }

  render() {
    let theChars = (
      <div>
        {this.state.charsArr.map((myChar, index) => {
          return <CharComponent myChar={myChar} />
        })}
      </div>
    )

    return (
      <div>
        <input type="text" onChange={this.onInputChangeHandler} ></input>
        <br /><br />
        <ValidationComponent theWord={this.state.theWord}/>
        {theChars}
      </div>
    );
  }
}

export default App;
