import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products = useSelector((state)=>(state.allProducts.initialState.products)); 
    console.log(products);
    //  const {id,name} = products[];
   return (
    <div className='four column wide'>
        <div className='ui link cards'>
            <div className='card'>
                <div className='image'></div>
                <div className='content'>
                    {/* <div className='header'>{name}</div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductComponent