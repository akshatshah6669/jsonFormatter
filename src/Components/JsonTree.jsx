import { useState } from "react";
import TreeNode from "./TreeNode";

 function JSONTree(props) {
    const [display, setDisplay] = useState(false);

    console.log(props);
    function getNode(obj) {
      const arr = [];
      Object.keys(obj).forEach((key) => {
        arr.push({ value: obj[key], nodeKey: key }); // [ value : value, nodeKey : key ]
      });
      return arr;
    }

    const root = getNode(props.jsonObj); //return array

    return (
      <div className="tree">
        <p>
            <span
              onClick={() => setDisplay(!display)}
            >
              <p>OUTPUT:-(Click on caret)</p>  
              {" > "} {display && "{"}
            </span>
          </p>
        {
        display
        &&
        root.map((data) => (
          <TreeNode
            key={data.nodeKey}
           
            nodeKey={data.nodeKey}
            node={data.value}
            getNode={getNode}
            level={1}
        
          />
        ))}
      </div>
    );
  }

  export default JSONTree;