export default function ShoppingListItem({ item }) {
  return (
    <>
      <li
        style={{
          color: item.completed ? "grey" : "red",
          textDecoration: item.completed ? "line-through" : "",
        }}
      >
        {item.item} - {item.quantity}
      </li>
    </>
  );
}
