import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
    PrName: {
        type: String,
        required: true,
    },
    PrPrice: {
        type: Number,
        required: true, 
    },
    PrImg:{
        type: String,
        required: true,
    }
},
{
    timestamps: true,
})

export default mongoose.model("Products", ProductSchema)