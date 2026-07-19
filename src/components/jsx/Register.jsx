
import React, { useState, useEffect } from "react";
import '../../css/Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);///////////

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
                const response = await fetch(`${API_URL}/api/auth/profile`, {
                    credentials: 'include'
                })
                if (response.ok) {
                    window.location.href = '/';
                }
            } catch (error) {
                console.log('Error al verificar uatenticacion', error)
            }
        }
        checkAuth();
    }, [])

    const registerSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!email || !password || !confirmPassword || !name) {
            setError('Datos incompletos');
            return;
        }
        if (password !== confirmPassword) {
            setError('contraseña no coincide');
            return;
        }
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                window.location.href = '/login';
            } else {
                const data = await response.json();
                setError(data.message || 'Error al realizar el registro');
            }
        } catch (error) {
            setError('Error de conexión al servidor');
            console.error('Error de login:', error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="register-container">
            <div className="register-card">
                <h1>Registro de usuarios</h1>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={registerSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            id="nombre"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Nombre Completo"
                            disabled={loading}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="tu@email.com"
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            disabled={loading}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirmar contraseña:</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            disabled={loading}
                        />
                    </div>

                    <button type="submit" className="btn-submit" disabled={loading}>
                        {loading ? 'Registrando usuario...' : 'Usuario registrado'}
                    </button>
                </form>

                <div className="login-link">
                    ¿Ya tienes cuenta? <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
};
export default Register;