import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AllPosts from './Components/AllPosts';
import Feed from './Components/Feed';
import NavBar from './Components/NavBar';
import PosterPage from './Components/PosterPage';
import PostersPage from './Components/PostersPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllPosts />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/poster" element={<PostersPage />}/>
          <Route path="/poster/:username" element={<PosterPage />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
