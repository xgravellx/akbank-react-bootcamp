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
    productList: [{id:'1', productName: 'laptop', quantity: 4, price: 100}],
    userList: [
        { id: '1', adSoyad: 'Hakan Özoğlu', bakiye: 1000, products: [], extre: [] },
      {
        id: '2',
        adSoyad: 'Hazal Yılmaz',
        bakiye: 2000,
        products: [],
        extre: [],
      },
      { id: '3', adSoyad: 'Burcu Yılmaz', bakiye: 500, products: [], extre: [] },
      {
        id: '4',
        adSoyad: 'İlayda Yurttakalan',
        bakiye: 1500,
        products: [],
        extre: [],
      },
    ],
}

export default state;