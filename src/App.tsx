import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center pt-[120px]">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="w-[120px] animate-bounce" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="w-[120px] ml-[50px] animate-bounce" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card ">
        <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-3xl font-bold underline">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
