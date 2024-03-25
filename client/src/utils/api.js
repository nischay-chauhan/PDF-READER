import axios from "axios";

export const uploadFile = async (file) => {
    const formData = new FormData();
    

    // const backendUrl = import.meta.env.VITE_BACKEND_URL; 

    // let uploadUrl = backendUrl;
    let uploadUrl;
    if (file.type.includes('image')) {
        uploadUrl = 'http://localhost:5000/api/image/upload'
        formData.append('image', file); 
        console.log(uploadUrl);
    } else if (file.type.includes('pdf')) {
        uploadUrl = 'http://localhost:5000/api/pdf/upload'; 
        formData.append('file', file);
        console.log(uploadUrl);
    }

    try {
        const response = await axios.post(uploadUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error("Error uploading File : " + error.message);
    }
}
