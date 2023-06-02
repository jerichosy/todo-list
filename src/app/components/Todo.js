'use client';

import TodoSub from "./TodoSub";

export default function Todo({ id, title, done, handleDeleteTodo }) {
    const subTasks = [
        { id: 1, title: 'subtask 1', done: false },
        { id: 2, title: 'subtask 2', done: false }
    ]

    return (
        <>
            <input type="checkbox" checked={done} />
            <input type="text" value={title} disabled={true} />
            {/* <span>{todo.title}</span> */}
            <button type='button' onClick={() => handleDeleteTodo(id)}>Delete</button>
            <ul>
                {subTasks.map(subTask => (
                    <li key={subTask.id}>
                        <TodoSub
                            id={subTask.id}
                            title={subTask.title}
                            done={subTask.done}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}