const ValidationMessage = ({ message, className, ...rest }) => {
  return (
    <p className={`color-salmon ${className}`} {...rest}>
      {message ?? ""}
    </p>
  );
};

export default ValidationMessage;
