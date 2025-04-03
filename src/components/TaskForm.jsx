import React from "react";
import { createTask, updateTask } from "../services/taskService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './TaskForm.css'

export default function TaskForm({ tarea }) {
    const [name, setName] = useState(tarea?.name || '');
    const [content, setContent] = useState(tarea?.name || '');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let data;
            if (tarea) {
                data = await updateTask(tarea.id, { name, content });
                console.log("tarea actualizada", data);
            } else {
                data = await createTask({ name, content });
                console.log("tarea creada", data);
            }
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