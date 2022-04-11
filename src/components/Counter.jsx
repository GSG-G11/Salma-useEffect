import React, { useEffect, useState } from 'react';
function Counter() {
  const [counter, setCounter] = useState(0);
  const incrementCount = () => {
    setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    document.addEventListener('mousedown', incrementCount);

    return () => {
      console.log('cleanup');
      document.removeEventListener('mousedown', () => {});
    };
  });
  return (
    <div>
      <p>Counter : {counter}</p>
    </div>
  );
}

export default Counter;
