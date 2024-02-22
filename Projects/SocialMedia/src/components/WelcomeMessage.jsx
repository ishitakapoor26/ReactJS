// eslint-disable-next-line react/prop-types
const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h1>There are no posts!</h1>;
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostsClick}
      >
        Get Post from Server
      </button>
    </center>
  );
};

export default WelcomeMessage;
