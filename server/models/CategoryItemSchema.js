const mongoose = require("mongoose");

const CategoryItemSchema = new mongoose.Schema(
    {
        categories: [

            {
                name: { type: String},
                items: [
                    {
                        name: {type :String , required: true}, 
                        description: {type: String},
                        price:{type: Number},
                        image: {type: String}
                    }
                ]
            }
            
        ]
    }
)