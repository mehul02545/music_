const express = require ("express"); // importing installed packages "express"
const app = express();               // creating express app

// adding package cors to avoid the cross-origin error

const cors = require("cors");

// to make sure URL is working properly we use get method
app.get("/", (req, res) => {          // "/" - home route that takes the request and response
    return res.json("Hi there..")     // taking the response Hi there..
})
// app to listen to a specifi code so that we know that our port is running perfectly
app.listen(4000, () => console.log("Listening to port 4000"));


