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
    <div style={{ marginBottom: 20 }}>
      <h2>Counter & List App</h2>
      <div style={{ fontSize: 48, marginBottom: 20 }}>{count}</div>
      <button
        onClick={decrement}
        disabled={count === 0}
        style={{
          marginRight: 10,
          padding: "8px 16px",
          cursor: count === 0 ? "not-allowed" : "pointer",
        }}
      >
        -
      </button>
      <button
        onClick={increment}
        style={{ marginRight: 10, padding: "8px 16px", cursor: "pointer" }}
      >
        +
      </button>

      <button
        onClick={handleAdd}
        disabled={count === 0}
        style={{ padding: "8px 16px", cursor: count === 0 ? "not-allowed" : "pointer" }}
      >
        Add
      </button>
      
    </div>
  );
}
