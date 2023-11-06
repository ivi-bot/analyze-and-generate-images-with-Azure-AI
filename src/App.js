import React ,{ useState }from 'react';
import analyzeImage from './azure-image-analysis'; // Importa el módulo
function App() {
  const [imageUrl, setImageUrl] = useState('https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png');
  const [result, setResult] = useState(null);
//https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png
//https://learn.microsoft.com/azure/ai-services/computer-vision/media/quickstarts/presentation.png
  const handleAnalyze = async () => {
    try {
      const apiKey = ''; // Reemplaza con tu clave de API de Azure
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