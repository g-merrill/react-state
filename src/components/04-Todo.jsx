import { useState } from "react"

const initialTodos = [
	{ id: 1, label: "Refactor the refactor of the refactor", completed: false },
	{
		id: 2,
		label: "Convince rubber duck I'm not the problem",
		completed: false,
	},
	{
		id: 3,
		label: "Rename variables to something less shameful",
		completed: false,
	},
	{ id: 4, label: "Google how to center a div (again)", completed: false },
	{ id: 5, label: "Add one more console.log for good luck", completed: false },
]

export default function Todo() {
	const [todos, setTodos] = useState(initialTodos)

	const completeTodo = (id) => {
		const filteredTodos = todos.filter((todo) => todo.id !== id)
		setTodos(filteredTodos)
	}

	return (
		<div className="container">
			<h2>Todo</h2>
			<div>
				<ul>
					{todos.map((todo) => {
						return (
							<li key={todo.id}>
								{todo.label}{" "}
								<button onClick={() => completeTodo(todo.id)} style={{ cursor: 'pointer' }}>Done!</button>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
