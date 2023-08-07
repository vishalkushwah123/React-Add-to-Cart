import './App.css'
import Navbar from './component/navbar'
import Shop from './component/Shop'
import { useState } from 'react'
import Cart from './component/Cart'


function App() {
  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState(false)
  const [show, setShow] = useState(true)

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false)
      }, 2000);
      return;
    }
    setCart([...cart, item])
  }

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id == item.id)
        ind = index;
    })
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1
    }
    setCart([...tempArr])
  }
  return (
    <div className='container'>
      <Navbar size={cart.length} setShow={setShow} />
      {
        show ? <Shop handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      }

      {
        warning && <div className='warning'>Item is already Present</div>
      }
    </div>
  )
}

export default App
