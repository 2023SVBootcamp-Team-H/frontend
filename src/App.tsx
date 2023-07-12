import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import BookPage from '@/pages/BookPage';
import BookPageThree from '@/pages/BookPageThree';
// import BookPageTwo from '@/pages/BookPageTwo';

import MainPage from '@/pages/MainPage';
// import Book from './components/Book';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/book" element={<BookPage />} /> */}
        {/* <Route path="/book2" element={<BookPageTwo />} /> */}
        <Route path="/book3" element={<BookPageThree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
