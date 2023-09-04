export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }
  const itemsPacked = items.filter((itemAll) => itemAll.packed === true);

  return (
    <footer className="stats">
      <em>
        {items.length > 0 && itemsPacked.length === items.length ? (
          <span>You have packed everything. Good to go ✈️</span>
        ) : (
          <span>
            💼 You have {items.length} items on your list, and you already
            packed {itemsPacked.length} (
            {((itemsPacked.length / items.length) * 100).toFixed(2)}
            %){" "}
          </span>
        )}
      </em>
    </footer>
  );
}
