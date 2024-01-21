function App() {
  let mpp = ["Dal", "Roti", "Rice"];

  // Conditional Rendering
  // if (mpp.length === 0) {
  //   return <h3>I am still hungry!</h3>;
  // }

  return (
    <>
      <h1>Healthy Food</h1>
      {mpp.length === 0 ? <h3>I am still hungry!</h3> : null}
      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
        {mpp.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
