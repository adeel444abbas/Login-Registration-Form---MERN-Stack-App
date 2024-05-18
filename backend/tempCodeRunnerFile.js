const express = require("express");
// console.log(typeof express);
// console.log(express);
const mongoose = require("mongoose");
const cors = require("cors");

//Importing modal
const userModal = require("./modals/usersmodal");

const app = express();
// console.log(app);
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/testDatabase");

app.post("/users", (request, response) =>{
    userModal.create(request.body)
    .then((allUsers) => response.json(allUsers))
    .catch((error) => console.log(error))

})
app.listen(3001, ()=>{
    console.log("App is running");
})