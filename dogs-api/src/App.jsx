import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import { Home } from './pages/Home';
import { SearchDog } from './pages/SearchDogs';
import { SavedDog } from './pages/SavedDog';
import './App.css';

const App = () => {
  const [savedDogs, setSavedDogs] = useState([]);

  const handleLike = (dog) => {
    console.log('Liked Dog:', dog);
  };

  const handleSave = (dog) => {
    setSavedDogs((prevDogs) => [...prevDogs, dog]);
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home onLike={handleLike} onSave={handleSave}/>} />
        <Route path="/saved" element={<SavedDog savedDogs={savedDogs}/> } />
        <Route path="/search" element={<SearchDog/>} />
      </Routes>
    </>
  );
};

export default App;

