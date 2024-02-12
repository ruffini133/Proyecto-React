import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [cantidad, setCantidad] = useState(10000);
  console.log(cantidad);

  function handleChange(e) {
    setCantidad(+e.target.value);
    
  }
  

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <input 
        type="range"
        className='w-full h-6 bg-gray-200 accent-lime-500 hover-accent-lime-'
        onChange={handleChange}
      />

      {cantidad}
    </div>
  )
}

export default App
