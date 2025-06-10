import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  )
}
