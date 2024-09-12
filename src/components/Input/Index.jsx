import React , {useState} from 'react'

function Index() {
    const [name , setName] = useState("usuario");
    const [age , setAge] = useState(0);


    function handleChange(e){
            setName(e.target.value)
    }
  return (
    <div>
        <input placeholder='ingresa tu nombre' onKeyUp={(e) => handleChange(e)} />
        <p>Hola {name}</p>
    </div>
  )
}

export default Index