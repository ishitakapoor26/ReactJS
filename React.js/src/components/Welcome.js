import React, {Component} from 'react'

class Welcome extends Component{
    // render() {
    //     return <h1>Welcome {this.props.firstname}</h1>
    // }
    render() {
        const {firstname} = this.props //Destructing props and state
        // const {state1, state2} =this.state
        return <h1>Welcome {firstname}</h1>
    }
}

export default Welcome