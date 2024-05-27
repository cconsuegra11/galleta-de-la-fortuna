import React from 'react'

const ShowPhrases = ({randomPhrases}) => {

    const { phrase, author } = randomPhrases

  return (
    <div className='text'>
      <p className='text_phrase'>{phrase}</p>
      <span className='text_author'>{author}</span>
    </div>
  )
}

export default ShowPhrases