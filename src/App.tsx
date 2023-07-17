import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookPage from '@/pages/BookPage';
import BookPageThree from '@/pages/BookPageThree';
import BookPageTwo from '@/pages/BookPageTwo';

import MainPage from '@/pages/MainPage';
// import DemoBook from './components/Book';
import BookPageFour from './pages/BookPageFour';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/book3" element={<BookPageThree />} />
        <Route path="/book2" element={<BookPageTwo />} />
        <Route path="/book4" element={<BookPageFour />} />
        {/* <Route path="/demobook" element={<DemoBook />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
