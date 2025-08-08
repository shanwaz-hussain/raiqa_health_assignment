import React from "react";

export default function ListView({ list }) {
  return (
    <div>
      <h3>Number List</h3>
      {list.length === 0 ? (
        <p>No numbers added yet</p>
      ) : (
        <ul style={{ paddingLeft: 20, textAlign: "left" }}>
          {list.map((num, index) => (
            <li key={index} style={{ marginBottom: 4 }}>
              {num}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
