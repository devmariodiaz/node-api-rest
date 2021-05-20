const { Schema, model } = require("mongoose");

const stateSchema = new Schema({
    name: String
});

module.exports = model("State", stateSchema);