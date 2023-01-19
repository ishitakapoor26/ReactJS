import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {

    return this.state.isLoggedIn && <div>Welcome Ishita</div> //4th approach= Short circuit menthod; a specific case of ternary operation

    // In short circuit method, the LHS condition is checked and if it evaluates to true then only the statement followed by && is displayed on the browser else nothing happens.

    // return this.state.isLoggedIn ? ( // 3rd approach= Ternary conditional operator approach
    //   <div>Welcome Ishita!</div>
    // ) : (
    //   <div>Welcome Guest!</div>
    // );

    // let message; 2nd approach= Element Variable approach
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Ishita</div>
    // } else{
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>
    // if (this.state.isLoggedIn) { 1st approach
    //   return <div>Welcome Ishita!</div>;
    // } else {
    //   return <div>Welcome Guest!</div>;
    // }
  }
}

export default UserGreeting;
