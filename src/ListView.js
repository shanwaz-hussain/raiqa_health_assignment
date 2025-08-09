import React from "react";

export default function ListView({ list }) {
  if (list.length === 0) {
    return (
      <div className="section list-section">
        <h3 className="list-header">Number List</h3>
        <p className="empty-msg">No numbers added yet</p>
      </div>
    );
  }

  const maxNum = Math.max(...list);
  const minNum = Math.min(...list);

  return (
    <div className="section list-section">
      <h3 className="list-header">Number List</h3>
      <ul className="number-list">
        {list.map((num, idx) => {
          let className = "";
          if (num === maxNum) className = "highlight-max";
          if (num === minNum) className = "highlight-min";
        
          if (list.length === 1) className = ""; 
          return (
            <li key={idx} className={className}>
              {num}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
