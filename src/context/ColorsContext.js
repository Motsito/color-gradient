import { createContext, useState } from "react";

const ColorsContext = createContext({
    darkMode:null,
    colors: {},
    style: "",
    direction: null,
    colorGradient: "",
    stylesList: {},
    directionsList:{},
    setDarkMode: ()=>{},
    setColors: ()=>{},
    setStyle: ()=>{},
    setDirection: ()=>{},
    setColorGradient: ()=>{},
})
export default ColorsContext;

export const ColorsProvider = ({children}) => {
    const directionsList = {
        Linear: {
            topLeft: "to right bottom",
            top: "180deg",
            topRight: "to left bottom",
            left: "to right",
            right: "to left",
            bottomLeft: "to right top",
            bottom: "to top",
            bottomRight: "to left top"
        },
        Radial:{
            topLeft: "left top",
            top: "center top",
            topRight: "right top",
            left: "left center",
            center: "center center",
            right: "right center",
            bottomLeft: "left bottom",
            bottom: "center bottom",
            bottomRight: "right bottom"
        },
        Conic:{
            topLeft: "from 315deg",
            top: "from 0deg",
            topRight: "from 45deg",
            left: "from 270deg",
            right: "from 90deg",
            bottomLeft: "from 225deg",
            bottom: "from 180deg",
            bottomRight: "from 135deg"
        }
    }
    const stylesList = {
        Linear: {name:"Linear", description:"linear-gradient"},
        Radial: {name:"Radial", description:"-webkit-radial-gradient"},
        Conic: {name:"Conic", description:"conic-gradient"}
    }
    
    const [darkMode, setDarkMode] = useState(false)
    const [colors, setColors] = useState({
        color1: '#FFFFFF',
        color2: '#FFFFFF'
})
    const [style, setStyle] = useState(stylesList.Linear.name)
    const [direction, setDirection] = useState(directionsList[style].topLeft)
    const [colorGradient, setColorGradient] = useState(stylesList[style]+"("+direction+","+colors.color1+","+colors.color2+")")



    const value = {
        colors,  
        darkMode,  
        style,     
        direction,
        stylesList,
        directionsList,
        colorGradient,
        setColors,
        setDarkMode,
        setStyle,
        setDirection,
        setColorGradient
    }


    return (
        <ColorsContext.Provider
        value={value}
        >
            {children}
        </ColorsContext.Provider>
    )
}
