import { useState } from 'react'
import './App.css'
import { Todoprovider } from './contexts/TodoContext'

function App() {
  const [todos, setTodos ] = useState([])
  const addTodo =(todo)=>{
   setTodos(()=>[{id:Date.now(), ...todo},...prev,todo ])
  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ?todo :prevTodo)))
  }

  const  deleteTodo =(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id !==id))

  }
  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo===id ?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  const updateTodo=(id,todo)=>{
     

  }

  return (
    <Todoprovider value={{addTodo,updateTodo,deleteTodo,toggleComplete}}>
   <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                          </div>
                        ))}
                    </div>
                </div>    </Todoprovider>
  )
}

export default App
