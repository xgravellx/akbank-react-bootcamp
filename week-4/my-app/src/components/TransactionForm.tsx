import React from 'react'

const TransactionForm = () => {
  return (
    <div>TransactionForm</div>
  )
}

export default TransactionForm

import state from '../state.js'

import UserSelectList from "./UserSelectList.js"

const TransactionForm = () => {
    return `<form>
      ${UserSelectList({
        placeholder:"Gönderen seçiniz",
        name: 'sender',
        stateControl: 'inputTransactionSender',
        value: `${state.inputTransactionSender}`,
      })}
      <input type="number" class="form-control form-control-sm" value="${
        state.inputAmount
      }" onchange="handleOnChangeText(event,'inputAmount')"  type="text" name="amount" placeholder="Miktar"/>
      ${UserSelectList({
        name: 'receiver',
        placeholder:"Alıcı seçiniz",
        stateControl: 'inputTransactionReceiver',
        hidden: `${state.inputTransactionSender}`,
      })}
      <button type="button" class="btn btn-outline-danger btn-sm mt-1 w-100" onclick="javascript:handleTransaction()">Gönder</button>
      </form>`
  }
  export default TransactionForm