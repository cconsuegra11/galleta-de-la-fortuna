import React from 'react'
import array from "../utils/phrases.json"
import randomArray from '../services/randomArray'
import imagesArr from "../utils/image.json"

const Button = ({setRandomPhrases, setRandomImage}) => {

    const showButton = () => {
        const newPhrase = randomArray(array)
        setRandomPhrases(newPhrase)

        const newImage = randomArray(imagesArr)
        setRandomImage(newImage)
    }

  return (
    <button onClick={showButton}>Nueva frase</button>
  )
}

export default Button
