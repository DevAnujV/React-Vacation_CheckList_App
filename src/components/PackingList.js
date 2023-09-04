import Item from "./Item";

export default function PackingList({
  items,
  deleteIt,
  changeBoolean,
  selected,
  changedSelected,
  setItems,
}) {
  var temp = items;
  if (selected === 2) {
    temp = items.slice().sort((a, b) => a.input.localeCompare(b.input));
  } else if (selected === 3) {
    temp = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed));
  }

  function clearFunc() {
    alert("Are you sure you want to clear everything?");
    setItems([]);
  }

  return (
    <div className="list">
      <ul>
        {temp.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteIt={deleteIt}
            changeBoolean={changeBoolean}
            selected={selected}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={selected}
          onChange={(e) => changedSelected(Number(e.target.value))}
        >
          <option value={1}>SORT BY INPUT ORDER</option>
          <option value={2}>SORT BY DESCTIPTION</option>
          <option value={3}>SORT BY PACKED STATUS</option>
        </select>
        <button onClick={() => clearFunc()}>Clear List</button>
      </div>
    </div>
  );
}
