import { useState } from "react"

export default function Toggle() {
  const [timeToggle, setTimeToggle] = useState(false)
  return (
    <div className="App">
      <h2>Toggle</h2>
      <div className="emoji">{timeToggle ? <span>🌌</span> : <span>💡</span>}</div>
      <div className="button-group">
        <button onClick={() => setTimeToggle(false)}>Day</button>
        <button onClick={() => setTimeToggle(true)}>Night</button>
        <button onClick={() => setTimeToggle(!timeToggle)}>Toggle</button>
      </div>
    </div>
  )
}
