import { PdfReader } from "pdfreader";
import fs from "fs"
export const extractPdfText = async (filePath) => {
    return new Promise((resolve, reject) => {
        const textLines = []; 
        new PdfReader().parseFileItems(filePath, (err, item) => {
            if (err) {
                console.error("Error parsing PDF:", err);
                reject(err);
            } else if (!item) {
                resolve(textLines);
            } else if (item.text) {
                const lines = item.text.split("\n"); 
                lines.forEach(line => {
                    if (line.trim() !== "") { 
                        textLines.push(line.trim());
                        console.log(item.text)
                    }
                });
            }
        });

        fs.unlinkSync(filePath);
    });
};
