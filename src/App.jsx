import './App.css'
import Todo from './Todo'
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <div className="App">
      <Todo />
      <Toaster />
    </div>
  )
}

export default App