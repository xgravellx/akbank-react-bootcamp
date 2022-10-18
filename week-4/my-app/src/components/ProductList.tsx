import React from 'react'

const ProductList = () => {
  return (
    <div>ProductList</div>
  )
}

export default ProductList

 
import state from '../state.js'
import ProductListProduct from "./ProductListProduct.js"

const ProductList = () => {
    return `
        <ul>
            ${state.productList.map((prod) => ProductListProduct(prod)).join('')}
        </ul>
        `
  }

  export default ProductList