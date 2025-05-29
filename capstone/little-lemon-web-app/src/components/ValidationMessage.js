const ValidationMessage = ({ message }) => {
  if (!message) {
    return (<p></p>);
  }

  return (
    <p>
      {message}
    </p>
  );
};

export default ValidationMessage;
