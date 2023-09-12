function handleFormSubmit(e) {
  e.preventDefault();
  console.log("Submitted");
}

export default function Form() {
  return (
    <form action="" onSubmit={handleFormSubmit}>
      <button>Submit</button>
    </form>
  );
}
