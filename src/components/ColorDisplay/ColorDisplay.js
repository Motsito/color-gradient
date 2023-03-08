import React, { useContext} from 'react'
import ColorsContext from '../../context/ColorsContext'
import './ColorDisplay.scss'

export default function ColorDisplay() {

   const {
      colorGradient
   } = useContext(ColorsContext)

   return (
      <div 
         className='display' 
            style ={{ 
               background: colorGradient
            }}
         >
      </div>
   )
}
