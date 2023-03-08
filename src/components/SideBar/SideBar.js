import React,{useContext, useEffect, useState} from 'react'
import ColorsContext from '../../context/ColorsContext'
import "./SideBar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function SideBar() {

   const { 
      colors,
      darkMode, 
      style,
      stylesList,
      direction,
      directionsList,
      setColors, 
      setDarkMode,
      setStyle,
      setDirection,
      setColorGradient,
   } = useContext(ColorsContext)


   const [currentDirection, setCurrentDirecction] = useState("topLeft")

   //useffect that randomizes and select the settings for the first render
   useEffect(()=>{
      getRandomHEXColors()
      changeDirection(directionsList[style].topLeft,"topLeft")
   },[])

   //useeffect that controls changes occured in colors and direction for the display to render
useEffect(()=>{
   if(direction === ""){
      setColorGradient(stylesList[style].description+"("+colors.color1+","+colors.color2+")")
   }else {
      setColorGradient(stylesList[style].description+"("+directionsList[style][currentDirection]+","+colors.color1+","+colors.color2+")")
   }
},[colors, direction])

   //function that allows color change in state

   const changeColor = (event, colorname) => {
      setColors({
         ...colors, [colorname]: event.target.value
      })
   }

   //function that provides random hex number for color

   function RandomColor() {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      let hexColor = "#" + randomColor;
      return hexColor;
   }

   //function that gets both random colors
   const getRandomHEXColors=()=>{
      let color1 = RandomColor();
      let color2 = RandomColor()
      console.log(color1, color2)
      setColors({color1,color2})
   }

   //function that controls the change in any direction
   const changeDirection = (newDirection, news) => {
      console.log(newDirection)
      setDirection(newDirection)   
      setCurrentDirecction(news)   
      console.log(currentDirection)
   }

   //function that controls style change
   const changeStyle = (newStyle) => {
      console.log(newStyle)
      setStyle(newStyle)
      setDirection(directionsList[newStyle])
   }

   return (
      <div className="side-content">
         <div className='mb-4 d-flex justify-content-between' >
            <h4 className='w-25'>CSS GRADIENT GENERATOR</h4>
            {
               darkMode?
               <FontAwesomeIcon icon={faMoon} onClick={()=>{setDarkMode(false)}}/>:
               <FontAwesomeIcon icon={faSun}  onClick={()=>{setDarkMode(true)}}/>
            }
         </div>


         <div className='settings'>
            <div>
               <label>Style</label>
               <div className='grid mt-2 mb-3'>
                     <label htmlFor="Linear" className='labelButton'>Linear</label>
                     <label htmlFor="Radial" className='labelButton'>Radial</label>
                     <label htmlFor="Conic" className='labelButton'>Conic</label>
                  <div className='d-none'>
                     <input type="radio" name="style" 
                     id="Linear" 
                     checked={style === stylesList.Linear.name}  
                     onChange={()=>changeStyle(stylesList.Linear.name)}/>
                     <input type="radio" name="style" 
                     id="Radial" 
                     checked={style === stylesList.Radial.name} 
                     onChange={()=>changeStyle(stylesList.Radial.name)}/>
                     <input type="radio" name="style" 
                     id="Conic" 
                     checked={style === stylesList.Conic.name}  
                     onChange={()=>changeStyle(stylesList.Conic.name)}/>
                  </div>
               </div>
            </div>


            <div className='direction'>
               <label>Direction</label>
               <div className='grid mt-2 mb-4'>
                     <label htmlFor="topLeft" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp}  className="topLeft"/>
                     </label>
                     <label htmlFor="top" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                     <label htmlFor="topRight" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp}  className="topRight" />
                     </label>
                     <label htmlFor="left" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp}  className="left" />
                     </label>
                     {style === "Radial" ? <label htmlFor="center" className='labelButton'>O</label>:<div></div>}
                     <label htmlFor="right" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp}  className="right" />
                     </label>
                     <label htmlFor="bottomLeft" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} className="bottomLeft" />
                     </label>
                     <label htmlFor="bottom" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} className="bottom" />
                     </label>
                     <label htmlFor="bottomRight" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} className="bottomRight" />
                     </label>
                  <div className="d-none">
                     <input 
                        type= "radio" 
                        name= "direction" 
                        id= "topLeft" 
                        checked= {direction === directionsList[style].topLeft}
                        onChange= {()=>changeDirection(directionsList[style].topLeft,"topLeft")}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="top" 
                        checked= {direction === directionsList[style].top}
                        onChange={()=>changeDirection(directionsList[style].top,"top")}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="topRight" 
                        checked= {direction === directionsList[style].topRight}
                        onChange={()=>changeDirection(directionsList[style].topRight, "topRight")}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="left" 
                        checked= {direction === directionsList[style].left}
                        onChange={()=>changeDirection(directionsList[style].left, "left")}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="center" 
                        checked= {direction === directionsList[style].center}
                        onChange={()=>changeDirection(directionsList[style].center, "center")}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="right" 
                        checked= {direction === directionsList[style].right}
                        onChange={()=>changeDirection(directionsList[style].right, "right")}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="bottomLeft" 
                        checked= {direction === directionsList[style].bottomLeft}
                        onChange={()=>changeDirection(directionsList[style].bottomLeft, "bottomLeft")}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="bottom" 
                        checked= {direction === directionsList[style].bottom}
                        onChange={()=>changeDirection(directionsList[style].bottom, "bottom")}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="bottomRight" 
                        checked= {direction === directionsList[style].bottomRight}
                        onChange={()=>changeDirection(directionsList[style].bottomRight, "bottomRight")}
                     />
                  </div>
               </div>
            </div>


            <div className='colors'>
               <label>Colors</label>
               <div className='grid mt-2 mb-3'>
                  <input type="color" className='labelButton' value={colors.color1} onChange={(event)=>{changeColor(event, 'color1')}}/>
                  <input type="color" className='labelButton' value={colors.color2} onChange={(event)=>{changeColor(event, 'color2')}}/>
                  <button className='labelButton' onClick={()=>getRandomHEXColors()}>Random</button>
               </div>
            </div>


            <div>
               <label>Output format</label>
               <div className='outputFormat mt-2 mb-4 grid'>
                  <label htmlFor="Linear3" className='labelButton'>Hex</label>
                  <label htmlFor="Linear4" className='labelButton'>Rgba</label>
                  <div className='d-none'>
                     <input type="radio" name="output" id="Linear3"/>
                     <input type="radio" name="output" id="Linear4"/>
                  </div>
               </div>
            </div>

         </div>

         <div className='get'>
            <button>Get CSS</button>
            <button>Get Share Link</button>
         </div>
      </div>
  )
}
