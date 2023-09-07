import PropertyListItem from "./PropertyListItem";
import "./PropertyList.css";

export default function PropertyList({ properties }) {
  return (
    <div className="PropertyList">
      {properties.map((p) => (
        <PropertyListItem key={p.id} {...p} />
      ))}
    </div>
  );
}
