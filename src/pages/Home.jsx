// import React from "react"
// import "../styles/home.css"
// import "../styles/container.css"
// import Container from "../components/Container"

// const Home = () =>{
//     return(
//         <div className="home">
//             <Container color="red" size="20px"/>
//             <Container color="pink"/>
//             <Container color="green"/>
//             <Container color="purple"/>
//             <Container color="voilet"/>
//             <Container color="blue"/>

//         </div>
//     )
// }

// export default Home


// import React from "react"
// import Navcomponent from "../components/Navcomponent"

// const Home = () =>{
//     return <div>
//         <Navcomponent/>
//         <h1>Homepage</h1>
          
//     </div>
// }
// export default Home

// import React from 'react'
// import '../styles/home.css'


// interface props{
//     children : string;
//     onClose: ()=> void;
// }
// const Home = ({children, onClose}: props) => {
//   return (
//     <div>
//         {children}
//         <button className='button' onClick={onClose}>X</button>
//     </div>
//   )
// }

// export default Home

// interface props{
//     countries: string [];
//     heading : string; 
// }
// const Home = ({countries, heading}: props) =>{
    
//     // countries = []
//     const[selectedindex, setselectedindex]= useState(-1)

    
    
//     return(
//         <div>
//             <h1>{heading}</h1>
//             {countries.length === 0 && <p>Loading..</p>}
//             <ul>
//             {countries.map((item, index)=> (
//             <li className={selectedindex == index? "list-group-item active" : "list-group-item" } key={item} 
//             onClick={()=> {selectedindex = index}}>{item}</li>
//             ))}
            
//             </ul>
//         </div>
//     )
// }
// export default Home