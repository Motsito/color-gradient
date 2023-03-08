import React,{useContext, useEffect} from 'react'
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
      colorGradient,
      setColors, 
      setDarkMode,
      setStyle,
      setDirection,
      setColorGradient,
   } = useContext(ColorsContext)

useEffect(()=>{
   if(style==="Linear" && direction === ""){
      setColorGradient(stylesList[style]+"("+colors.color1+","+colors.color2+")")
   }else{
      setColorGradient(stylesList[style]+"("+direction+","+colors.color1+","+colors.color2+")")
   }
},[colors, direction, style])


   //function that allows color change in state

   const changeColor = (event, colorname) => {
      setColors({
         ...colors, [colorname]: event.target.value
      })
      changeStyleDirection(direction)
   }


   //function that controls the change in any direction or style
   const changeStyleDirection = (newDirection) => {
      console.log(newDirection)
      //setStyle(stylesList[newStyle])
      setDirection(newDirection)      
   }

   return (
      <div className="vh-100 side-content">
         <div>
            <h4>CSS GRADIENT GENERATOR</h4>
            {
               darkMode?
               <FontAwesomeIcon icon={faMoon} onClick={()=>{setDarkMode(false)}}/>:
               <FontAwesomeIcon icon={faSun}  onClick={()=>{setDarkMode(true)}}/>
            }
         </div>


         <div className='settings'>
            <div>
               <label>Style</label>
               <div className='d-flex justify-content-between'>
                     <label htmlFor="Linear" className='labelButton'>Linear</label>
                     <label htmlFor="Radial" className='labelButton'>Radial</label>
                     <label htmlFor="Conic" className='labelButton'>Conic</label>
                  <div className='d-none'>
                     <input type="radio" name="style" 
                     id="Linear" 
                     checked={style === "linear-gradient"}  
                     onChange={()=>setStyle("Linear")}/>
                     <input type="radio" name="style" 
                     id="Radial" 
                     checked={style === "-webkit-radial-gradient"} 
                     onChange={()=>setStyle("Radial")}/>
                     <input type="radio" name="style" 
                     id="Conic" 
                     checked={style === "conic-gradient"}  
                     onChange={()=>setStyle("Conic")}/>
                  </div>
               </div>
            </div>


            <div className='direction'>
               <label>Direction</label>
               <div className='grid'>
                     <label htmlFor="topLeft" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                     <label htmlFor="top" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                     <label htmlFor="topRight" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                     <label htmlFor="left" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                     {style === "Radial" ? <label htmlFor="center" className='labelButton'></label>:<div></div>}
                     <label htmlFor="right" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                     <label htmlFor="bottomLeft" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                     <label htmlFor="bottom" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                     <label htmlFor="bottomRight" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                  <div className="d-none">
                     <input 
                        type= "radio" 
                        name= "direction" 
                        id= "topLeft" 
                        checked= {direction === directionsList[style].topLeft}
                        onChange= {()=>changeStyleDirection(directionsList[style].topLeft)}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="top" 
                        checked= {direction === directionsList[style].top}
                        onChange={()=>changeStyleDirection(directionsList[style].top)}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="topRight" 
                        checked= {direction === directionsList[style].topRight}
                        onChange={()=>changeStyleDirection(directionsList[style].topRight)}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="left" 
                        checked= {direction === directionsList[style].left}
                        onChange={()=>changeStyleDirection(directionsList[style].left)}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="center" 
                        checked= {direction === directionsList[style].center}
                        onChange={()=>changeStyleDirection(directionsList[style].center)}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="right" 
                        checked= {direction === directionsList[style].right}
                        onChange={()=>changeStyleDirection(directionsList[style].right)}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="bottomLeft" 
                        checked= {direction === directionsList[style].bottomLeft}
                        onChange={()=>changeStyleDirection(directionsList[style].bottomLeft)}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="bottom" 
                        checked= {direction === directionsList[style].bottom}
                        onChange={()=>changeStyleDirection(directionsList[style].bottom)}
                     />
                     <input 
                        type="radio" 
                        name="direction" 
                        id="bottomRight" 
                        checked= {direction === directionsList[style].bottomRight}
                        onChange={()=>changeStyleDirection(directionsList[style].bottomRight)}
                     />
                  </div>
               </div>
            </div>


            <div className='colors'>
               <label>Colors</label>
               <div className='d-flex justify-content-between'>
                  <input type="color" className='labelButton' onChange={(event)=>{changeColor(event, 'color1')}}/>
                  <input type="color" className='labelButton' onChange={(event)=>{changeColor(event, 'color2')}}/>
                  <button className='labelButton'>Random</button>
               </div>
            </div>


            <div>
               <label>Output format</label>
               <div className='outputFormat'>
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
