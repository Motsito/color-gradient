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
   const[selectedLabels, setSelectedLabels] = useState(["Linear","topLeft","Hex"])
   //useffect that randomizes and select the settings for the first render
   useEffect(()=>{
      getRandomHEXColors()
      changeDirection(directionsList[style].topLeft,"topLeft")
   },[])

   //useeffect that controls changes occured in colors and direction for the display to render
useEffect(()=>{
   if(direction === directionsList.Linear.top){
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
      setColors({color1,color2})
   }

   //function that controls the change in any direction
   const changeDirection = (newDirection, news, event, index) => {
      setDirection(newDirection);
      setCurrentDirecction(news);
      event && setClassSelected(event,index)
   }

   //function that controls style segment change
   const changeStyle = (newStyle, event, index) => {
      setStyle(newStyle)
      setDirection(directionsList[newStyle])
      setClassSelected(event,index)
   }

   //function that controls class definition after selection
const setClassSelected = (event, index)=>{
   let newSelectedLabels = [...selectedLabels];
   newSelectedLabels[index] = event.target.id;
   setSelectedLabels(newSelectedLabels);
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
                     <label htmlFor="Linear" className={selectedLabels[0] === 'Linear' ? 'selected labelButton' : 'labelButton'}>Linear</label>
                     <label htmlFor="Radial" className={selectedLabels[0] === 'Radial' ? 'selected labelButton' : 'labelButton'}>Radial</label>
                     <label htmlFor="Conic" className={selectedLabels[0] === 'Conic' ? 'selected labelButton' : 'labelButton'}>Conic</label>
                  <div className='d-none'>
                     <input type="radio" name="style" 
                     id="Linear" 
                     checked={style === stylesList.Linear.name}  
                     onChange={(event)=>changeStyle(stylesList.Linear.name, event, 0)}/>
                     <input type="radio" name="style" 
                     id="Radial" 
                     checked={style === stylesList.Radial.name} 
                     onChange={(event)=>changeStyle(stylesList.Radial.name, event, 0)}/>
                     <input type="radio" name="style" 
                     id="Conic"
                     checked={style === stylesList.Conic.name}  
                     onChange={(event)=>{changeStyle(stylesList.Conic.name, event, 0)}}/>
                  </div>
               </div>
            </div>


            <div className='direction'>
               <label>Direction</label>
               <div className='grid mt-2 mb-4'>
                     <label htmlFor="topLeft" className={selectedLabels[1] === 'topLeft' ? 'selected labelButton' : 'labelButton'}>
                        <FontAwesomeIcon icon={faArrowUp}  className="topLeft"/>
                     </label>
                     <label htmlFor="top" className={selectedLabels[1] === 'top' ? 'selected labelButton' : 'labelButton'}>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                     <label htmlFor="topRight" className={selectedLabels[1] === 'topRight' ? 'selected labelButton' : 'labelButton'}>
                        <FontAwesomeIcon icon={faArrowUp}  className="topRight" />
                     </label>
                     <label htmlFor="left" className={selectedLabels[1] === 'left' ? 'selected labelButton' : 'labelButton'}>
                        <FontAwesomeIcon icon={faArrowUp}  className="left" />
                     </label>
                     {style === "Radial" ? <label htmlFor="center" className={selectedLabels[1] === 'center' ? 'selected labelButton' : 'labelButton'}>O</label>:<div></div>}
                     <label htmlFor="right" className={selectedLabels[1] === 'right' ? 'selected labelButton' : 'labelButton'}>
                        <FontAwesomeIcon icon={faArrowUp}  className="right" />
                     </label>
                     <label htmlFor="bottomLeft" className={selectedLabels[1] === 'bottomLeft' ? 'selected labelButton' : 'labelButton'}>
                        <FontAwesomeIcon icon={faArrowUp} className="bottomLeft" />
                     </label>
                     <label htmlFor="bottom" className={selectedLabels[1] === 'bottom' ? 'selected labelButton' : 'labelButton'}>
                        <FontAwesomeIcon icon={faArrowUp} className="bottom" />
                     </label>
                     <label htmlFor="bottomRight" className={selectedLabels[1] === 'bottomRight' ? 'selected labelButton' : 'labelButton'}>
                        <FontAwesomeIcon icon={faArrowUp} className="bottomRight" />
                     </label>
                  <div className="d-none">
                     <input 
                        type= "radio" 
                        name= "direction" 
                        id= "topLeft" 
                        checked= {direction === directionsList[style].topLeft}
                        onChange= {(event)=>changeDirection(directionsList[style].topLeft, "topLeft", event, 1)}
                     />
                     <input 
                        type="radio"
                        name="direction" 
                        id="top" 
                        checked= {direction === directionsList[style].top}
                        onChange={(event)=>changeDirection(directionsList[style].top,"top", event, 1)}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="topRight" 
                        checked= {direction === directionsList[style].topRight}
                        onChange={(event)=>changeDirection(directionsList[style].topRight, "topRight", event, 1)}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="left" 
                        checked= {direction === directionsList[style].left}
                        onChange={(event)=>changeDirection(directionsList[style].left, "left", event, 1)}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="center" 
                        checked= {direction === directionsList[style].center}
                        onChange={(event)=>changeDirection(directionsList[style].center, "center", event, 1)}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="right" 
                        checked= {direction === directionsList[style].right}
                        onChange={(event)=>changeDirection(directionsList[style].right, "right", event, 1)}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="bottomLeft" 
                        checked= {direction === directionsList[style].bottomLeft}
                        onChange={(event)=>changeDirection(directionsList[style].bottomLeft, "bottomLeft", event, 1)}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="bottom" 
                        checked= {direction === directionsList[style].bottom}
                        onChange={(event)=>changeDirection(directionsList[style].bottom, "bottom", event, 1)}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="bottomRight" 
                        checked= {direction === directionsList[style].bottomRight}
                        onChange={(event)=>changeDirection(directionsList[style].bottomRight, "bottomRight", event, 1)}
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
                  <label htmlFor="Hex" className={selectedLabels[2] === 'Hex' ? 'selected labelButton' : 'labelButton'}>Hex</label>
                  <label htmlFor="RGBA" className={selectedLabels[2] === 'RGBA' ? 'selected labelButton' : 'labelButton'}>Rgba</label>
                  <div className='d-none'>
                     <input 
                     type="radio" 
                     name="output" 
                     id="Hex"
                     onChange={(event)=>changeDirection(directionsList[style].bottomRight, "bottomRight", event, 2)}
                     />
                     
                     <input 
                     type="radio" 
                     name="output" 
                     id="RGBA"
                     onChange={(event)=>setClassSelected(event, 2)}
                     />
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
