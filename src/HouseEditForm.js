import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const HouseEditForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchHouse();
  }, []);

  const fetchHouse = async () => {
    try {
      const response = await axios.get(`/houses/${id}`);
      setName(response.data.name);
      setDescription(response.data.description);
    } catch (error) {
      console.error('Error fetching house:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/houses/${id}`, { name, description });
      history.push('/');
    } catch (error) {
      console.error('Error updating house:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit House</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Update</button>
    </form>
  );
};

export default HouseEditForm;


