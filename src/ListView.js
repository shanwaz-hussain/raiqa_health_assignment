import React from "react";

export default function ListView({ list }) {
  return (
    <div>
      <h3>Number List</h3>
      {list.length === 0 ? (
        <p className="empty-msg">No numbers added yet</p>
      ) : (
        <ul className="number-list">
          {list.map((num, index) => (
            <li key={index}>
              {num}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
