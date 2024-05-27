//====== Hacer un índice aleatoreo para las frases y las imágenes ======= 

import showPhrases from "../components/ShowPhrases"

const randomArray = (array) => {
    const indexRandom = Math.floor(Math.random() * array.length)

    return array[indexRandom]
}

export default randomArray;