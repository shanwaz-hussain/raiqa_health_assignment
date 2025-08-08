import './App.css';
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
    <div className="app-container" >
      <Counter addNumber={addNumber} />
      <div className="section">
        <ListView list={sortedList} />
        <div className="btn-bar">
          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="app-btn sort-btn"
          >
            Sort {sortAsc ? "Descending" : "Ascending"}
          </button>

          <button
            onClick={resetAll}
            className="app-btn gray"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
