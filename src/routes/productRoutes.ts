import express from "express";
import logger from "../utils/logger";

const router = express.Router()

router.get("/", ((req, res) =>{
    logger.info(`Request @ ${req.baseUrl}${req.url}`)
    res.send('Hello darkness my old friend')
}))

export default router