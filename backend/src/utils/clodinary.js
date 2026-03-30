import dotenv from "dotenv"
dotenv.config({ path: "../.env" })
import { v2 as cloudinary } from 'cloudinary';
import fs from "fs" // it is file system

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEYS,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// Upload an image
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // Upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        // file has been uploaded successfully
        fs.unlinkSync(localFilePath);
        // console.log("response", response);
        return response;
    } catch (error) {
        // fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation failed
        return null;
    }
};

export { uploadOnCloudinary }

//THIS WAS THE DATA COMMING FROM CLOUDINARY
// response {
//   asset_id: '443689064433cd56c0ca667f85d05e61',
//   public_id: 'ichdpycezu6evlyzdqny',
//   version: 1772615162,
//   version_id: 'eba7d4a630362144f93738862c398aa2',
//   signature: '3de1a5dd5dbfb3df9a029da3473c2496448202fa',
//   width: 300,
//   height: 300,
//   format: 'jpg',
//   resource_type: 'image',
//   created_at: '2026-03-04T09:06:02Z',
//   tags: [],
//   bytes: 22791,
//   type: 'upload',
//   etag: '374ce4d591cbe545ff7d5bfaf2dfe830',
//   placeholder: false,
//   url: 'http://res.cloudinary.com/drmsztqxh/image/upload/v1772615162/ichdpycezu6evlyzdqny.jpg',
//   secure_url: 'https://res.cloudinary.com/drmsztqxh/image/upload/v1772615162/ichdpycezu6evlyzdqny.jpg',
//   asset_folder: '',
//   display_name: 'ichdpycezu6evlyzdqny',
//   original_filename: 'joseph-joestar',
//   api_key: '738639434368192'
// }
// response {
//   asset_id: 'ddade563677274a8d1efcaa4f0989655',
//   public_id: 'lbjvbl73wbutq67aovcx',
//   version: 1772615163,
//   version_id: '118bbc8723cdaf4c94fc2c25a637ea99',
//   signature: '8f79a7bd8d992b0485210dfb258e87bf171498a8',
//   width: 736,
//   height: 414,
//   format: 'jpg',
//   resource_type: 'image',
//   created_at: '2026-03-04T09:06:03Z',
//   tags: [],
//   bytes: 56707,
//   type: 'upload',
//   etag: 'bb343139775e19116af40305e512e035',
//   placeholder: false,
//   url: 'http://res.cloudinary.com/drmsztqxh/image/upload/v1772615163/lbjvbl73wbutq67aovcx.jpg',
//   secure_url: 'https://res.cloudinary.com/drmsztqxh/image/upload/v1772615163/lbjvbl73wbutq67aovcx.jpg',
//   asset_folder: '',
//   display_name: 'lbjvbl73wbutq67aovcx',
//   original_filename: 'LUFFY',
//   api_key: '738639434368192'
// }