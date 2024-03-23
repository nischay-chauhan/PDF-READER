import express from "express"
import { upload } from "../middleware/multer.middleware.js";
import { pdfController } from "../controllers/Pdf.controller.js";
const router = express.Router();

router.post("/upload",upload.single("file") ,pdfController )

export default router