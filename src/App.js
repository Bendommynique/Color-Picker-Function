import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState();

 const divStyle = {backgroundColor: color};
  return (
    <div style={divStyle}>
    <p>The color is {color}</p>
    <button onClick={() => setColor('Aquamarine')}>
      Aquamarine
    </button>
    <button onClick={() => setColor('BlueViolet')}>
      BlueViolet
    </button>
    <button onClick={() => setColor('Chartreuse')}>
      Chartreuse
    </button>
    <button onClick={() => setColor('CornflowerBlue')}>
      CornflowerBlue
    </button>
  </div>
  );
}

export default App;
