const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan")
const bankStatementsController = require("./controllers/bankStatementsController.js")

app.use(express.json())
app.use(cors());

app.use(logger('dev'))
app.use("/statements", bankStatementsController)

app.get(("/"), ( req, res ) => {
    res.send("welcome to the bank statements")
});

app.get("*", ( req, res ) => {
    res.status(404).json( { error: "Page not found" } )
});

module.exports = app;