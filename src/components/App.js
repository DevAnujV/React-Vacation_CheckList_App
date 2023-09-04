import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(1);

  function changedSelected(x) {
    setSelected(x);
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(item) {
    const itemsNew = items.filter((itemx) => itemx !== item);
    setItems(itemsNew);
  }

  function changeBoolean(item) {
    setItems((items) =>
      items.map((itemx) =>
        itemx.id === item.id ? { ...itemx, packed: !itemx.packed } : itemx
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        deleteIt={handleDeleteItems}
        changeBoolean={changeBoolean}
        selected={selected}
        changedSelected={changedSelected}
        setItems={setItems}
      />
      <Stats items={items} />
    </div>
  );
}
