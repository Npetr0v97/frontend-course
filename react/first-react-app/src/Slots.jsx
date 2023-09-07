export default function Slots({ val1, val2, val3 }) {
  const isWinner = val1 === val2 && val1 === val3;
  console.log(isWinner);
  const styleText = { color: isWinner ? "green" : "red" };
  return (
    <div>
      <h1>
        {val1} {val2} {val3}
      </h1>
      {isWinner ? (
        <h2 style={styleText}>You win!</h2>
      ) : (
        <h2 style={styleText}>You lose!</h2>
      )}
      {isWinner ? <h3>Congrats!</h3> : null}
    </div>
  );
}
