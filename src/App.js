import React, { useState } from 'react';
import './App.css';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle',
 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

function App() {
  const [color, setColor] = useState();

 const divStyle = {backgroundColor: color};
  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>(
        <button 
          onClick={() => setColor(colorName)} 
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
    </div>
  );
}

export default App;
