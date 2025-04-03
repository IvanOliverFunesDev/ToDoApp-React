import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './RegisterPageStyle.css'

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await register({ name, email, password });
            Swal.fire({
                icon: 'success',
                title: `Registrado correctamente, Hola ${name}`,
                text: 'Todo correcto'
            }).then(() => {
                navigate('/login');
            })
        } catch (err) {
            console.error("Error al registrar:", err.response?.data || err.message);
            Swal.fire({
                icon: 'error',
                title: 'Error al registrarse',
                text: err.response?.data?.message || 'Algo salio mal'
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registro</h2>
            <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Correo electronico" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button type="submit">Registrarse</button>
        </form>
    );
}

