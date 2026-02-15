import express from 'express';
import mongoose from 'mongoose';
import Product from './models/ProducModel.js';
import productRoutes from './Routes/ProductRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb+srv://Nikita:Nikita@fashionweb.uynbc7u.mongodb.net/?appName=FashionWeb";

async function connectToDatabase() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}`);
})
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();

app.use(express.json());
app.use("/", productRoutes);

app.get("/", (req,res) =>{
    console.log("Hello World");
    res.send("Hello World");
})

