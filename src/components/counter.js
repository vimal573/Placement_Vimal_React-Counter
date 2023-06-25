import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount(count + 1);
  };

  const decCount = () => {
    if (count > 0) setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {count} </h1>
          <div className="btn_div">
            <button onClick={incCount}> Inc </button>
            <button onClick={decCount}> Dec </button>
            <button onClick={resetCount}> Reset </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
