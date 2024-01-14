import {
  useState,
  useRef
} from "react"; 
import "./App.css";
import CalculatorButton from "./components/CalculatorButton";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  const buttons = {
    "add": () => updateWithInput((a, b) => a + b),
    "subtract": () => updateWithInput((a, b) => a - b),
    "multiply": () => updateWithInput((a, b) => a * b),
    "divide": () => updateWithInput((a, b) => b ? a / b : a),
    "reset input": () => inputRef.current.value = "",
    "reset result": () => setResult(0)
  };

  function updateWithInput(action) {
    setResult(action(result, Number(inputRef.current.value))); 
  }

  const renderButtons = (buttonData) => Object.entries(buttonData)
    .map(([label, action]) =>
      <CalculatorButton
        key={label}
        label={label}
        action={action}
      />
  );
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        />
        { renderButtons(buttons) }
      </form> 
    </div> 
  ); 
} 
 
export default App; 
