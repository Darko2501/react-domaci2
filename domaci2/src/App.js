import React, { useState } from 'react';
import Products from './Components/Products.js';

function App() {
  let[tax,setTax]=useState('0')
  return (
    <>
    
    <Products tax={tax}/>
    <div>
      <h4>Tax:</h4><br/>
      <input onInput={(e)=>setTax(e.target.value)}/>
    </div>
    

   
    </>
  );
}

export default App;
