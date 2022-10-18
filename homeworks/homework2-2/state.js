const state = {
    currentUser: '',
    currentMode: '',
    inputAdSoyad: '',
    inputBakiye: '',
    inputAmount: '',
    inputSellProduct: '',
    inputTransactionSender: '',
    inputTransactionReceiver: '',
    inputTradeSeller: '',
    inputTradeBuyer: '',
    inputProductName: '',
    inputQuantity: '',
    inputPrice: '',
    productList: [{ id: '1', productName: 'Laptop', quantity: 4, price: 100 }],
    userList: [
      { id: '1', adSoyad: 'Hakan Özoğlu', bakiye: 1000, products: [], extre: [] },
    ],
}

export default state;