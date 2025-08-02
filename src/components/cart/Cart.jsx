import React from 'react'
import "./Cart.css"
import Button from '../button/Button'

const Cart = () => {
    return (
        <div className='cart__container'>
            <p>
                Umumihy narx: $12.00
            </p>
            <Button title={'Buyurtma'} type={"checkout"} />
        </div>
    )
}

export default Cart