import React, { useState } from 'react';
import axios from 'axios';

const PredictionForm = () => {
  const [result, setResult] = useState("");

  const resizeAndConvertToBytes = async (image, targetWidth, targetHeight) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      const img = new Image();
      img.src = URL.createObjectURL(image);

      img.onload = () => {
        // Resize the image
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

        // Convert the resized image to bytes
        canvas.toBlob((blob) => {
          if (!blob) {
            console.error('Failed to create blob.');
            return;
          }
          const reader = new FileReader();
          reader.onloadend = () => {
            const bytes = new Uint8Array(reader.result);
            resolve(bytes);
          };
          reader.readAsArrayBuffer(blob);
        }, 'image/jpeg'); // You can change 'image/jpeg' to the desired format
      };
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      // No file selected, do nothing
      return;
    }

    try {
      const resizedBytes = await resizeAndConvertToBytes(file, 64, 64);

      const formData = new FormData();
      formData.append('image_data', new Blob([resizedBytes]));

      const response = await axios.post(
        'https://6936-34-23-233-177.ngrok-free.app/brain_tumor_detection',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Prediction Result:', response.data);
      setResult(response.data.result);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <div className="card max-w-2xl mx-auto p-8">
      <div className="text-center">
        <h1 className="text-blue-500 text-2xl font-bold mb-4">Prediction Form:</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image:
              <input
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleImageChange}>
            Submit
          </button>
        </form>
      </div>
      <h2 className='tag mt-4'>Result: {result}</h2>
    </div>
  );
};

export default PredictionForm;