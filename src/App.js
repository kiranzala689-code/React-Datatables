
import './App.css'
import Navbar from './comp/Navbar';
import {Routes,Route} from "react-router-dom"
import Product from './comp/Product';
import Electronics from './comp/Electronics';
import Pagenotfound from './comp/Pagenotfound';

function App() {
 
  return (
    <div className='div1'>
   
  
     
            <Navbar/>
            <Routes>
            
            <Route path="/products" element={<Product/>}>
            <Route path="electronics"element={<Electronics/>}/>
            </Route>
            <Route path='*' element={<Pagenotfound/>}/>
           </Routes>  
           
    </div>
  )
}

export default App









// import { useState } from 'react';
// import './App.css';
// import Card from './comp/Card';
// import Table from './comp/Table';
// import Timer from './comp/Timer';
// import Api from './comp/Api';
// // import Tod from './comp/Tod';
// // import Api2 from './comp/Api2';

// // import Counter from './comp/Counter'
// function App() {
//    const [state,setstate]=useState(true)
//   return (
//     <div className='div1'>
//       {/* <Api/>
//       <Api2/> */} 
//      {
//       state ? < Card /> : <Table/>
//     }
//     <button onClick={(()=>(setstate(true)))}>show card</button>
//     <button onClick={(()=>(setstate(false)))}>show table</button>
//     {/* <Timer/> */}
//     </div>
//   );
// }

// export default App;
