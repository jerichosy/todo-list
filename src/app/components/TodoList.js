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
        default: throw Error(`Unknown action: ${action.type}`);
    }
}

export default function TodoList() {
    const [todos, dispatch] = useReducer(todosReducer, [])

    function handleAddTodo(title) {
        console.log('handleAddTodo')
        dispatch({ type: 'add', id: crypto.randomUUID(), title });
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
                    </li>
                ))}
            </ul>
        </>
    )
}