import "./App.css";
import "./Chicken";
import "./Greeter";
import "./Die";

import DoubleDice from "./DoubleDice";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";

function App() {
  return (
    <div>
      <Slots val1="🍌" val2="🍌" val3="🍒" />
      <Slots val1="🍒" val2="🍒" val3="🍒" />
      {/* <ColorList colors={["red", "pink", "purple", "teal"]} />
      <Heading color="blue" text="Howdy" fontSize="20px" />
      <Heading color="teal" text="Blah" fontSize="30px" />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}

      {/* <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} />
      <Greeter from="Nobody" />
      <Greeter person="Nikolay" />
      <Die numSides={20} />
      <Die />
      <Die numSides={2} /> */}
    </div>
  );
}

export default App;
