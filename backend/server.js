import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'
import connectDb from "./db/connectToDb.js";
import cors from 'cors'
dotenv.config();

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173", // React frontend URL
    credentials: true,               // allow cookies/authorization headers
}))

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.listen(PORT, () => {
    connectDb()
    console.log(`Server running on port ${PORT}`);

})