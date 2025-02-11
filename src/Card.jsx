/* eslint-disable react/prop-types */

function Card({ pokemon }) {
  return (
    <div className="card">
      <h2>{pokemon.title.toUpperCase()}</h2>
      <span className="cardId">{pokemon.id}</span>
      <img src={pokemon.sprite} alt="psyduck" />
    </div>
  );
}

export default Card;
