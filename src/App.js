// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import NameList from './components/NameList';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';

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
        {/* <EventBind /> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting /> */}
      <NameList />
      </div>
    );
  }
}

export default App;
