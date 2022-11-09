import TreeNode from "./TreeNode";

 function JSONTree(props) {
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
        <p>{"object {" + ">" + "}"}</p>
        {root.map((data) => (
          <TreeNode
            key={data.nodeKey}
            propKey={data.nodeKey}
            nodeKey={data.nodeKey}
            node={data.value}
            getNode={getNode}
            level={1}
            handleChange={props.handleChange}
          />
        ))}
      </div>
    );
  }

  export default JSONTree;