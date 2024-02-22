import React from 'react';
import Button from './button';

function Bar({bgColor,bgSetter}) {
    const btnColor = [
        'Black',
        'Grey',
        'Pink',
        'Orange',
        'Yellowgreen',
        'Red',
        'Salmon',
        'Yellow',
        'Blue'
    ]
  return (
    <div className='flex gap-3 justify-center items-center w-3/4 rounded-lg absolute bottom-14 left-40 h-16 bg-slate-300'>
      <Button btnColor = {btnColor[0]} bgColor = {bgColor} bgSetter = {bgSetter}></Button>
      <Button btnColor = {btnColor[1]} bgColor = {bgColor} bgSetter = {bgSetter}></Button>
      <Button btnColor = {btnColor[2]} bgColor = {bgColor} bgSetter = {bgSetter}></Button>
      <Button btnColor = {btnColor[3]} bgColor = {bgColor} bgSetter = {bgSetter}></Button>
      <Button btnColor = {btnColor[4]} bgColor = {bgColor} bgSetter = {bgSetter}></Button>
      <Button btnColor = {btnColor[5]} bgColor = {bgColor} bgSetter = {bgSetter}></Button>
      <Button btnColor = {btnColor[6]} bgColor = {bgColor} bgSetter = {bgSetter}></Button>
      <Button btnColor = {btnColor[7]} bgColor = {bgColor} bgSetter = {bgSetter}></Button>
      <Button btnColor = {btnColor[8]} bgColor = {bgColor} bgSetter = {bgSetter}></Button>
    </div>
  );
}

export default Bar;
