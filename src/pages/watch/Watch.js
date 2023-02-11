import React from 'react'
import './watch.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Watch() {
  return (
    <div className='watch'>
         <div className="back">
           <ArrowBackIosIcon/>
           Home
         </div>
         <video   className='video' autoPlay={true} progress controls src='https://www.youtube.com/results?search_query=52+bars' />
    </div>
  )
}

export default Watch
