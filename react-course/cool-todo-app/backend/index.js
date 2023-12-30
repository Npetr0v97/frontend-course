const mongoose = require("mongoose");
main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/todo-app");
  } catch (e) {
    console.log(e);
  }
}

// For backend and express
const express = require("express");
const app = express();
app.use(express.json());

app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todos.find();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
  // resp.send("App is Working");
  // // You can check backend is working or not by
  // // entering http://loacalhost:3000
  // // If you see App is working means
  // // backend working properly
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
