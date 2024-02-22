import React, { useState } from 'react';
import Bar from './components/bar';

function App() {
  const[color, setColor] = useState('black');
  return (
    <>
      <div className='transition-all relative w-full h-screen' style={{backgroundColor: color}}>
    <Bar bgColor = {color} bgSetter = {setColor}></Bar>
      </div>
    </>
  );
}

export default App;
