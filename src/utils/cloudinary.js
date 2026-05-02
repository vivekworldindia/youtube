import { v2 as cloudinary } from "cloudinary";
import fs from "fs"
import dotenv from "dotenv";

dotenv.config(); // 👈 सबसे पहले


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET

});

console.log(process.env.CLOUDINARY_API_KEY)
console.log(process.env.CLOUDINARY_API_SECRET)
console.log(process.env.CLOUDINARY_CLOUD_NAME)


const uploadOnCloudinary = async (localFilePath) => {
    console.log("Uploading file:", localFilePath);
    try {
        if (!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log("file is uploaded on cloudinary", response.url)
        fs.unlinkSync(localFilePath)
        return response

    } catch (err) {
        console.log("❌ Cloudinary Error:", err.message || err); // 👈 ADD THIS
        if (localFilePath && fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath)
        }
        return null
    }

}

export {uploadOnCloudinary}