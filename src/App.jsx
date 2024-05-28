import { useState } from "react"
import "./App.css"
import Button from "./components/Button"
import ShowPhrases from "./components/ShowPhrases"
import randomArray from "./services/randomArray"
import array from "./utils/phrases.json" // Arreglo de frases
import imagesArr from "./utils/image.json"

function App() {

  const phraseRandom = randomArray(array)
  const [randomPhrases, setRandomPhrases] = useState(phraseRandom)

  const wallpaperRandom = randomArray(imagesArr)
  const [image, setRandomImage] = useState(wallpaperRandom)

  const wallpapers = {
    backgroundImage: `url(../public/fondo${image}.png)`
  }

  return (
    <div className="wallpaper" style={wallpapers}> 
      <h1 className="title"><spa>GALLETA</spa> <span>DE LA FORTUNA</span></h1>
      <Button
      setRandomPhrases={setRandomPhrases}
      setRandomImage={setRandomImage} 
       />
      <ShowPhrases
       randomPhrases={randomPhrases}      
      />
    </div>
  )
}

export default App
