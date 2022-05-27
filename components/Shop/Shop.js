import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action/cartActions';

const product = [
    {
        id:1,
        name: 'HP Laptop',
        price: 200
    },
    {
        id:2,
        name: 'Dell Laptop',
        price: 300
    },
    {
        id:3,
        name: 'Apple Laptop',
        price: 800
    },
    {
        id:4,
        name: 'Koel Laptop',
        price: 150
    }
]
const Shop = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <h3>This is REDUX Shop</h3>
       <div style={{display:'flex', flexDirection:'colum'}}>
        {
            product.map(item => <div key={item.id} style={{border: '2px solid indigo', margin:'10px', padding:'10px'}}>
                                 <h2>{item.name}</h2>
                                <h4>Price: {item.price}</h4>
                                <button onClick={()=> dispatch(addToCart(item))}>Add To Cart</button>
                        </div>)

        }
        </div>
       

    </div>
  )
}

export default Shop;