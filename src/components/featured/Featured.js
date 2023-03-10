import React from 'react'
import "./featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Featured({type}) {
  return (
    <div className='featured'>
    {type && (
        <div className='category'>
            <span>{type === "movie" ? 'Movies' : 'Series'}</span>
            <select name='genre' id='genre'>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comdey</option>
                <option value="crime">Crime</option>
                <option value="history">History</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="Thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drame">Drama</option>
                <option value="documentary">Documentary</option>

            </select>
        </div>
    )}
   <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      
      <div className='info'>
        
        <img src='https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1'/>
        
         <span className='desc'>lorem ipsum shhs jshd awewew hwewei ,mdjdj ldjhdjkas iododqjdjqj mklqjqdiqwiqwdiodqwqdjj owdjiqwhdqdhqidhdhqidhhqiqddqioqodjdjidjdjoidijdoiajdjdaoiodjaidjjadkajddakjdja</span>
          <div className='buttons'>
            <button className='play'>
                <PlayArrowIcon/>
                <span>Play</span>
            </button>
            <button className='more'> 
            <InfoOutlinedIcon/>
            <span>Info</span>
            </button>
          </div>
      </div>
    </div>
  )
}
