import React, { useState } from 'react';

function TaskList() {
    const [tasks, setTasks] = useState([
        { id: 1, description: 'Zrobić zakupy', completed: false },
        { id: 2, description: 'Napisać raport', completed: true },
        { id: 3, description: 'Posprzątać pokój', completed: false }
      ]);
    
    const handleCheckboxChange = (taskId) =>{
        const updateTasks = tasks.map((task) => 
        task.id === taskId ? { ...task, completed: !task.completed} : task);
        setTasks(updateTasks);
    }
    return(
        <div>
            <h1>ZADANIE 4</h1>
            <h4>Stwórz komponent React o nazwie TaskList, który renderuje listę zadań. Każde zadanie powinno mieć checkbox oraz opis.</h4>
            <h2>Lista tasków</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.completed} onChange={() => handleCheckboxChange(task.id)}/>
                        <span style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                            {task.description}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;