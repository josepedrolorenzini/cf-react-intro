import React , {useState , useEffect} from 'react'

function PokemonSearch() {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState("");

    const handleInputChange = (event) => {
        setPokemonName(event.target.value);
    };

    const handleSearch = async ()=>{
        if(pokemonName.trim() === ""){
          setError("Please enter a valid pokemon name");
          setPokemonData(null);
          return;
        }

        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
          );
          if (!response.ok) {
            throw new Error("Pokémon no encontrado");
          }
          const data = await response.json();
          setPokemonData(data);
          console.log(data)
          setError("");
        } catch (error) {
          
          setError(error.message);
          setPokemonData(null);
        }
    }

   
  
  return (
    <>
    <h2>Pokemon search</h2>
    <input 
    type="text" 
    value={pokemonName} 
    onChange={handleInputChange} 
    placeholder='ingresa el nombre del pokemon'
    />
    <button onClick={handleSearch}>Buscar</button>
    <p>{pokemonName}</p>

    {error && <p style={{ color: "red" }}>{error}</p>}

    {pokemonData && (
      <div>
        <h2>{pokemonData.name}</h2>
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        <p>Altura: {pokemonData.height}</p>
        <p>Peso: {pokemonData.weight}</p>
      </div>
    )}
    </>
  )
}

export default PokemonSearch