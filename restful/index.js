const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require('uuid');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "That's a cool comment"
  },
  {
    id: uuid(),
    username: "Nikolay",
    comment: "RESTful is cool"
  },
  {
    id: uuid(),
    username: "Simeon",
    comment: "I love using Java"
  },
  {
    id: uuid(),
    username: "Nikolay",
    comment: "I am using JavaScript"
  },
  {
    id: uuid(),
    username: "Velik",
    comment: "I am a data analyst"
  },
  {
    id: uuid(),
    username: "Bot",
    comment: "This is a bot comment"
  }
]

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
})

app.get("/comments/:id", (req, res) => {

  console.log(req.params);
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  // console.log(comment);
  res.render("comments/show", { comment })
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newComment = req.body.comment;
  const foundComment = comments.find(c => c.id === id);
  console.log(foundComment, newComment);
  foundComment.comment = newComment;
  res.redirect("/comments");
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render("comments/edit", { comment })

})

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});




app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");

});
app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;

  res.send(
    `"POST /tacos response" - here are ${qty} ${qty == 1 ? meat : meat + "s"}`
  );
});

app.listen(3000, () => {
  console.log("APP IS WORKING ON PORT 3000");
});

//GET /comments - list all comments
//GET /comments/:id - get one comment using ID

//POST /comments - create a new comment

//PATCH /comments/:id - update one comment
//DELETE /comments/:id - delete one comment
