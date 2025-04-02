import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await login({ email, password });
            localStorage.setItem('token', data.token);
            console.log("Login correcto", data);
            Swal.fire({
                icon: 'success',
                title: `Login correctamente`,
                text: 'Todo correcto'
            }).then(() => {
                // navigate('/login');
            })
        } catch (err) {
            console.error("Error encontrado", err.response?.data || err.message);
            Swal.fire({
                icon: 'error',
                title: 'Error al iniciar sesion',
                text: err.response?.data?.message || 'Algo salio mal'
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    );
}