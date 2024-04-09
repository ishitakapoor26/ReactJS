import React from 'react'

const Hello =()=> {
    // JSX version of Hello component
    // return(
    //     <div className= 'dummyClass'>
    //         <h1>
    //             Hello Ishita!
    //         </h1>
    //     </div>
    // )
    return React.createElement('div',
    {id: 'hello', className: 'dummyClass'},
     React.createElement('h1',null, 'Hello Ishita'))
}

export default Hello