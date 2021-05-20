const express = require("express");
const router = express.Router();
const State = require("./states/models/states.model");
const { generateAccessToken, authenticationToken } = require('./jwtModule');
require('dotenv').config();

router.get("/states", authenticationToken, async(req, res) =>{
    const  states = await State.find();
    res.send(states);
});

router.post("/login", async(req, res) =>{
   const username = req.body.username;
   const user = { name: username }; 

   const accessToken = generateAccessToken(user);
    res.json({ accessToken: accessToken });
});

module.exports = router;