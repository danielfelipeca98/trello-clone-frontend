
import React, { useState, useEffect } from "react";

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
        <div >
            <h1>Registro de usuarios</h1>

            <form onSubmit={registerSubmit}>
                <div >
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
                <div >
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

                <div>
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
                <div>
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

                <button type="submit" disabled={loading}>
                    {loading ? 'Registrando usuario...' : 'Usuario registrado'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <p>
                ¿ya tienes cuenta? <a href="/login">Login</a>
            </p>
        </div>
    );
};
export default Register;