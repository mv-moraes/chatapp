// RouterApp.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Content from '../components/Content';
import Pesquisas from '../components/Pesquisas';
import Marcas from '../components/Marcas';
import Pessoas from '../components/Pessoas';
import Report from '../components/Report';

const Private = ({ children }) => {
    const signed = true; // Coloque a lógica de autenticação aqui
    return signed ? children : <Signin />;
};

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/home"
                    element={
                        <Private>
                            <Home content={<Content />} />
                        </Private>
                    }
                />
                <Route
                    exact
                    path="/pesquisas"
                    element={
                        <Private>
                            <Home content={<Pesquisas />} />
                        </Private>
                    }
                />
                <Route
                    exact
                    path="/marcas"
                    element={
                        <Private>
                            <Home content={<Marcas />} />
                        </Private>
                    }
                />
                <Route
                    exact
                    path="/pessoas"
                    element={
                        <Private>
                            <Home content={<Pessoas />} />
                        </Private>
                    }
                />
                <Route
                    exact
                    path="/report"
                    element={
                        <Private>
                            <Home content={<Report />} />
                        </Private>
                    }
                />
                <Route path="/" element={<Signin />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route path="*" element={<Signin />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;
