import express from "express"
import { imageController } from "../controllers/Image.controller.js"
import { upload } from "../middleware/multer.middleware.js"

const router = express.Router()

router.post("/upload", upload.single("image") ,imageController)

export default router