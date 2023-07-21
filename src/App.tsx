import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
// import FlipBook from '@/components/FlipBook';
import SatisfactionPage from './pages/SatisfactionPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/book" element={<FlipBook />} /> */}
        <Route path="/satis" element={<SatisfactionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
