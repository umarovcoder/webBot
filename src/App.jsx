import React, { useState } from 'react'
import Card from './components/card/card'
import { getData } from './constants/db'
import './App.css'
import Cart from './components/cart/Cart'

const courses = getData()

const App = () => {

  const [cartItems, setCartItems] = useState([]);

  const onAddItem = (item) => {
    const existItem = cartItems.find(c => c.id == item.id);

    if (existItem) {
      const newData = cartItems.map(c => c.id == item.id ? { ...existItem, quantity: existItem.quantity + 1 } : c)
      setCartItems(newData)
    } else {
      const newData = [...cartItems, { ...item, quantity: 1 }]
      setCartItems(newData)
    }
  };

  const onRemoveItem = (item) => {
    const existItem = cartItems.find(c => c.id == item.id);

    if (existItem.quantity === 1) {
      const newData = cartItems.filter(c => c.id !== existItem.id)
      setCartItems(newData)
    } else {
      const newData = cartItems.map(c => c.id === existItem.id ? { ...existItem, quantity: existItem.quantity - 1 }
        : c
      );
      setCartItems(newData)
    }
  };

  return (
    <>
      <h1 className='heading'>kurslar</h1>
      <Cart />
      <div className='cards__container'>
        {courses.map(course => (
          <Card key={course.id} course={course} onAddItem={onAddItem} onRemoveItem={onRemoveItem} />
        ))}
      </div>
    </>
  )
}

export default App