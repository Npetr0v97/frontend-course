function clickHandler(message) {
  alert(message);
}

export default function Clicker({ message, buttonText }) {
  return (
    <div>
      <button onClick={() => clickHandler(message)}>{buttonText}</button>
    </div>
  );
}
