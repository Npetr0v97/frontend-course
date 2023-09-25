import "./App.css";

export default function Concepts({ data }) {
  return (
    <div className="concept">
      {data.map((el) => (
        <div>
          <img src={el.image} alt={el.title} />
          <h2>{el.title}</h2>
          <p>{el.description}</p>
        </div>
      ))}
    </div>
  );
}
