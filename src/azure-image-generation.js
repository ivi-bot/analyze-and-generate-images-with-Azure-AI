// azure-image-generation.js
import axios from 'axios';

const generateImage = async (apiKey, prompt) => {
  const endpoint = 'https://api.openai.com/v1/images/generations';
  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };
  const data = {
    prompt: prompt,
    size:"1024x1024", // Cambia el modelo según tus necesidades
    n: 1, // Cantidad de imágenes a generar
  };

  try {
    const response = await axios.post(endpoint, data,{ headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default generateImage;
