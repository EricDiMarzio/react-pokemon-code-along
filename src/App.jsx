import { useState } from 'react';
import Card from './Card';

function App() {
  //visit https://pokeapi.co/docs/v2#pokemon to learn more about this API
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
  const [team, setTeam] = useState([]);

  //gets a random number from 1 to 151.
  const getGenOne = () => {
    return Math.ceil(Math.random() * 151);
  };

  async function fetchData(url) {
    try {
      //fetches data by adding a number on to the BASE_URL - this lets us a search for a pokemon by ID number.
      const response = await fetch(url + getGenOne());
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      //functionally pushes a new {pokemon} on to the end of the 'team' array.
      setTeam([...team, { id: data.id, title: data.name, sprite: data.sprites.front_default },]);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  return (
    <div className="app">
      <h1>Build your Team!</h1>
      <div className="roster">
        {team.map((el) => (<Card key={el.id} pokemon={el} />))}
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => {fetchData(BASE_URL);}}>Fetch</button>
        <button onClick={() => {setTeam([]);}}>Clear</button>
      </div>
    </div>
  );
}

export default App;
