import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NamePokemon from './pages/NamePokemon';
import NumberPokemon from './pages/NumberPokemon';
import AllPokemon from './pages/AllPokemon';

// La función App solo incluye un <Routes> para manejar el enrutamiento
const AppWithRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/allPokemon" />} />
      <Route path="/allPokemon" element={<AllPokemon />} />
      <Route path="/namePokemon" element={<NamePokemon />} />
      <Route path="/typePokemon" element={<NumberPokemon />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>
);
