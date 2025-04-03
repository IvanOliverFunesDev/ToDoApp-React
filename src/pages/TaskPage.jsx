import { useEffect, useState } from "react";
import { deleteTask, getTasks } from "../services/taskService";
import TaskCard from "../components/TaskCard";

export default function TaskPage() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTareas = async () => {
            try {
                const data = await getTasks();
                console.log("DATA BACKEND:", data);

                setTasks(data.tasks);
            } catch (error) {
                console.error("❌ Error al obtener tareas:", error);
            }
        };
        fetchTareas();
    }, [])
    const handleDelete = async (id) => {
        try {
            await deleteTask(id);
            console.log("tarea eliminada", id);
            setTasks(prevTasks => prevTasks.filter(task => task.id !== id));

        } catch (err) {
            console.error("❌ Error al eliminar tarea:", err.response?.data || err.message);

        }
    }
    return (
        <div>
            <h2>Mis Tareas</h2>
            {tasks.length === 0 ? (
                <p>No hay tareas aún.</p>
            ) : (
                tasks.map((task) => (
                    <TaskCard key={task.id} task={task} onDelete={handleDelete} />
                ))
            )}
        </div>
    );
}
