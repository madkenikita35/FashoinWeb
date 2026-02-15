import express from "express";
import Product from "../models/ProducModel.js";
import mongoose from "mongoose";

const router = express.Router();

router.get("./products", async(req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post("./products", async (req,res) =>{
    const {PrName, PrPrice, prImg} = req.body;
    try {
        if(!PrName || !prImg || !PrPrice){
            return res.status(400).json({message: "All fields are required"});
        }
        const product = new Product({
            PrName,
            PrPrice,
            prImg
        })
        product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export default router;