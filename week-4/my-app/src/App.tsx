import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';
import TransactionForm from './components/TransactionForm';
import TradeForm from './components/TradeForm';
import UserExtre from './components/UserExtre';
import UserProducts from './components/UserProducts';

type UserProduct = {
  id:number, 
  productName: string, 
  price: number
}
type User = {
  id: string,
  adSoyad: string,
  bakiye: number,
  products: Array<UserProduct>,
  extre: Array<string>
}

function App() {
  const [userList, setUserList] = useState<Array<User>>()
  return (
    <div className='container'>
      <div className='left'>
        <div className='addUserForm'><AddUserForm/></div>
        <div className='userList'><UserList/></div>
      </div>
      <div className='center'>
        <div className='transactionFrom'><TransactionForm/></div>
        <div className='tradeForm'>
          <TradeForm/>
        </div>
        {
          state.currentUser
              ? state.currentMode === 'products' ? <div><UserProducts userId= {state.currentUser}/></div>
              : state.currentMode==='extre' ? <div><UserExtre userId= {state.currentUser}/></div> : null : null
        }
      </div>
      <div className='rigth'></div>
    </div>
  );
}

export default App;
