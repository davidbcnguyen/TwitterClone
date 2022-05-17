import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AllPosts from './Components/AllPosts';
import Feed from './Components/Feed';
import NavBar from './Components/NavBar';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Counter />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <span>
  //         <span>Learn </span>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           React
  //         </a>
  //         <span>, </span>
  //         <a
  //           className="App-link"
  //           href="https://redux.js.org/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Redux
  //         </a>
  //         <span>, </span>
  //         <a
  //           className="App-link"
  //           href="https://redux-toolkit.js.org/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Redux Toolkit
  //         </a>
  //         ,<span> and </span>
  //         <a
  //           className="App-link"
  //           href="https://react-redux.js.org/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           React Redux
  //         </a>
  //       </span>
  //     </header>
  //   </div>
  // );
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllPosts />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
