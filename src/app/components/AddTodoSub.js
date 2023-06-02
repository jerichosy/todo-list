"use client";

import { useState } from "react";

export default function AddTodoSub( {parentId, handleAddSubTask} ) {
    const [subToAdd, setSubToAdd] = useState('')

    function onChangeHandler(e) {
        setSubToAdd(e.target.value)
    }

    function addSub() {
        console.log('addSub')

        if (subToAdd.trim()) {
            handleAddSubTask(parentId, subToAdd)
            setSubToAdd('');  // ? What does this do
        }
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); addSub(); }}>
            <input type="checkbox" disabled={true} />
            <input type="text" value={subToAdd} disabled={false} onChange={onChangeHandler} />
            {/* <span>{todo.title}</span> */}
            <button type='submit'>Add</button>
        </form>
    )
}