import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-4 text-center h-20 text-2xl font-bold">
      <div className="counter-controls grid grid-cols-2 grid-rows-1 gap-2">
        <button className="plus-btn" onClick={() => setCounter(counter + 1)}>
          +
        </button>
        <button className="minus-btn" onClick={() => setCounter(counter - 1)}>
          -
        </button>
      </div>
      <div className="counter border-2 rounded-xl flex justify-center items-center w-1/2 justify-self-end">
        {counter}
      </div>
    </div>
  );
}

export default Counter;
