import React from 'react';

function Button({btnColor,bgSetter,bgColor}) {
  return (
    <>
      <button className='shadow-md text-white py-3 px-5 rounded-3xl' style={{backgroundColor: btnColor}} onClick={()=>{bgSetter(btnColor)}}>{btnColor}</button>
    </>
  );
}

export default Button;
