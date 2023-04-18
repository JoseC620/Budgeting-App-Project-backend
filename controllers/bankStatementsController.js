const express = require("express");
const bankStatements = express.Router();
const bankStatementsArray = require("../models/bankStatements.js");

bankStatements.get("/", ( req, res ) => {
    res.status(202).json(bankStatementsArray)
});

bankStatements.post('/', (req, res) => {
    const newBankStatement = req.body
    bankStatementsArray.push(newBankStatement)
    res.status(202).json({success: true, payload: bankStatementsArray})
});


bankStatements.get('/:id', (req, res) => {
    const { id } = req.params
    const bankStatement = bankStatementsArray[id]
    if (bankStatement) {
        res.status(202).json(bankStatementsArray[id])
    } else {
        res.redirect(301, '/statements');
    }
});


bankStatements.delete("/:id", (req, res) => {
    const deletedBankStatement = bankStatementsArray.splice(req.params.id, 1);
    res.status(200).json(deletedBankStatement);
});

bankStatements.put("/:id", (req, res) => {
    if (bankStatementsArray[req.params.id]) {
    bankStatementsArray[req.params.id] = req.body;
    res.status(200).json(bankStatementsArray[req.params.id]);
    } else {
    res.status(404).json({ error: "Not Found" });
    }
  });

module.exports = bankStatements;