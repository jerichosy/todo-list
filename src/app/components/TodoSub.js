'use client';

export default function TodoSub( {id, title, done, handleDeleteSubTask} ) {
    return (
        <>
            <input type="checkbox" checked={done} />
            <input type="text" value={title} disabled={true}/>
            {/* <span>{todo.title}</span> */}
            <button type='button' onClick={() => handleDeleteSubTask(id)}>Delete</button>
        </>
    )

}