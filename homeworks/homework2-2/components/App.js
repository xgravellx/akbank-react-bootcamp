import state from '../state.js';

import TransactionForm from './TransactionForm.js';
import TradeForm from './TradeForm.js';
import AddUserForm from './AddUserForm.js';
import UserList from "./UserList.js"
import ProductList from './ProductList.js';
import AddProductForm from './AddProductForm.js';
import UserExtre from './UserExtre.js';
import UserProducts from './UserProducts.js';

const App = () => {
    return /* html */ `<div class ='container'>
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

export default App;