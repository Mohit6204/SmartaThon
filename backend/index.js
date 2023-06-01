import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()
const app = express()
app.use(cors({
  origin: "*" // on deployment, change this to the domain you want
}))
// allow express to parse body
app.use(express.json())
const PORT = process.env.PORT || 8080

mongoose.connect(process.env.MONGO_URI)

mongoose.connection.once("open", () => {
    console.log("Connected to database")
})

app.get("/", (req, res) => {
    res.send("Hello Mohit!")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})