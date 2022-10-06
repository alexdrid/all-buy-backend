import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/connect";
import logger from "./utils/logger";
import productRoutes from "./routes/productRoutes"

dotenv.config()

const app = express()

// connectDB();

const localhost = process.env.HOST
const port = process.env.PORT || 5000

// app.use('/api/products', productRoutes)

app.get("/", ((req, res) =>{
    logger.info(`Request @ ${req.baseUrl}${req.url}`)
    res.send('Hello darkness my old friend')
}))


app.listen(port, () => {
    logger.info(`Server listening at ${port}`)
})