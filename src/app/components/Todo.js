'use client';

import { useState } from "react";
import TodoSub from "./TodoSub";
import AddTodoSub from "./AddTodoSub";

export default function Todo({ id, title, done, handleDeleteTodo, handleChangeTodo }) {
    const [subTasks, setSubTasks] = useState([
        // { id: 1, title: 'subtask 1', done: false },
        // { id: 2, title: 'subtask 2', done: false }
    ])

    function handleAddSubTask(title) {
        setSubTasks([...subTasks, { id: crypto.randomUUID(), title, done: false }])
    }
    function handleChangeSubTask(id, property, newValue) {
        setSubTasks(subTasks.map(subTask => {
            if (subTask.id === id) {
                return { ...subTask, [property]: newValue };
            } else {
                return subTask;
            }
        }))
    }
    function handleDeleteSubTask(id) {
        setSubTasks(subTasks.filter(subTask => subTask.id !== id))
    }

    return (
        <>
            <input type="checkbox" checked={done} onChange={e => { handleChangeTodo(id, 'done', e.target.checked) }} />
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
                            handleDeleteSubTask={handleDeleteSubTask}
                            handleChangeSubTask={handleChangeSubTask}
                        />
                    </li>
                ))}
                <AddTodoSub handleAddSubTask={handleAddSubTask} />
            </ul>
        </>
    )
}