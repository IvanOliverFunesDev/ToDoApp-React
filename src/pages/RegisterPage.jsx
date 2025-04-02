import { useState } from "react";
import { register } from "../services/authService";
import { Form } from "react-router-dom";
import './RegisterPageStyle.css'

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await register({ name, email, password });
            console.log("Registro exitoso:", data);
        } catch (err) {
            console.error("Error al registrar:", err.response?.data || err.message);
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

