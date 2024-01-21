// eslint-disable-next-line react/prop-types
function ErrorMessage({ items }) {
  // eslint-disable-next-line react/prop-types
  return <>{items.length === 0 ? <h3>I am still hungry!</h3> : null}</>;
}

export default ErrorMessage;
