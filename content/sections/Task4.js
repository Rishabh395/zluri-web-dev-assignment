import React,{useState} from 'react'
import Dropdown from './Dropdown'
import './img.css'


import ocean from "./images/ocean.jpg"
import forest from './images/forest.jpg'
import mountain from "./images/mountain.jpg"
import desert from "./images/desert.jpg"

const Task4= () => {

    const [image, setImage] = useState(forest);

    const img ={"Ocean":ocean, "Forest":forest,"Mountain": mountain,"Desert": desert};


    const onHoverHandler =(data)=>{
        setImage(img[data]);
    }

  return (
    <div className='box1'>
        <div className='box2'>
          <Dropdown className='db' 
          onHover={onHoverHandler} 
          optionsList = {['Mountain', 'Forest', 'Ocean', 'Desert']}
          level='2'
          />
        </div>
        <div className='box3'>
          <img className='img' src={image} alt="pic" />
        </div>
    </div>
  )
}

export default Task4