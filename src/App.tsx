import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import MainPage from '@/pages/MainPage';
import FlipBook from '@/components/FlipBook';
import SatisfactionPage from './pages/SatisfactionPage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/book" element={<FlipBook />} />
          <Route path="/satis" element={<SatisfactionPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
