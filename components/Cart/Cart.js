import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/action/cartActions'

export const Cart = () => {
    const myState = useSelector(state => state.addToCart.cart)
    const dispatch = useDispatch()

  return (
    <div>
        <h1>You selected {myState.length} items</h1>
        <div style={{display:'flex', flexDirection:'colum'}}>
        {
            myState.map(item => <div key={item.id} style={{border: '2px solid indigo', margin:'10px', padding:'10px'}}>
                                 <h2>{item.name}</h2>
                                <h4>Price: {item.price}</h4>
                                <button onClick={()=> dispatch(removeFromCart(item.id))}>Remove</button>
                        </div>)

        }
        </div>
    </div>
  )
}
