const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST");
//   res.send("Hello, We got your request");
// });

// /cats => "meow"

app.get("/cats", (req, res) => {
  console.log("Cat Request!!!");
  res.send("Meow!!!");
});

app.post("/cats", (req, res) => {
  console.log("Cat Request!!!");
  res.send("Post request to cats!!!");
});

// / dogs => "woof"

app.get("/dogs", (req, res) => {
  console.log("Dog Request!!!");
  res.send("Woof!!!");
});

// '/'
app.get("/", (req, res) => {
  console.log("Nothing!!!");
  res.send("This is the home page!!!");
});

// all the rest
app.get("*", (req, res) => {
  console.log("Misc!!!");
  res.send("Misc");
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
