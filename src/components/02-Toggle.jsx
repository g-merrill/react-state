import { useState } from "react"

export default function Toggle() {
  const [timeToggle, setTimeToggle] = useState(true)
  const changeTime = (time = undefined) => {
    if (time === undefined) {
      setTimeToggle(!timeToggle)
    } else {
      setTimeToggle(time)
    }
  }
  return (
    <div className="App">
      <h2>Toggle</h2>
      <div className="emoji">{timeToggle ? '💡' : '🌌'}</div>
      <div className="button-group">
        <button onClick={() => changeTime(true)}>Day</button>
        <button onClick={() => changeTime(false)}>Night</button>
        <button onClick={() => changeTime()}>Toggle</button>
      </div>
    </div>
  )
}
