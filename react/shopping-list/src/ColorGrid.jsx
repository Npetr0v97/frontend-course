import ColorBox from "./ColorBox";
import "./ColorGrid.css";

export default function ColorGrid() {
  const colorArr = [
    "#1E1E1E",
    "#E5BE01",
    "#6D3F5B",
    "#646B63",
    "#E5BE01",
    "#781F19",
    "#6C4675",
    "#D0D0D0",
    "#BEBD7F",
    "#308446",
    "#4D5645",
    "#E1CC4F",
    "#CC0605",
    "#D0D0D0",
    "#CC0605",
    "#00BB2D",
    "#D0D0D0",
    "#705335",
    "#CFD3CD",
    "#A03472",
    "#4C9141",
    "#C51D34",
    "#5D9B9B",
    "#FF7514",
    "#3E3B32",
  ];

  return (
    <div className="color-grid">
      {colorArr.map((col, i) => (
        <ColorBox key={i} color={col} />
      ))}
    </div>
  );
}
