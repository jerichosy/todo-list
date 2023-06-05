'use client';

import { useState } from "react";

export default function AddTodo( {handleAddTodo} ) {
    const [todoToAdd, setTodoToAdd] = useState('')

    function onChangeHandler(e) {
        setTodoToAdd(e.target.value)
    }

    function addTodo() {
        console.log('addTodo')

        if (todoToAdd.trim()) {
            handleAddTodo(todoToAdd)
            setTodoToAdd('');  // ? What does this do
        }
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); addTodo(); }}>
            <input type="checkbox" disabled={true} />
            <input
                type='text'
                // name='text'
                placeholder="Add a task"

                value={todoToAdd}
                onChange={onChangeHandler}
                data-test='add-todo-input'
            />
            <button
                type='submit'
                data-test='add-todo-button'
                // disabled={todoToAdd.trim() === ""}
            >
                Add
            </button>
        </form>
    )
}