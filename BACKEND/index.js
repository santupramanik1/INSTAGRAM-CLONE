import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import { connDB } from "./utils/dbConn.js"
dotenv.config({})

const app = express()
// use middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
const corsOption = {
    origin: "http://localhost:5173/",
    credentials: true
}
app.use(cors(corsOption))

// Route define
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "I am coming from backend",
        sucess: true
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is Listening at PORT :${PORT}`)
    connDB()
})