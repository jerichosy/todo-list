'use client';

export default function TodoSub( {id, title, done, handleDeleteSubTask, handleChangeSubTask} ) {
    return (
        <>
            <input type="checkbox" checked={done} onChange={e => { handleChangeSubTask(id, 'done', e.target.checked) }} />
            <input type="text" value={title} disabled={true} data-test={`sub-val-${title}`}/>
            {/* <span>{todo.title}</span> */}
            <button type='button' onClick={() => handleDeleteSubTask(id)}>Delete</button>
        </>
    )

}