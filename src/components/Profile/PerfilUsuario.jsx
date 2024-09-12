import React from 'react'

function PerfilUsuario({name,age,profession}) {
  return (
    <>
    <h4>Perfil de Usuario</h4>
    <p>Nombre: {name}</p>
    <p>Edad: {age}</p>
    <p>Profesion: {profession}</p>
    <p>el usuario es mayor : {age > 18 ? " si " : "no " }</p>
    </>
  )
}

export default PerfilUsuario