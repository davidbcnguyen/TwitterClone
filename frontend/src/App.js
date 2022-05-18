import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AllPosts from './Components/AllPosts';
import Feed from './Components/Feed';
import LoginForm from './Components/LoginForm';
import NavBar from './Components/NavBar';
import PosterPage from './Components/PosterPage';
import PostersPage from './Components/PostersPage';
import RequireAuth from './Components/RequireAuth';
import RequireNotAuth from './Components/RequireNotAuth';
import { loginAsync, registerAsync, relogAsync } from './Store/PosterSlice';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            dispatch(relogAsync());
        }
    }, []);

    return (
        <div className="App">
            <HashRouter>
                <NavBar />
                <Routes>
                    <Route element={<RequireNotAuth />}>
                        <Route path="/login" element={<LoginForm text="Login" submitFunction={loginAsync} />}/>
                        <Route path="/register" element={<LoginForm text="Register" submitFunction={registerAsync} />}/>
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
