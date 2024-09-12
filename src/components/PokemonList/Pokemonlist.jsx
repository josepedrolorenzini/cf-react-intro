import React , {useState , useEffect} from 'react'

function Pokemonlist() {
    //  https://pokeapi.co/

  const [pokemon , setPokemon] = useState([]) ;


    useEffect(() => {
      
     const obtenerPokemon = async () => {

        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
            const data     = await response.json();
            setPokemon(data.results) ; 
            console.log(data.results)
        } catch (error) {
            throw new Error(error);
        }

     };
    
      return () => {
        console.log('second' ,obtenerPokemon()) ;
        obtenerPokemon();
      }
    }, [])
    


  return (
    <>
    <h2>Pokemonlist</h2>
    <div>
    <ul>
        {pokemon.map((pokemon , index) => (
         <a href={pokemon.url} key={index} >
            <li>{pokemon.name}</li>
            </a> 
        ))}
    </ul>
    </div>
    </>
  )
}

export default Pokemonlist