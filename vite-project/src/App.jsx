import {useState} from "react";
import Caption from "./Caption.jsx";
import Input from "./Input.jsx";

export const App = () => {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
      setInput(e.target.value);
  }
    return (
        <div className="container">
            <Input onChange={inputHandler}/>
            <Caption input={'Character count'} str={input}/>
        </div>
    )
}

export default App;
