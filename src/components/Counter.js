import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => console.log("Callback value", this.state.count)
    // );
    // console.log(this.state.count); //asynchronous approach the value is not updated because according to asynchronous rule, console statement is executed before setState is finished updating the state.
    this.setState(prevState => ({
        count: prevState.count +1
    }
    ))
    console.log(this.state.count)

}

incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}

  render() {
    return (
      <div>
        Count - {this.state.count}
        <br />
        <button
          onClick={() => {
            this.incrementFive();
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
