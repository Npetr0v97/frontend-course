const express = require("express");
const path = require("path"); //module from node required for setting the proper path for the views for the templating engine

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs"); //setting the templating engine to ejs. No need to require ejs because with the set method ejs gets required behind the scenes
app.set("views", path.join(__dirname, "/views")); //this sets the property of views meaning that it will search for the template located in __dirname/views which means the location of the js file and a directory called "views"

app.get("/", (req, res) => {
  res.render("home");
  // renders the html (ejs file which is an html file). We only specify the name of the file and it automatically gets the file from the views folder. The views folder is mandatory
});

app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { rand: num }); //renders the random.ejs file with a variable rand = num
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.render("subreddit", { subreddit });
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
