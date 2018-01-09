import React from 'react';

var style = {
  padding: "0px",
  position: "inerit",
  left: "0",
  bottom: "0",
  height: "20px",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '0px',
height: '20px',
width: '100%',
}

function Footer({ children }) {
  return (
      <div>
          <div style={phantom} />
          <div style={style}>
              { children }
          </div>
      </div>
  )
}

export default Footer