import "./App.css";
import { useState } from "react";
import List from "./components/List";

import Section from "./components/Section";
import Heading from "./components/Heading";
import { ImageSizeContext } from "./contexts/ImageSizeContext";

function Input({ label, text, textSetter }) {
  return (
    <label>
      {label} <input value={text} onChange={textSetter} />
    </label>
  );
}

function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  const [syncedText, setSyncedText] = useState("");

  return (
    <>
      <Input
        label="First input"
        textSetter={(e) => setSyncedText(e.target.value)}
        text={syncedText}
      />
      <Input
        label="Second input"
        textSetter={(e) => setSyncedText(e.target.value)}
        text={syncedText}
      />
      {/* useContext exercise below */}
      <ImageSizeContext.Provider value={imageSize}>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={(e) => {
              setIsLarge(e.target.checked);
            }}
          />
          Use large images
        </label>

        <hr />
        <List imageSize={imageSize} />
      </ImageSizeContext.Provider>
      <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </>
  );
}

export default App;
