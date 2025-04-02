import React from "react";
import { createTask } from "../services/taskService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './TaskForm.css'

export default function TaskForm() {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await createTask({ name, content });
            console.log("bien", data)
        } catch (err) {
            console.error("error", err.response?.data || err.message);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <button type="submit">Guardar</button>
            <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
            <textarea type="text" placeholder="content" value={content} onChange={(e) => setContent(e.target.value)} required />

        </form>
    )
}