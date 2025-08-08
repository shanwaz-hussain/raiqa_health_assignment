import React, { useState } from "react";

export default function Counter({ addNumber }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

 const handleAdd = () => {
    addNumber(count);
    setCount(0);
  };

  return (
    <div className="section" style={{ marginBottom: 20 }}>
      <h2>Counter & List App</h2>
      <div className="big-number">{count}</div>
      <div className="btn-bar">
      <button
        onClick={decrement}
        disabled={count === 0}
        className="app-btn"
      >
        -
      </button>
      <button
        onClick={increment}
        className="app-btn"
      >
        +
      </button>

      <button
        onClick={handleAdd}
        disabled={count === 0}
       className="app-btn"
      >
        Add
      </button>
      </div>
    </div>
  );
}
