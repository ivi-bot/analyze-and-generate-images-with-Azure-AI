import axios from 'axios';

const analyzeImage = async (apiKey, imageUrl) => {
  const endpoint = 'https://analizeviviana.cognitiveservices.azure.com/';
  const url = `${endpoint}computervision//imageanalysis:analyze?api-version=2023-02-01-preview&features=tags,read,caption,denseCaptions,smartCrops,objects,people`;

  //const url = `${endpoint}computervision/imageanalysis:analyze?features=caption,read&model-version=latest&language=en&api-version=2023-02-01-preview`;

  try {
    const response = await axios.post(url, {
      url: imageUrl,
    }, {
      headers: {
        'Ocp-Apim-Subscription-Key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default analyzeImage;
