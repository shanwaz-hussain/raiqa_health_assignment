import React from "react";
import Counter from "./Counter";

export default function App() {
  return (
    <div
      style={{
        maxWidth: 320,
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <Counter />
    </div>
  );
}
