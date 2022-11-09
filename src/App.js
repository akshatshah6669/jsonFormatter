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
  const [output, setOutput] = useState("");
  const [jsonObj, setJsonObj] = useState(defaultData);
  const [formated, setFormated] = useState(false);

  

  function handleChange(e) {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const temp = JSON.parse(JSON.stringify(jsonObj));

    setJsonObj(e.set(temp, name, value));
  }

  const formatJson = () => {
    setFormated(true);
    if (input) {
      const inputParsed = JSON.parse(input);
      const beautifiedInput = JSON.stringify(inputParsed, null, 4);
      setJsonObj(inputParsed);
      // setOutput(beautifiedInput);
    }
  };

  const handleEdit = (e) => {
    setFormated(false);
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
      <JSONTree jsonObj={jsonObj} handleChange={handleChange} />
    </div>
  );
}
export default App;
