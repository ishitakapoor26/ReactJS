function TodoItem1() {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">Buy Milk</div>
        <div className="col-4">04/10/2023</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
