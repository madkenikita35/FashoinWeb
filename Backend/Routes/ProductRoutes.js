import express from "express";
import Product from "../models/ProducModel.js";
import mongoose from "mongoose";

const router = express.Router();

router.get("/products", async(req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post("/products", async (req,res) =>{
    const {PrName, PrPrice, PrImg} = req.body;
    try {
        if(!PrName || !PrImg || !PrPrice){
            return res.status(400).json({message: "All fields are required"});
        }
        const product = await Product.create({
            PrName,
            PrPrice,
            PrImg
        })
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
router.delete("/products/:id", async (req,res) =>{
    const {id} = req.params;    
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({message: "Product deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
export default router;