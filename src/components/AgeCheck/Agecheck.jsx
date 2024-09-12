import React from 'react'

function Agecheck(props) {
  return (
    <>
     <p>La edad es de : {props.edad}</p>
     <div>
        el usuario es {props.name} {" y es  "}
        {props.edad > 18? <span> mayor </span>: <span> menor </span>} de edad
     </div>
    </>
  )
}

export default Agecheck