export default function ShoppingListItem({ item }) {
  const textStyle = {
    color: item.completed ? "grey" : "red",
    textDecoration: item.completed ? "line-through" : "",
  };
  return (
    <>
      <li style={textStyle}>
        {item.item} - {item.quantity}
      </li>
    </>
  );
}
