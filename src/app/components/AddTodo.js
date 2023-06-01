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
            <h2>
                <label>
                    Add a TODO
                </label>
            </h2>
            <input
                type='text'
                // name='text'

                value={todoToAdd}
                onChange={onChangeHandler}
            />
            <button
                type='submit'
                // disabled={todoToAdd.trim() === ""}
            >
                Add
            </button>
        </form>
    )
}