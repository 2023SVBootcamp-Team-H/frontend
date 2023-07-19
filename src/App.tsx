import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
// import TestBook from '@/components/TestBook';
import SatisfactionPage from './pages/SatisfactionPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/book" element={<TestBook />} /> */}
        <Route path="/satisfaction" element={<SatisfactionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
