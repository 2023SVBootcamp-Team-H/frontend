import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
// import TestBook from '@/components/TestBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/book" element={<TestBook />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
