import { useState } from "react"

function TreeNode(props) {
    const [display, setDisplay] = useState(false)
  
    const { node, nodeKey, level, handleChange, propKey } = props
  
    if (typeof node === 'string' || typeof node === 'number' || node === null) {
      return (
        <>
          <p style={{ marginLeft: level * 10 + 'px' }}>
            <span>
              {nodeKey}:&nbsp;
              {node}
            </span>
          </p>
        </>
      )
    } else if (typeof node === 'boolean') {
      return (
        <>
          <p style={{ marginLeft: level * 10 + 'px' }}>
            <span>
              {nodeKey}:&nbsp;
              {node.toString()}
                <label>
                  {node.toString()}
                </label>
            </span>
          </p>
        </>
      )
    } else if (
      typeof node === 'object' &&
      !Array.isArray(node) &&
      node !== null
    ) {
      const root = props.getNode(node)
  
      return (
        <>
          <p style={{ marginLeft: level * 10 + 'px' }}>
            <span
              onClick={() => setDisplay(!display)}
            >
              {nodeKey}
              {" > "} {'{'}
            </span>
          </p>
          {display &&
            root.map((data) => (
              <TreeNode
                key={propKey + '[' + data.nodeKey + ']'}
                propKey={propKey + '[' + data.nodeKey + ']'}
                nodeKey={data.nodeKey}
                node={data.value}
                getNode={props.getNode}
                level={level + 1}
                handleChange={handleChange}
              />
            ))}{' '}
          <p style={{ marginLeft: level * 10 + 'px' }}> {'}'} </p>
        </>
      )
    } else if (Array.isArray(node)) {
      const root = props.getNode(node)
      return (
        <>
          <p style={{ marginLeft: level * 10 + 'px' }}>
            <span
              onClick={() => setDisplay(!display)}
            >
              {nodeKey}
              {'[' + root.length + ']'} {'['}
            </span>
          </p>
          {display &&
            root.map((data) => (
              <TreeNode
                key={propKey + '[' + data.nodeKey + ']'}
                propKey={propKey + '[' + data.nodeKey + ']'}
                nodeKey={data.nodeKey}
                node={data.value}
                getNode={props.getNode}
                level={level + 1}
                handleChange={handleChange}
              />
            ))}
          <p style={{ marginLeft: level * 10 + 'px' }}>{']'}</p>
        </>
      )
    } else {
      return <p>{nodeKey}</p>
    }
  }

  export default TreeNode;