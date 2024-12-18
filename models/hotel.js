const mongo = require("mongoose")

const Schema = mongo.Schema

const Hotel = new Schema({
    name : String,
    fabricationDate: Date,
    rooms: { type: Number, default: 10 }
})

module.exports = mongo.model("hotel",Hotel)
