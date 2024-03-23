import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import imageRoute from "./routes/Image.route.js"
const app = express()
dotenv.config()
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001

app.use("/api/image", imageRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})

