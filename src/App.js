import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Houses from './Houses';
import HouseForm from './HouseForm';
import HouseDetail from './HouseDetail';

const App = () => {
  const [houses, setHouses] = useState([
    { id: '1', name: 'House A', description: 'This is house A.' },
    { id: '2', name: 'House B', description: 'This is house B.' },
    { id: '3', name: 'House C', description: 'This is house C.' },
  ]);

  const addHouse = (newHouse) => {
    try {
      const id = Date.now().toString();
      newHouse.id = id;
      setHouses([...houses, newHouse]);
    } catch (error) {
      console.error('Error adding house:', error);
    }
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add House</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Houses houses={houses} />} />
        <Route path="/add" element={<HouseForm addHouse={addHouse} />} />
        <Route path="/houses/:id" element={<HouseDetail houses={houses} />} />
      </Routes>
    </Router>
  );
};

export default App;