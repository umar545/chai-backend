const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
// app.options("*", core());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const user = {
  userId: 1,
  username: "john_doe",
  email: "john.doe@example.com",
  dateJoined: "2024-06-13",
};

console.log(user);

app.get("/login", (req, res) => {
  res.json(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
