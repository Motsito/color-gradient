import { useState } from "react";
import SideBar from "./components/SideBar/SideBar"
import ColorsContext from "./context/ColorsContext"
import ColorDisplay from "./components/ColorDisplay/ColorDisplay";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

   const [darkMode, setDarkMode] = useState(false)
   const [colors, setColors] = useState({
      color1: '#FFFFFF',
      color2: '#FFFFFF'
   })

   return (
      <div className="d-flex">
         <ColorsContext.Provider
         value={
            {
               colors,
               setColors,
               darkMode,
               setDarkMode
            }
         }>
            <SideBar />
            <ColorDisplay />
         </ColorsContext.Provider>
      </div>
   );
}

export default App;
