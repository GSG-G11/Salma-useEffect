import React, { useEffect, useState } from 'react';

function ChangeColor() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    const {offsetX, offsetY} = e;
    setX(offsetX);
    setY(offsetY);
  };
  useEffect(() => {
    document.body.style.background = 'blue';
    document.addEventListener('mousemove', () => {
      if (window.event.clientX > window.innerWidth / 2) {
        document.body.style.background = 'blue';
      } else {
        document.body.style.background = 'tomato';
      }
    });
    window.addEventListener('mousemove', logMousePosition);
    return () => {
        window.removeEventListener('mousemove', () => {})
      }
  }, []);
  return (
    <div>
      <p>{`i am now on  x:${x} , y : ${y} `}</p>
    </div>
  );
}

export default ChangeColor;
