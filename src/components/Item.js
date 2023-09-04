export default function Item({ item, deleteIt, changeBoolean }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => changeBoolean(item)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.select} {item.input}
      </span>
      <button onClick={(e) => deleteIt(item)}>❌</button>
    </li>
  );
}
