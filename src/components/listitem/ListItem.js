import React, { useState } from 'react'
import './Listitem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
function ListItem({index}) {
  //use state for hovering the image inside list ...
  const[isHovered,setIsHovered] = useState(false);
  // when hovering on image we should see a video
  const trailer =
  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";



  return (
    <div className='listItem' 
    style={{left: isHovered && index * 225 - 50 + index * 5}}
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() =>setIsHovered(false)}>
       <img alt='1' src='https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee' />
       {/* setting video while hovering on image */}
       {isHovered && (
       <>
       
       <video src={trailer} autoPlay={true} loop />
        <div className='itemInfo'>

          <div className='icons'>
            <PlayArrowIcon className='icon'/> 
            <AddIcon className='icon'/>
            <ThumbUpIcon className='icon'/>
            <ThumbDownIcon className='icon'/>
            

          </div>
          <div className='itemInfoTop'>
            <span>170mins</span>
            <span className='limit'>+15</span>
            <span>2022</span>
          </div>
          <div className='desc'>
          lorem top gun maverick tom cruise misson impossible edge of tom 
          </div>
          <div className='genre'>Action</div>
        </div>
        </>
        )}
    </div>
  );
};

export default ListItem
