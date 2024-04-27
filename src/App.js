import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

import LoginPage from './components/LoginPage';
import EmployeeAvailabilityPage from './components/EmployeeAvailabilityPage';
import AdminDashboard from './components/AdminDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import ShiftManagementPage from './components/ShiftManagementPage';
import EmployeeSchedulePage from './components/EmployeeSchedulePage';
import AdminSchedulePage from './components/AdminSchedulePage';
import RequestTimeOffPage from './components/RequestTimeOffPage';
import ShiftSwapPage from './components/ShiftSwapPage';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const handleLogin = (isLoggedIn, isAdminUser) => {
        setLoggedIn(isLoggedIn);
        setIsAdmin(isAdminUser);
    };

    return (
        <Router> 
            <div className="App">
                <Routes>
                    {/* <Route path="/" element={<LoginPage />} /> */}
                    <Route path="/" element={<LoginPage handleLogin={handleLogin} />} />
                    <Route path="/employee/availability" element={<EmployeeAvailabilityPage />} />
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
                    <Route path="/shift-management" element={<ShiftManagementPage />} />
                    <Route path="/employee/schedule" element={<EmployeeSchedulePage />} />
                    <Route path="/admin/schedule" element={<AdminSchedulePage />} />
                    <Route path="/request-time-off" element={<RequestTimeOffPage />} />
                    <Route path="/shift-swap" element={<ShiftSwapPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
