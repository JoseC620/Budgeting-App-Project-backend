const express = require("express");
const app = express();
const cors = require("cors");
const bankStatementsController = require("./controllers/bankStatementsController.js")


app.use(cors());
app.use(express.json())
app.use("/statements", bankStatementsController)

app.get(("/"), ( req, res ) => {
    res.send("welcome to the bank statements")
});

app.get("*", ( req, res ) => {
    res.status(404).json( { error: "Page not found" } )
});

module.exports = app;