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
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: true }
			} else {
				return todo
			}
		})
		setTodos(updatedTodos)
	}

	return (
		<div className="container">
			<h2>Todo</h2>
			<div>
				{todos.map((todo) => {
					return (
						<ul key={todo.id}>
							<li>
								{todo.label}{" "}
								<button onClick={() => completeTodo(todo.id)}>
									{todo.completed ? "Done!" : "Mark complete"}
								</button>
							</li>
						</ul>
					)
				})}
			</div>
		</div>
	)
}
