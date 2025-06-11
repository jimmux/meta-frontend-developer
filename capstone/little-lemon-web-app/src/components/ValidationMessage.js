const ValidationMessage = ({ message, ...rest }) => {
  if (!message) {
    return (<p {...rest}></p>);
  }

  return (
    <p {...rest}>
      {message}
    </p>
  );
};

export default ValidationMessage;
