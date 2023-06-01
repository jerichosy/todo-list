import Image from 'next/image'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>TODO-LIST</h1>

      {/* <AddTodo /> */}

      {/* <form>
        <h2>
          <label>
            Add a TODO
          </label>
        </h2>
        <input
          type='text'
          name='text'

        />
        <button type='submit'>
          Add
        </button>
      </form> */}

      <TodoList />

      {/* <h2>Tasks remaining</h2> */}

    </main>
  )
}
