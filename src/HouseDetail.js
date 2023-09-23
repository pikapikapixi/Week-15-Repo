import React from 'react';
import { useParams } from 'react-router-dom';

const HouseDetail = ({ houses }) => {
 const { id } = useParams();
 const house = houses.find((house) => house.id === id);

 if (!house) {
   return <div>House not found</div>;
 }

 return (
   <div>
     <h2>{house.name}</h2>
     <p>{house.description}</p>
   </div>
 );
};

export default HouseDetail;


