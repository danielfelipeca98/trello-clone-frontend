import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify({
          id: data.ID,
          email: data.email,
          name: data.name
        }));
        window.location.href = '/';
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
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
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

        <button type="submit" disabled={loading}>
          {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>
        ¿No tienes cuenta? <a href="/register">Regístrate</a>
      </p>
    </div>
  );
};

export default Login;