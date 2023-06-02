'use client';

import { useReducer } from "react";
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

    return (
        <>
            <AddTodo handleAddTodo={handleAddTodo} />

            <h2>Tasks remaining</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <Todo
                            id={todo.id}
                            title={todo.title}
                            done={todo.done}
                            handleDeleteTodo={handleDeleteTodo}
                            handleChangeTodo={handleChangeTodo}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}