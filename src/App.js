import React, { useState } from "react";
import Counter from "./Counter";
import ListView from "./ListView";

export default function App() {

  const [list, setList] = useState([]);

const addNumber = (num) => {
    if (num > 0 && !list.includes(num)) {
      setList((prevList) => [...prevList, num]);
    }
  };

  return (
    <div
      style={{
        maxWidth: 320,
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
     <Counter addNumber={addNumber} />
      <ListView list={list} />
    </div>
  );
}
