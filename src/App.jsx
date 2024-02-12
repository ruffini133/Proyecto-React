import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button';
import { formatearDinero } from '../helpers/index.js';

function App() {
  const [cantidad, setCantidad] = useState(10000);

  const min = 0;
  const max = 20000;
  const step = 100;

  function handleChange(e) {
    setCantidad(+e.target.value);
    
  }

  function handleClickDecremento() {
    const valor = cantidad - step;

    if (valor < min) {
      alert('Cantidad no valida');
      return;
    }


    setCantidad(valor);
  }

  function handleClickIncremento() {
    const valor = cantidad + step;

    if (valor > max) {
      alert('Cantidad no valida');
      return;
    }


    setCantidad(valor);
  }
  

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className='flex justify-between my-6'>
        <Button 
          operador='-'
          fn={handleClickDecremento}
        />

        <Button 
          operador='+'
          fn={handleClickIncremento}
        />
      
      </div>

      <input 
        type="range"
        className='w-full h-6 bg-gray-200 accent-lime-500 hover-accent-lime-'
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        value={cantidad}
      />

      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>
        {formatearDinero(cantidad)}
      </p>
    </div>
  )
}

export default App
