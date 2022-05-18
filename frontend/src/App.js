import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { login, register } from './APIs/BackendCalls';
import AllPosts from './Components/AllPosts';
import Feed from './Components/Feed';
import LoginForm from './Components/LoginForm';
import NavBar from './Components/NavBar';
import PosterPage from './Components/PosterPage';
import PostersPage from './Components/PostersPage';
import RequireAuth from './Components/RequireAuth';
import RequireNotAuth from './Components/RequireNotAuth';

function App() {
    return (
        <div className="App">
            <HashRouter>
                <NavBar />
                <Routes>
                    <Route element={<RequireNotAuth />}>
                        <Route path="/login" element={<LoginForm text="Login" submitFunction={login} />}/>
                        <Route path="/register" element={<LoginForm text="Register" submitFunction={register} />}/>
                    </Route>
                    <Route element={<RequireAuth />}>
                        <Route path="/" element={<AllPosts />} />
                        <Route path="/feed" element={<Feed />} />
                        <Route path="/poster" element={<PostersPage />}/>
                        <Route path="/poster/:username" element={<PosterPage />}/>
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
