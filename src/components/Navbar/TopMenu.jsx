import React from 'react';
import { Link } from "react-router-dom";
import '../../index.css'

function TopMenu() {
  return (
    <div className="min-h-full">
    <nav>
      <ul>
        <li className='list-none'>
          <Link to="/">Home</Link>
        </li>
        <li className='list-none'>
          <Link to="/Todolist">Todo list</Link>
        </li>
        <li className='list-none'>
          <Link to="/Api">Api</Link>
        </li>
        <li className='list-none'>
          <Link to="/Pokemonapi">Pokemon list Api</Link>
        </li>
        <li className='list-none'>
          <Link to="/pokemonsearch">pokemon search</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default TopMenu;
