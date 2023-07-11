import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookPage from '@/pages/BookPage';
import MainPage from '@/pages/MainPage';
import SatisfactionModal from './components/SatisfactionModal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/SatisfactionModal" element={<SatisfactionModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
