'use client';

import { useReducer } from "react";
import AddTodo from "./AddTodo";

function todosReducer(todos = [], action) {
    switch (action.type) {
        case "add": {
            return [...todos, { id: action.id, title: action.title, done: false }];
        }
        // case "edit": {
        //     return todos.map(todo => ({
        //         ...
        //     }))
        // }
        case "delete": {
            return todos.filter(todo => todo.id !== action.id);
        }
        default: throw Error(`Unknown action: ${action.type}`);
    }
}

export default function TodoList() {
    const [todos, dispatch] = useReducer(todosReducer, [])

    function handleAddTodo(title) {
        console.log('handleAddTodo')
        dispatch({ type: 'add', id: crypto.randomUUID(), title });
    }
    function handleDeleteTodo(id) {
        console.log('handleDeleteTodo')
        dispatch({ type: 'delete', id });
    }

    return (
        <>
            <AddTodo handleAddTodo={handleAddTodo} />

            <h2>Tasks remaining</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.done} />
                        <span>{todo.title}</span>
                        <button type='button' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}