import state from "../state.js";

const App = () => {
    return `<div class ='container'>
    <div class='left'>
        <div class='addUserForm'>${AddUserForm()}</div>
        <div class='userList'>${UserList()}</div>
    </div>
    <div class='center'>
        <div class='transactionFrom'>${TransactionForm()}</div>
        <div class='tradeForm'>${TradeForm()}</div>
            ${
                state.currentUser
                    ? state.currentMode === 'products' ? `<div>${UserProducts({ userId: state.currentUser })}</div>`
                    : state.currentMode==='extre' ? `<div>${UserExtre({ userId: state.currentUser })}</div>` : '' : ''
            }
    </div>
    <div class= 'rigth'>
        <div class="addProductForm">${AddProductForm()}</div>
        <div class="productList">${ProductList()}</div> 
    </div>
    </div>`
}