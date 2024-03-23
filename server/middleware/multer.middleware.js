import express from "express"
import multer from "multer"

const storage = multer.diskStorage({
    destination : function(req , file , cb) {
        cb(null , 'public/uploads/');
    },
    filename : function(req , file , cb) {
        cb(null ,Date.now()+ '-' + file.originalname);
    }
});

export const upload = multer({
    storage : storage,
    limits : {
        fileSize : 5*1024*1024 //basically 5mb limit
    }
});