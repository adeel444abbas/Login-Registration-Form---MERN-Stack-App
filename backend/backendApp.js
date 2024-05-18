const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // we use cors to connect frontend backend

//Importing modal
const userModal = require("./modals/usersmodal");

const app = express();
// console.log(app);
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/testDatabase");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  userModal.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Password is incorrect");
      }
    } else {
      res.json("user not found");
    }
  });
});
app.post("/users", (request, response) => {
  userModal
    .create(request.body)
    .then((allUsers) => response.json(allUsers))
    .catch((error) => console.log(error));
});

app.listen(3001, () => {
  console.log("App is running");
});
