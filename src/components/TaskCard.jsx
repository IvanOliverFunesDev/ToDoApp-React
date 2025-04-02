export default function TaskCard({ task }) {
    return (
        <div className="task-card">
            <h3>{task.name}</h3>
            <p>{task.content}</p>
        </div>
    );
} 