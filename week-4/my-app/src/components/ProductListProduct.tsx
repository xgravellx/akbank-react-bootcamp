import React from 'react'

const ProductListProduct = () => {
  return (
    <div>ProductListProduct</div>
  )
}

export default ProductListProduct


import state from '../state.js'

const ProductListProduct = (props) => {
    return `<li class="productListProduct__li">
        <div class="productListProduct__text">
        <span>${props.productName}</span>
        <span>${props.quantity} Adet</span>
        <span>${props.price}$</span></div>
        <div class="productListProduct__actions">
        ${
          state.currentUser
            ? '<button class="btn btn-outline-danger btn-sm mt-1" onclick="javascript:handleSell(' +
              props.id +
              ')">Sat</button>'
            : ' '
        }
        </div>
        </li>`
  }

  export default ProductListProduct