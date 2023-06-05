'use client';

import { useReducer, useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

function todosReducer(todos = [], action) {
    switch (action.type) {
        case "add": {
            return [...todos, { id: action.id, title: action.title, done: false }];
        }
        case "change": {
            return todos.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, [action.property]: action.newValue };
                } else {
                    return todo;
                }
            });
        }
        case "delete": {
            return todos.filter(todo => todo.id !== action.id);
        }
        default: throw Error(`Unknown action: ${action.type}`);
    }
}

export default function TodoList() {
    const [todos, dispatch] = useReducer(todosReducer, [])
    const [subTasks, setSubTasks] = useState([])

    function handleAddTodo(title) {
        console.log('handleAddTodo')
        dispatch({ type: 'add', id: crypto.randomUUID(), title });
    }
    function handleChangeTodo(id, property, newValue) {
        console.log('handleChangeTodo')
        dispatch({ type: 'change', id, property, newValue });
    }
    function handleDeleteTodo(id) {
        console.log('handleDeleteTodo')
        dispatch({ type: 'delete', id });
    }

    const subTasksHandler = {
        handleAddSubTask: (parentId, title) => {
            setSubTasks([...subTasks, { parentId: parentId, id: crypto.randomUUID(), title, done: false }])
        },
        handleChangeSubTask: (id, property, newValue) => {
            setSubTasks(subTasks.map(subTask => {
                if (subTask.id === id) {
                    return { ...subTask, [property]: newValue };
                } else {
                    return subTask;
                }
            }))
        },
        handleDeleteSubTask: (id) => {
            setSubTasks(subTasks.filter(subTask => subTask.id !== id))
        }
    }

    const [showCompleted, setShowCompleted] = useState(true);

    function handleToggleShowCompleted() {
        setShowCompleted(!showCompleted);
    }

    const displayedTodos = showCompleted ? todos : todos.filter(todo => !todo.done);


    return (
        <>
            <h2>{todos.filter(e => !e.done).length} remaining, {todos.filter(e => e.done).length} completed</h2>
            <button type='button' onClick={handleToggleShowCompleted}>
                {showCompleted ? 'Hide' : 'Show'} Completed Tasks
            </button>
            <ul>
                {displayedTodos.map(todo => (
                    <li key={todo.id} data-test={"todo-item"}>
                        <Todo
                            id={todo.id}
                            title={todo.title}
                            done={todo.done}
                            handleDeleteTodo={handleDeleteTodo}
                            handleChangeTodo={handleChangeTodo}
                            subTasks={subTasks.filter(subTask => subTask.parentId === todo.id)}
                            subTasksHandler={subTasksHandler}
                        />
                    </li>
                ))}
                <AddTodo handleAddTodo={handleAddTodo} />
            </ul>
        </>
    )
}