const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
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
