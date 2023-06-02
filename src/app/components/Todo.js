'use client';

import { useState } from "react";
import TodoSub from "./TodoSub";
import AddTodoSub from "./AddTodoSub";

export default function Todo({ id, title, done, handleDeleteTodo, handleChangeTodo, subTasks, subTasksHandler }) {
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
                            handleDeleteSubTask={subTasksHandler.handleDeleteSubTask}
                            handleChangeSubTask={subTasksHandler.handleChangeSubTask}
                        />
                    </li>
                ))}
                <AddTodoSub
                    parentId={id}
                    handleAddSubTask={subTasksHandler.handleAddSubTask}
                />
            </ul>
        </>
    )
}