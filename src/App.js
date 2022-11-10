import "./App.css";

import { useState } from "react";
import JSONTree from "./Components/JsonTree";

const defaultData = {
    from: "Jessy",
    to: "Joe",
    title: "Water bill",
    body: {
      name : "jay",
      age : "23",
      job : {
        title : "frontend",
        salary : "10k"
      }
    },
};

function App() {
  const [input, setInput] = useState(JSON.stringify(defaultData));
  
  const [jsonObj, setJsonObj] = useState(defaultData);
  

  


  const formatJson = () => {
    
    if (input) {
      const inputParsed = JSON.parse(input);
      const beautifiedInput = JSON.stringify(inputParsed, null, 4);
      setJsonObj(inputParsed);
      return beautifiedInput;
    }
  };

  const handleEdit = (e) => {
    
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <textarea
        value={input}
        onChange={
          (e) => handleEdit(e)
        }
        placeholder="textareapaste your JSON here..."
      ></textarea>

      <div>
        <button type="button" onClick={formatJson}>
          Format
        </button>
      </div>

      {/* {formated && <JSONTree jsonObj={jsonObj} handleChange={handleChange} />} */}
      <JSONTree jsonObj={jsonObj}  />
    </div>
  );
}
export default App;
