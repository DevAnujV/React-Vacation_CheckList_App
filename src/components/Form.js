import { useState } from "react";

export default function Form({ onAddItems }) {
  const [input, setInput] = useState();
  const [select, setSelect] = useState(5);
  // items is needed in the PackingList component where it is to be rendered. So, it needs to be
  // lifted up the state. We can do so by moving the state code to the nearest common element of both. Which is App, parent to both Form and
  // PackingList

  //this is done this way and not with push because, items (state) is immutable. We cannot
  // change it directly. So, this way [...items, item] we are making a new array and pasing it to items. thus not mutating.

  function formSubmit(e) {
    e.preventDefault();

    if (!input) return;

    const newItem = { input, select, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setInput("");
    setSelect(1);
  }

  return (
    <form className="add-form" onSubmit={(e) => formSubmit(e)}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={select}
        onChange={(e) => setSelect(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button>ADD</button>
    </form>
  );
}
