import { render } from './main.js'
import state from './state.js'

const handleOnChangeText = (event, inputName) => {
  state[inputName] = event.target.value
  render()
} 

const handleAddUser = () => {
  //const values = getValuesFromForm("addUserForm")
  const values = {
    adSoyad: state.inputAdSoyad,
    bakiye: Number(state.inputBakiye),
    id: String(Math.round(Math.random() * 5000)),
    products: [],
  }
  state.userList.push(values)
  state.inputAdSoyad = ''
  state.inputBakiye = ''

  render()
}

const handleAddProduct = () => {
  //const values = getValuesFromForm("addUserForm")
  const values = {
    productName: state.inputProductName,
    quantity: Number(state.inputQuantity),
    id: String(Math.round(Math.random() * 5000)),
    price: Number(state.inputPrice),
  }
  state.productList.push(values)
  state.inputProductName = ''
  state.inputQuantity = ''
  state.inputPrice = ''

  render()
}

const handleTransaction = () => {
  const sender = state.userList.find(
    (user) => user.id === state.inputTransactionSender
  )
  const receiver = state.userList.find(
    (user) => user.id === state.inputTransactionReceiver
  )
  if (sender.bakiye < Number(state.inputAmount)) {
    alert('adamda o kadar para yok')
    return
  }
  sender.bakiye = sender.bakiye - Number(state.inputAmount)
  receiver.bakiye = receiver.bakiye + Number(state.inputAmount)
  sender.extre.push(
    `${receiver.adSoyad} kişisine ${state.inputAmount} tutarında para gönderildi`
  )
  receiver.extre.push(
    `${sender.adSoyad} kişisinden ${state.inputAmount} tutarında para geldi`
  )
  state.inputAmount = ''

  render()
}

const handleChangeCurrentUser = (id, mode) => {
  state.currentUser = String(id)
  state.currentMode = mode
  render()
}

const handleSell = (id) => {
  const prod = state.productList.find((prod) => prod.id === String(id))
  const buyer = state.userList.find((user) => user.id === state.currentUser)
  //TODO:validate amount and quantity
  buyer.bakiye = buyer.bakiye - prod.price
  prod.quantity = prod.quantity - 1
  buyer.products.push({ ...prod, quantity: undefined })
  buyer.extre.push(
    `mağazadan ${prod.productName} ürünü ${prod.price} fiyatına satın alındı.`
  )

  render()
}

const handleTrade = () => {
  const seller = state.userList.find(
    (user) => user.id === state.inputTradeSeller
  )
  const buyer = state.userList.find((user) => user.id === state.inputTradeBuyer)
  const prod = seller.products.find(
    (prod) => prod.id === state.inputSellProduct
  )

  seller.bakiye = seller.bakiye + prod.price
  buyer.bakiye = buyer.bakiye - prod.price
  buyer.products.push(prod)
  const idx = seller.products.indexOf(prod)
  seller.products.splice(idx, 1)
  seller.extre.push(
    `${buyer.adSoyad} kişisine ${prod.productName} ürünü ${prod.price} fiyatına satıldı`
  )
  buyer.extre.push(
    `${seller.adSoyad} kişisinden ${prod.productName} ürünü ${prod.price} fiyatına satın alındı`
  )

  render()
}

const handleUnselectCurrentUser = () => {
  state.currentUser = ''
  render()
}

;[
  handleOnChangeText,
  handleAddUser,
  handleAddProduct,
  handleTransaction,
  handleChangeCurrentUser,
  handleSell,
  handleTrade,
  handleUnselectCurrentUser,
].forEach((handler) => (window[handler.name] = handler))