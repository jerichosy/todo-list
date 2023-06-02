'use client';

export default function Todo({ id, title, done, handleDeleteTodo }) {
    return (
        <>
            <input type="checkbox" checked={done} />
            <input type="text" value={title} disabled={true} />
            {/* <span>{todo.title}</span> */}
            <button type='button' onClick={() => handleDeleteTodo(id)}>Delete</button>
        </>
    )
}