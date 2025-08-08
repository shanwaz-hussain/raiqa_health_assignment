import React, { useState } from "react";
import Counter from "./Counter";
import ListView from "./ListView";

export default function App() {

  const [list, setList] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);

const addNumber = (num) => {
    if (num > 0) {
      if (list.includes(num)) {
        alert(`Number ${num} is already in the list!`);
      } else {
      setList((prevList) => [...prevList, num]);
    }
  }
  };

const resetAll = () => {
    setList([]);
    if (counterResetRef.current) {
      counterResetRef.current();
    }
  };

  const counterResetRef = React.useRef(null);

  const sendResetFunction = (resetFunc) => {
    counterResetRef.current = resetFunc;
  };




const sortedList = [...list].sort((a, b) => (sortAsc ? a - b : b - a));

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
      <ListView list={sortedList} />
      <button
        onClick={() => setSortAsc(!sortAsc)}
        style={{
          marginTop: 15,
          padding: "8px 16px",
          cursor: "pointer",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: 4,
        }}
      >
        Sort {sortAsc ? "Descending" : "Ascending"}
      </button>

 <button
        onClick={resetAll}
        style={{
          marginTop: 15,
          padding: "8px 16px",
          cursor: "pointer",
          backgroundColor: "gray",
          color: "white",
          border: "none",
          borderRadius: 4,
        }}
      >
        Reset
      </button>

    </div>
  );
}
