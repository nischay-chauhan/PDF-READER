import { extractPdfText } from "../services/Pdf.Service.js";
export const pdfController = async (req, res) => {
    const filePath = req.file.path;
    if (!filePath) {
        return res.json({
            success: false,
            message: "Please upload a PDF file"
        });
    }

    try {
        const text = await extractPdfText(filePath);
        if (!text) {

            return res.json({
                success: false,
                message: "No text generated from the PDF"
            });
        }
        return res.json({
            success: true,
            message: "Text extracted successfully",
            data: text 
        });
    } catch (error) {
        console.error("Error in PDF controller:", error);
        return res.json({
            success: false,
            message: "An error occurred while processing the PDF file"
        });
    }
};

