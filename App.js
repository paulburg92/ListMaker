import React, { useState } from "react";

export default function App() {
  const [item, setItem] = useState([
    {
      name: "",
      id: null,
    },
  ]);
  const [list, setList] = useState([]);
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setItem({ name: capitalize(e.target.value), id: null });
  };

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function addItem() {
    setCount(count + 1);
    let newItem = { name: item.name, id: count };
    let newArr = list.concat(newItem);
    setList(newArr);
  }

  const removeItem = (e) => {
    let delItem = e.target.getAttribute("value");
    const filtered = list.filter((obj) => {
      return obj.id !== delItem - 0;
    });
    setList(filtered);
  };

  return (
    <div className="app-container">
      <div className="input-container">
        <input onChange={handleChange} spellCheck="true" />
        <button onClick={addItem}>ADD</button>
      </div>
      <p>
        {list.map((i, k) => (
          <div className="list-container">
            <li key={k}>
              {i.name} - {i.id}
              <button size="sm" value={i.id} onClick={removeItem}>
                X
              </button>
            </li>
          </div>
        ))}
      </p>
    </div>
  );
}
