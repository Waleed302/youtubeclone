import React from 'react'
import "./Video.css"
import PlayVideo from '../../Component/PlayVideo/PlayVideo'
import Recomanded from '../../Component/Recomanded/Recomanded'
const Video = () => {
  return (
    <div className='play-container'>
      <PlayVideo />
      <Recomanded/>
    </div>
  )
}

export default Video