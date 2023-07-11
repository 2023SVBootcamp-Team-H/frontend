import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookPage from '@/pages/BookPage';
// import BookPageTwo from '@/pages/BookPageTwo';
import MainPage from '@/pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/book" element={<BookPage />} />
        {/* <Route path="/book2" element={<BookPageTwo />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
