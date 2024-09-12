import React from 'react' ;
import reactLogo from './assets/react.svg' ;
import viteLogo from '/vite.svg' ;
import './App.css'
import Index from './components/Counter/Index';
import UserProfile from './components/Profile/PerfilUsuario';
import Greetings from './components/Greetings';
import Agecheck from './components/AgeCheck/Agecheck';
import SimpleCounter from './components/Counter/SimpleCounter';
import UseEffect1 from './components/Api/UseEffect1';

function Homepage() {
    const edades = [20 , 30 , 40 , 50 , 60 ,70] ;
    const usuario ={
     name:'jose',
     apellido:"lorenzini",
     age:43,
     profesion:"web developer",
    }
  return (
    <>
    <h1>Homepage</h1>
    <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
        <p><img src={reactLogo} alt={reactLogo} /> </p>
        {/* <img src={viteLogo} alt={viteLogo} />  */}
        <h1>Hola!</h1>
        <Index />
        <UserProfile  name="jose pedro" age="43" profession="Web Artisan" />
        <Greetings name={usuario.name + " " + usuario.apellido} />
        {console.log(usuario)}
        <Agecheck name={usuario.name} edad="43" />
        <SimpleCounter />
       <p>{edades.length}</p> 
       <span>{edades.map( (edad , i) => {
         return <Agecheck name={usuario.name + i} edad={edad} key={i} />
       })}</span>
      </div>
      <UseEffect1 />
    
    </>
  )
}

export default Homepage