import React ,{ useState }from 'react';
import analyzeImage from './azure-image-analysis'; // Importa el módulo
import generateImage from './azure-image-generation'; // Importa el módulo

function App() {

  /*Analyze */
  const [imageUrl, setImageUrl] = useState('https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png');
  const [result, setResult] = useState(null);
//https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png
//https://learn.microsoft.com/azure/ai-services/computer-vision/media/quickstarts/presentation.png




//https://learn.microsoft.com/es-mx/azure/ai-services/computer-vision/how-to/call-analyze-image-40?tabs=rest&WT.mc_id=academic-105496-cacaste&pivots=programming-language-rest-api

const handleAnalyze = async () => {
    try {
      const apiKey = '244344f430c24eb0916a32dfd74f4290'; // Reemplaza con tu clave de API de Azure
      const analysisResult = await analyzeImage(apiKey, imageUrl);
      setResult(analysisResult);
    } catch (error) {
      console.error('Error al analizar la imagen:', error);
    }
  };

  const DisplayResults = () => {
    if (!result) return null;

    return (
      <div>
        <h2>Resultados del análisis de imagen:</h2>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    );
  };





/*Generate */
const [prompt, setPrompt] = useState('');
const [generatedImageUrl, setGeneratedImageUrl] = useState('');
const [isLoading, setIsLoading] = useState(false);


const handleGenerateImage = async () => {
  setIsLoading(true);
  try {
    const apiKey = 'sk-'; // Reemplaza con tu clave de API de OpenAI
    const response = await generateImage(apiKey, prompt);
    setGeneratedImageUrl(response.images[0].url); // Asumiendo que la API devuelve un arreglo de imágenes
  } catch (error) {
    console.error('Error al generar la imagen:', error);
  } finally {
    setIsLoading(false);
  }
};



  return (
    <div className="App">
      <h1>Computer Vision</h1>
      <h3>Insert URL or type promt:</h3>
      <input
        type="text"
        placeholder="Enter URL to analyze or textual prompt to generate an image"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <img alt="hola" src={imageUrl} width="200" height="150"></img>

      <button onClick={handleAnalyze}>Analyze</button>
      <DisplayResults />

      <div>
        <h1>OpenAI Image Generation</h1>
        <h3>Enter a prompt:</h3>
        <input
          type="text"
          placeholder="Enter a prompt to generate an image"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={handleGenerateImage}>Generate</button>
        {isLoading ? <p>Loading...</p> : null}
        {generatedImageUrl && (
          <div>
            <h2>Generated Image:</h2>
            <img src={generatedImageUrl} alt="Generated" />
          </div>
        )}
      </div>
    </div>




  );
}

/*
//Create a simple GUI, with one tittle, a formbox and a button
function App() {
  return <div>
      <h1>Computer vision</h1>
      <h3>Insert URL or type promt:</h3>
      <input type="text" placeholder="Enter URL to analyze or textual prompt to generate an image"/>
      <br></br>
      <button>Analyze</button>
      <button>Generate</button>

    </div>
  ;
}*/



export default App;