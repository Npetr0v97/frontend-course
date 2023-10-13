import { useRef } from "react";

const TestInput = function (props) {
  const nameInputRef = useRef();

  const onClickHandler = function () {
    console.log(nameInputRef.current.value);
    nameInputRef.current.value = "";
  };

  return (
    <>
      <input type="text" ref={nameInputRef} />
      <button onClick={onClickHandler}>Test</button>
    </>
  );
};

export default TestInput;
