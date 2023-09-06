export default function ColorList({ colors }) {
  return (
    <div>
      <p>Color List</p>
      <ul>
        {colors.map((color) => {
          return (
            <li key={color} style={{ color }}>
              {color}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
