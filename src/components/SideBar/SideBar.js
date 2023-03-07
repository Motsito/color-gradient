import React,{useState} from 'react'
import "./SideBar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap'

export default function SideBar() {

   const [darkMode, setDarkMode] = useState(false)

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
                  <label for="style1" className='labelButton'>Linear</label>
                  <label for="style2" className='labelButton'>Radial</label>
                  <label for="style3" className='labelButton'>Conic</label>
                  <div className='d-none'>
                     <input type="radio" name="style" id="style1" />
                     <input type="radio" name="style" id="style2" />
                     <input type="radio" name="style" id="style3" />
                  </div>
               </div>
            </div>


            <div className='direction'>
               <label>Direction</label>
               <div>
                     <label for="style4">
                        <FontAwesomeIcon icon={faArrowUp} />
                     </label>
                  <div className="intento">
                     <input type="radio" name="style" id="style4" />
                     <input type="radio" name="style" />
                     <input type="radio" name="style" />
                     <input type="radio" name="style" />
                     <input type="radio" name="style" />
                     <input type="radio" name="style" />
                     <input type="radio" name="style" />
                     <input type="radio" name="style" />
                     <input type="radio" name="style" />
                  </div>
               </div>
            </div>


            <div className='colors'>
               <label>Colors</label>
               <div>
                  <input type="color"/>
                  <input type="color"/>
                  <button>Random</button>
               </div>
            </div>


            <div>
               <label>Output format</label>
               <div>
                  <input type="radio" name="output" />
                  <input type="radio" name="output" />
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
