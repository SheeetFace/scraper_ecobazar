import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.CLOUDINARY_PRESET;

export async function uploadImageToCloudinary(imageUrl) {

    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

    if(!/^https?:\/\//i.test(imageUrl)) imageUrl = `https:${imageUrl}`
    
    const formData = new FormData();
    formData.append('file', imageUrl);
    formData.append('upload_preset', UPLOAD_PRESET);

    try{
        const response = await fetch(url,{
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if(data.secure_url){
            console.log(`link updated `)
            return data.secure_url.replace(/\.[^.]+$/, '.webp');
        }else{
            console.error('Error in Cloudinary response:', data);
            return imageUrl;
        }
    }catch(error){
        console.error('Error uploading image:', error);
        return imageUrl;
    }
}