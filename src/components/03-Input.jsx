import { useState } from "react"

export default function Input() {
  const [userInput, setUserInput] = useState('')

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className='container'>
      <h2>Input</h2>
      <input type="text" value={userInput} onChange={handleChange} />
      <h3>The value inside the input is...</h3>
      <h3>{userInput}</h3>
    </div>
  )
}
