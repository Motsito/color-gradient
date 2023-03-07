import React,{useContext, useState} from 'react'
import ColorsContext from '../../context/ColorsContext'
import "./SideBar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function SideBar() {

   const {
      colors,
      setColors,
      darkMode,
      setDarkMode
   } = useContext(ColorsContext)

   //function that allows color change in state

   const changeColor = (event, colorname) => {
      setColors({
         ...colors, [colorname]: event.target.value
      })
   }

   return (
      <div className="vh-100 side-content">
         <div>
            <h4>CSS GRADIENT GENERATOR</h4>
            {
               darkMode?
               <FontAwesomeIcon icon={faMoon} onClick={()=>{setDarkMode(!darkMode)}}/>:
               <FontAwesomeIcon icon={faSun}  onClick={()=>{setDarkMode(!darkMode)}}/>
            }
            
         </div>


         <div className='settings'>
            <div>
               <label>Style</label>
               <div className='d-flex justify-content-between'>
                     <label htmlFor="style1" className='labelButton'>Linear</label>
                     <label htmlFor="style2" className='labelButton'>Radial</label>
                     <label htmlFor="style3" className='labelButton'>Conic</label>
                  <div className='d-none'>
                     <input type="radio" name="style" id="style1" />
                     <input type="radio" name="style" id="style2" />
                     <input type="radio" name="style" id="style3" />
                  </div>
               </div>
            </div>


            <div className='direction'>
               <label>Direction</label>
               <div className='grid'>
                     <label htmlFor="style4" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                     <label htmlFor="style5" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                     <label htmlFor="style6" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                     <label htmlFor="style7" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                     <label htmlFor="style8" className='labelButton'>
                     </label>
                     <label htmlFor="style9" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                     <label htmlFor="style10" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                     <label htmlFor="style11" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                     <label htmlFor="style12" className='labelButton'>
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                  <div className="d-none">
                     <input type="radio" name="style" id="style4" />
                     <input type="radio" name="style" id="style5" />
                     <input type="radio" name="style" id="style6" />
                     <input type="radio" name="style" id="style7" />
                     <input type="radio" name="style" id="style8" />
                     <input type="radio" name="style" id="style9" />
                     <input type="radio" name="style" id="style10" />
                     <input type="radio" name="style" id="style11" />
                     <input type="radio" name="style" id="style12" />
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
                  <label htmlFor="style13" className='labelButton'>Hex</label>
                  <label htmlFor="style14" className='labelButton'>Rgba</label>
                  <div className='d-none'>
                     <input type="radio" name="output" id="style13"/>
                     <input type="radio" name="output" id="style14"/>
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
