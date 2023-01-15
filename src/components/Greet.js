import React from "react";

// function Greet() {
//     return <h1>Hello Ishita</h1>
// }

// const Greet = (props) => {
//   console.log(props);
//   return(
//     <div>

//       <h1>Hello {props.firstname} {props.lastname}!</h1>
//         {props.children}

//     </div>

//   )
// };
const Greet = ({ firstname, lastname }) => {
  return (
    <div>
      <h1>
        Hello {firstname} {lastname}!
      </h1>
      {/* {props.children} */}
    </div>
  );
};
// export const Greet = () => <h1>Hello Ishita!</h1>

export default Greet;
