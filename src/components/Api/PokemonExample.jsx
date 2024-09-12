import React from 'react'
import { useState , useEffect } from 'react'

function PokemonExample() {
    const [pokemon , setPokemons] = useState([]);

    const pokemons = [
        {name: 'Pikachu', type: 'Electrico'},
        {name: 'Charmander', type: 'Fuego'},
        {name: 'Squirtle', type: 'Agua'}
    ]

    useEffect(() => {
         
        setPokemons(pokemons);
      return () => {
        console.log('Pokemon')
      }
    }, [])
    
  return (
    <>
    <h2>Pokemon example</h2>
    <div>
     {pokemons.map(e=>{
        return <p key={e.name}>{e.name} - {e.type}</p>
     })}
    </div>
    </>
  )
}

export default  PokemonExample
