const mongoose = require("mongoose");

const ItemSchema = require("./ItemSchema")

const CategorySchema = new mongoose.Schema(
    {
        name: { type: String},
        items: [{type: mongoose.ObjectId, ref: ItemSchema}]
    }
)

module.exports = mongoose.model('Category', CategorySchema)