import React from 'react'
import { Route, Routes,BrowserRouter} from "react-router-dom"
import Main from "./Routes/Main"

export default function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/:c1/:c2/:gt/:gd" element={<Main />}/>
         </Routes>
      </BrowserRouter>
   )
}
