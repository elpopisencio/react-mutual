import React from 'react';

var style = {
  padding: "20px",
  position: "inerit",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '20px',
height: '60px',
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