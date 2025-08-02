import React from 'react'
import Card from './components/card/card'
import {getData} from './constants/db'
import './App.css'
import Cart from './components/cart/Cart'

const courses = getData()

const App = () => {
  return (
    <>
      <h1 className='heading'>kurslar</h1>
      <Cart />
      <div className='cards__container'>
        {courses.map(course => (
          <Card key={course.id} course={course}/>
        ))}
      </div>
    </>
  )
}

export default App