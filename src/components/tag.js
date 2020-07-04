import React from "react"
const Tag = ({text}) => {
  return (
    <div
      className="tag"
      style={{
        padding: `2.5px 5px`,
        border: `1px solid #dddddd`,
        fontSize: `12px`,
        borderRadius: `5px`,
        textTransform: `uppercase`,
        whiteSpace: `nowrap`,
        color: `rgba(0, 0, 0, 0.8)`
      }}
      >
      {text}
    </div>
  )
}

export default Tag
