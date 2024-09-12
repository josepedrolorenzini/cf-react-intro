import React from 'react';
import { useState , useEffect } from 'react' ;
import reactLogo from '../../assets/react.svg' ;
import viteLogo from '/vite.svg' ;

function Index() {
    
    const [count, setCount] = useState(0);

    let jsxDefinition = {
        definicion: 'la forma en la que se escribe react'
      } ;

    function syntaxis(){
       
       setCount((count) => count + 1) ;
     //  let imagen = document.querySelectorAll('img');
     let imagen = document.querySelector('img');
       console.log('counting -> ' , count ) ;
      // console.dir(imagen)
       if(imagen.alt === '/src/assets/react.svg'){
        console.dir(imagen)
        imagen.src  = viteLogo ;	
        imagen.alt  = viteLogo ;	
      //  { return  <img src={viteLogo} alt={viteLogo} /> }
       }else{
        imagen.src  = '/src/assets/react.svg' ;	
        imagen.alt = "/src/assets/react.svg" ;
        console.log(imagen.src , jsxDefinition)
       }
    }

  return (
    <>
     <button onClick={syntaxis}>
          count is {count}
        </button>
    </>
  )
}

export default Index