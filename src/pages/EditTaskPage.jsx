import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskById } from '../services/taskService'
import TaskForm from '../components/TaskForm';

export default function EditTaskPage() {
    const { id } = useParams();
    console.log("🪪 ID de la URL:", id);

    const [tarea, setTarea] = useState(null);

    useEffect(() => {
        const cargaTarea = async () => {
            try {
                const data = await getTaskById(id);
                setTarea(data);
            } catch (err) {
                console.error("Error al cargar la tarea:", error);
            }
        };
        cargaTarea();
    }, [id]);

    return (
        <div>
            <h2>`Tarea: {tarea.name}`</h2>
            {tarea ? (
                <TaskForm tarea={tarea} />
            ) : (
                <p>Cargando tarea...</p>
            )}
        </div>
    )
}