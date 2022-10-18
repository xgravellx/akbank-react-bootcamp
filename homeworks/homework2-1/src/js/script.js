// Account New
const addUserName = document.getElementById('accountName');
const addUserBalance = document.getElementById('accountBalance');
const addUserForm = document.getElementById('addUser');
const accountsList = document.getElementById('accountsList');

// Product New
const productName = document.getElementById('productName');
const productQuantity = document.getElementById('productQuantity');
const productPrice = document.getElementById('productPrice');
const addProduct = document.getElementById('addProduct');
const productList = document.getElementById('productList');

// Options Create
const senderNamesMoney = document.getElementById('senderNamesMoney');
const receiverNamesMoney = document.getElementById('receiverNamesMoney');
const senderNamesSatis = document.getElementById('senderNamesSatis');
const receiverNamesSatis =document.getElementById('receiverNamesSatis');
const transferProduct = document.getElementById('transferProduct');

const transferAmount = document.getElementById('transferAmount');
const transferMoneyBtn = document.getElementById('transferMoneyBtn');

addUserForm.addEventListener('submit', saveUser);
addProduct.addEventListener('submit', saveProduct);
transferMoneyBtn.addEventListener('submit', transferMoney);

function saveUser(e) {
  e.preventDefault();

  const eklenecekKisi = {
    id : idGen(),
    addUserName : addUserName.value,
    addUserBalance : Number(addUserBalance.value),

  }
  if (!accountName.value || !accountBalance.value) {
    return alert("Invalid account!");
  }
  alanlariTemizle();
  addUserList(eklenecekKisi);
}

function saveProduct(e) {
  e.preventDefault();

  const addToProduct = {
    productName : productName.value,
    productQuantity : Number(productQuantity.value),
    productPrice : Number(productPrice.value),
  }
  if (!productName.value || !productQuantity.value || !productPrice.value) {
    return alert('Invalid product');
  }
  alanlariTemizle();
  addProductList(addToProduct);

}

function alanlariTemizle() {
  addUserName.value ='';
  addUserBalance.value ='';
}

function addUserList(eklenecekKisi) {
  const olusturulanLi = document.createElement('li');
  olusturulanLi.classList.add('list-group-item', 'd-flex', 'userlistli');
  olusturulanLi.setAttribute('account-id', eklenecekKisi.id);
  olusturulanLi.innerHTML = `
    <div class="ms-2 me-auto userLi">${eklenecekKisi.addUserName}</div>
    <div class="me-4 userLi">₺ ${eklenecekKisi.addUserBalance}</div>
    <button class="btn btn-outline-danger btn-sm userDelete" onclick="remove(event, ${eklenecekKisi.id})">X</button>
    `
  accountsList.appendChild(olusturulanLi);

  // options(eklenecekKisi.addUserName);
  optionSenderNamesMoney(eklenecekKisi.addUserName, eklenecekKisi.id, eklenecekKisi.addUserBalance);
  optionReceiverNamesMoney(eklenecekKisi.addUserName, eklenecekKisi.id);
  optionSenderNamesSatis(eklenecekKisi.addUserName, eklenecekKisi.id);
  optionReceiverNamesSatis(eklenecekKisi.addUserName, eklenecekKisi.id);
}

function addProductList(addToProduct) {
  const olusturulanLi = document.createElement('li');
  olusturulanLi.classList.add('list-group-item', 'd-flex', 'userlistli');
  olusturulanLi.innerHTML = `
  <div class="ms-2 me-auto userLi">${addToProduct.productName}</div>
  <div class="me-4 userLi">${addToProduct.productQuantity}</div>
  <div class="me-4 userLi">₺ ${addToProduct.productPrice}</div>
  <button class="btn btn-outline-danger btn-sm userDelete" onclick="remove(event, ${addToProduct.id})">X</button>`

  productList.appendChild(olusturulanLi);

  optionProduct(addToProduct.productName, addProduct.id);
}

// remove function
function remove(event, id){
  if (event.target.classList.contains('userDelete')) {
    const silinecekLi = event.target.parentElement;
    silinecekLi.remove();
  }
  const nameSelection = document.getElementsByName(`${id}`);
  const nameArr = [...nameSelection];
  for(const elem of nameArr) {
    elem.remove();
  }
}

function optionSenderNamesMoney(userName, userId, userBalance) {
  const createdOption = document.createElement('option');
  createdOption.setAttribute('id', userId);
  createdOption.setAttribute('name', userId);
  createdOption.innerHTML = `${userName}`;
  senderNamesMoney.appendChild(createdOption);


}
function optionReceiverNamesMoney(userName, userId) {
  const createdOption = document.createElement('option');
  createdOption.setAttribute('id', userId);
  createdOption.setAttribute('name', userId);
  createdOption.innerHTML = `${userName}`;
  receiverNamesMoney.appendChild(createdOption);
}
function optionSenderNamesSatis(userName, userId) {
  const createdOption = document.createElement('option');
  createdOption.setAttribute('id', userId);
  createdOption.setAttribute('name', userId);
  createdOption.innerHTML = `${userName}`;
  senderNamesSatis.appendChild(createdOption);
}
function optionReceiverNamesSatis(userName, userId) {
  const createdOption = document.createElement('option');
  createdOption.setAttribute('id', userId);
  createdOption.setAttribute('name', userId);
  createdOption.innerHTML = `${userName}`;
  receiverNamesSatis.appendChild(createdOption);
}
function optionProduct(productName, userId) {
  const createdOption = document.createElement('option');
  createdOption.setAttribute('id', userId);
  createdOption.innerHTML = `${productName}`;
  transferProduct.appendChild(createdOption);
}

function userShow(e, userName) {
  e.preventDefault();

  console.log(userName, userBalance);

}

function transferMoney() {
  console.log(transferAmount.value);
}
// Id generator helper function
function idGen() {
  return String(Math.round(Math.random() * 10000));
}