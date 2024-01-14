const onClick = (event, action) => {
        event.preventDefault();
        action();    
}

const CalculatorButton = ({ label, action }) =>
    <button onClick={(event) => onClick(event, action)}>{label}</button>;

export default CalculatorButton;
