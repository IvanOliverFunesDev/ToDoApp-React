import { Link } from "react-router-dom";

export default function TaskCard({ task, onDelete }) {
    return (
        <div className="task-card">
            <h3>{task.name}</h3>
            <p>{task.content}</p>
            <Link to={`/tasks/edit/${task.id}`}>
                <button>Editar</button>
            </Link>
            <button onClick={() => onDelete(task.id)}></button>
        </div>
    );
} 