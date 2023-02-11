import React, { useRef, useState } from 'react'
import './list.scss'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ListItem from "../listitem/ListItem";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function List() {
    const[slideNumber, setSlideNumber] = useState(0)
    const listRef = useRef();
    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x-50
       // moving to left 
        if(direction === 'left' && slideNumber>0){
            setSlideNumber(slideNumber-1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
          // moving to right
        }
        if(direction === 'right' && slideNumber<5){
            setSlideNumber(slideNumber+1);

            listRef.current.style.transform = `translateX(${-230 + distance}px)`
          
        }
    }

  return (
    <div className='list'>
       <span className='listTitle'>Continue to watch</span>
       <div className='wrapper'>
        <ArrowBackOutlinedIcon className='sliderArrow left' onClick={()=>handleClick("left")}/>
        <div className='container' ref={listRef}>
           <ListItem index={0}/>
           <ListItem index={1}/>
           <ListItem index={2}/>
           <ListItem index={3}/>
           <ListItem index={4}/>
           <ListItem index={5}/>
           <ListItem index={6}/>
           <ListItem index={7}/>
           <ListItem index={8}/>
           <ListItem index={9}/>
           
           

        </div>
        <ArrowForwardOutlinedIcon className='sliderArrow right' onClick={()=>handleClick("right")}/>
       </div>
    </div>
  )
}
