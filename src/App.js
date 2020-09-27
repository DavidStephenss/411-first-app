import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './components/ListComponent';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      items: [],
      isClicked: false
    };
  }

//   toggle = () => {
// this.setState({isOn: !this.state.isOn})
//   }

  formSubmit = event => {
  event.preventDefault()
  this.setState({
    items : [...this.state.items, this.state.input],
    input: ''
   })
  }

  inputUpdate = event => {
    this.setState({input: event.target.value})
  }

  
  render () {
  console.log("***THIS IS STATE***", this.state.isOn)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <input id="todoInput" value={this.state.input} onChange={this.inputUpdate}/>
          <button onClick={this.formSubmit}> submit </button>
        </form>
        <ListComponent items={this.state.items}/>
      </header>
    </div>
  );
}
}

export default App;

