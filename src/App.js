
// import './App.css';

// function App() {

//   const inputArea = document.querySelector(".large-area--input");
//   const outputArea = document.querySelector(".large-area--output");
//   const btnFormat = document.querySelector(".controls__button--format");
//   const btnMinify = document.querySelector(".controls__button--minify");

//   btnFormat.addEventListener("click", () => {
//   const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);

//   outputArea.value = formatted;
// });

// btnMinify.addEventListener("click", () => {
//   const minified = JSON.stringify(JSON.parse(inputArea.value));

//   outputArea.value = minified;
// });

//   return (
//     <div className="App">
//       <div class="container">
//           <textarea class="large-area large-area--input" placeholder="Enter your JSON here..."></textarea>
//         <div class="controls">
//           <button type="button" class="controls__button controls__button--format">Format</button>
//           <button type="button" class="controls__button controls__button--minify">Minify</button>
//         </div>
//         <textarea readonly class="large-area large-area--output" placeholder="Your JSON will appear here..."></textarea>
//       </div>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import React, { useEffect, useState } from "react";
export default function App() {
  const [jsonString, setJsonString] = useState("");
  const [prettierJson, setPrettierJson] = useState("");
  
  
  
//   useEffect(() => {
//     console.log(jsonString);
//     if(jsonString){
//       const formatted = JSON.stringify(JSON.parse(jsonString), null, 4);
//       setPrettierJson(formatted);
//     }
//     // const formatted = JSON.stringify(JSON.parse(jsonString), null, 4);
// },[jsonString])
const getPrettierJson = () => {
  if(jsonString){
    const formatted = JSON.stringify(JSON.parse(jsonString), null, 4);
    setPrettierJson(formatted);
  }
}

  return (
    <div className="App">
     <textarea type = "text" value = {jsonString} onChange = {(e) => {setJsonString(e.target.value)}}></textarea>
     <button onClick={getPrettierJson} >Format</button>
     <textarea type = "text" value = {prettierJson}></textarea>
    </div>
  );
}