import state from '../state.js'

const ProductSelectList = (props) => {
  const sellerProducts = state.userList.find(
    (user) => user.id === state.inputTradeSeller
  )?.products

  return `<select class='form-select form-select-sm mt-1 mb-1' onchange="javascript:handleOnChangeText(event,'${
    props.stateControl
  }')" name="${props.name}">
  <option>${props.placeholder}</option>
      ${sellerProducts
        ?.map(
          (prod) =>
            '<option ' +
            (prod.id === state[props.stateControl] ? 'selected' : '') +
            ' value="' +
            prod.id +
            '" >' +
            prod.productName +
            '</option>'
        )
        .join('')}
      </select> `
}

export default ProductSelectList