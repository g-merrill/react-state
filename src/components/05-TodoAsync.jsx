import { useState, useEffect } from "react"
import cointoss from "../utils/cointoss"

const URL = "http://localhost:9009/api/todos"
const API_KEY = import.meta.env.VITE_API_KEY // add .env file at the root

export default function Todo() {
	const [todoList, setTodoList] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		try {
			console.log(await cointoss())
			const res = await fetch(URL)
			const todosData = await res.json()
			setTodoList(todosData)
		} catch (error) {
			console.error(error)
		}
	}

	const deleteTodo = async (id) => {
		const res = await fetch(`${URL}/${id}`, { method: "DELETE" })
		const updatedTodos = await res.json()
		setTodoList(updatedTodos)
	}

	return (
		<div className="container">
			<h2>Todo Async</h2>
			<div>
				{todoList.map((todo) => {
					return (
						<ul key={todo.id}>
							<li>
								{todo.label}{" "}
								<button onClick={() => deleteTodo(todo.id)}>Done!</button>
							</li>
						</ul>
					)
				})}
			</div>
		</div>
	)
}
