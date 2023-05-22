
// import Home from "./pages/Home"



// const App = () =>{
//     return(
//         <div className="app">
//             <Home/>
//         </div>
//     )
// }

// export default App

// import React, {useEffect, useState} from 'react'
// const App = () =>{
//     const [data, setData] = useState([])
//     const fetchData = async () =>{
//     const data = await fetch("https://jsonplaceholder.typicode.com/posts") 
//     const jsonData = await data.json()
//     setData(jsonData)
// }

//     useEffect(()=>{
//         fetchData();
//     },[])

//     return (
//         <div>
//             <h1>Data</h1>
//             {(!data.length && <p>Loading...</p>)}
//             {data.map((res, index) => {
//                 return (
//                     <div>
//                         <p>{res.title}</p>
//                         <p>{res.url}</p>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default App



// import React, {useEffect} from "react";
// import {BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage  from './pages/Home'
// import AboutPage  from './pages/About'


// const App = () =>{
//     return(
//         <BrowserRouter>
//         <Routes>
//             <Route path = '/' element ={<HomePage/>} />
//             <Route path="/about" element={<AboutPage/>}/>

//         </Routes>
//         </BrowserRouter>
//     )
// }
// export default App

// import React, { useState } from 'react'
// import about from './pages/About'
// import Home from './pages/Home'
// import './styles/home.css'

// const App = () => {
//   const [visibility, setvisibility]= useState(false)
//   return (
//     <div className='prim'>
//     {visibility && <Home onClose={()=> setvisibility(false)}>My Alert</Home>}
//       <button className='primary'onClick={()=> setvisibility(true)}>My Button</button>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Residence from './components/Residence'

const App = () => {
  return (
    <div>
      <Residence/>
    </div>
  )
}

export default App