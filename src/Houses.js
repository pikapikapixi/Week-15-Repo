import React from 'react';

const Houses = ({ houses }) => (
  <div>
    <h1>Houses</h1>
    {houses.map((house) => (
      <div key={house.id}>
        <h2>{house.name}</h2>
        <p>{house.description}</p>
      </div>
    ))}
  </div>
);

export default Houses;
