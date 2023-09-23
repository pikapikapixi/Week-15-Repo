import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const HouseDeleteButton = ({ id }) => {
  const history = useHistory();

  const handleDelete = async () => {
    try {
      await axios.delete(`/houses/${id}`);
      history.push('/');
    } catch (error) {
      console.error('Error deleting house:', error);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default HouseDeleteButton;