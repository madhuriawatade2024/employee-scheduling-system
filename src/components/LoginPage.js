import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ handleLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in...");
        console.log("Username:", username);
        console.log("Password:", password);
        const employees = [
            {
                id: 1,
                name: "John Doe",
                email: "john.doe@company.com",
                role: { id: 1, name: "Cashier" }
            },
            {
                id: 2,
                name: "Jane Smith",
                email: "jane.smith@company.com",
                role: { id: 2, name: "Manager" }
            },
            {
                id: 3,
                name: "Michael Lee",
                email: "michael.lee@company.com",
                role: { id: 1, name: "Cashier" }
            }
        ];

        
        const user = employees.find(employee => employee.email === username && password === 'password');
        if (user) {
            
            handleLogin(user.role.name === 'Manager', user.role.name === 'Cashier');
            navigate('/employee/availability'); // Redirect to EmployeeAvailabilityPage
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />

                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default LoginPage;
