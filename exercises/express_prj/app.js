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

// example with query strings
app.get("/search", (req, res) => {
  console.log(req.query);
  const { q, c } = req.query;
  res.send(`Hi! These are the results for ${q} and for ${c}`);
});

// '/'
app.get("/", (req, res) => {
  console.log("Nothing!!!");
  res.send("This is the home page!!!");
});

// /r/SOMETHING ELSE
app.get("/r/:subreddit", (req, res) => {
  console.log("subreddit!!!");
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

// /r/SOMETHING ELSE/SOMETHING ELSE
app.get("/r/:subreddit/:postId", (req, res) => {
  console.log("subreddit!!!");
  const { subreddit, postId } = req.params;

  res.send(`<h1>Browsing the ${subreddit} subreddit with ID of ${postId}</h1>`);
});

// all the rest
app.get("*", (req, res) => {
  console.log("Misc!!!");
  res.send("Misc");
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
