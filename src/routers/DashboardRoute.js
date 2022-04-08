import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import NavBars from '../components/NavBars';


const DashboardRoute = () => {
    return (
        <div>
             <>
            <NavBars/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </>
        </div>
    );
};

export default DashboardRoute;