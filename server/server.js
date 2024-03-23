import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import imageRoute from "./routes/Image.route.js"
import pdfRoutes from "./routes/pdf.route.js"
const app = express()
dotenv.config()
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001

app.use("/api/image", imageRoute)
app.use("/api/pdf" , pdfRoutes) 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})

