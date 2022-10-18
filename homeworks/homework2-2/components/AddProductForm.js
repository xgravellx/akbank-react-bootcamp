import state from '../state.js'

const AddProductForm = () => {
    return `<form  class="addProductForm__form">
    <input class='form-control form-control-sm mt-1 mb-3' onchange="handleOnChangeText(event,'inputProductName')" value="${state.inputProductName}" name="productName" type="text" placeholder="Ürün Adı"/>
    <input type='number' class='form-control form-control-sm mt-1 mb-3' onchange="handleOnChangeText(event,'inputQuantity')" value="${state.inputQuantity}" name="quantity" type="text" placeholder="Ürün Adedi"/>
    <input type='number' class='form-control form-control-sm mt-1 mb-3' onchange="handleOnChangeText(event,'inputPrice')" value="${state.inputPrice}" name="price" type="text" placeholder="Ürün Fiyatı"/>
    <button type="button" class="btn btn-outline-danger btn-sm mt-1 w-100" onclick="javascript:handleAddProduct()">Ekle</button>
  
  </form>`
  }

  export default AddProductForm