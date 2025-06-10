import { useState, useEffect } from 'react'
import cointoss from '../utils/cointoss'

const URL = 'http://localhost:9009/api/todos'
const API_KEY = import.meta.env.VITE_API_KEY // add .env file at the root

export default function Todo() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const getData = async () => {
      console.log(await cointoss())
      const res = await fetch(URL)
      const data = await res.json()      
      setTodoList(data)
    }
    try {
      getData()
    } catch (error) {
      console.error(error)
    }
  }, [])
  

  const onDone = id => {
    const filteredTodos = todoList.filter(todo => todo.id !== id)
    setTodoList(filteredTodos)
  }

  return (
    <div className="container">
      <h2>Todo Async</h2>
      <div>
        {
          todoList.map(todo => {
            return (
              <ul key={todo.id}>
                <li>{todo.label} <button onClick={() => onDone(todo.id)} style={{ cursor: 'pointer' }}>Done!</button></li>
              </ul>
            )
          })
        }
      </div>
    </div>
  )
}
