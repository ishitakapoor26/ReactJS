import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Greet firstname= 'Ishita' lastname='Kapoor'>
          <p>This is a children prop.</p>
          </Greet>
        <Welcome firstname='Ishita'/>
        <FunctionClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
