import React from 'react'
import { Route, Routes } from 'react-router-dom';
import TopMenu from './components/Navbar/TopMenu';
import Homepage from './Homepage';
import Todolist from './components/Todolist/Todolist';
import Pokemonlist from './components/PokemonList/Pokemonlist';
import PokemonExample from './components/Api/PokemonExample';
import Index from './components/Input/Index';
import Pokemonsearch from './components/PokemonSearch/PokemonSearch';

function App() {
 

  return (
    <>
      <TopMenu />
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Todolist" element={<Todolist />} />
        <Route path="/Api" element={<PokemonExample />} />
        <Route path='/Pokemonapi' element={<Pokemonlist/>} />
        <Route path='/indexinput' element={<Index/>} />
        <Route path='/pokemonsearch' element={<Pokemonsearch />} />
      </Routes>
    </>
  )
}

export default App
