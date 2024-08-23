import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AllPokemon from './pages/AllPokemon';
import NameNumberPokemon from './pages/NameNumberPokemon';
import TypePokemon from './pages/TypePokemon';

// La función App solo incluye un <Routes> para manejar el enrutamiento
const AppWithRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/allPokemon" />} />
      <Route path="/allPokemon" element={<AllPokemon />} />
      <Route path="/nameNumberPokemon" element={<NameNumberPokemon />} />
      <Route path="/typePokemon" element={<TypePokemon />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>
);
