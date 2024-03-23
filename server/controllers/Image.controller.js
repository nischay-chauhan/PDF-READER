import { extractText } from "../services/Image.Service.js";
import fs from "fs";
export const imageController = async(req, res) => {
    try{
        // console.log(req.file);
        const filePath = req.file.path;
        if(!filePath){
            return res.json({
                success : false,
                message : "Please upload an image"
            })
        }

        const text = await extractText(filePath);
        if(!text){
            return res.json({
                success : false,
                message : "Error extracting text from image try again later"
            })
        }
        fs.unlinkSync(filePath);
        res.json({
            success : true,
            message : "Text Extracted Successfully",
            data : text
        })
    }catch(error){
        console.log("Error in image Controler" , error);
        res.json({
            success : false,
            message : "Something went wrong with the imageController "
        })
    }
}