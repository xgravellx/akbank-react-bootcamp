import React from 'react'

const AddUserForm = () => {
  return (
    <div>AddUserForm</div>
  )
}

export default AddUserForm


import state from '../state.js';

const AddUserForm = () => {
    return `<form class="addUserForm__form" id="addUserForm">
        <input class='form-control form-control-sm mt-1 mb-3' onchange="handleOnChangeText(event,'inputAdSoyad')" value="${state.inputAdSoyad}" name="adSoyad" type="text" placeholder="Ad Soyad"/>
        <input class='form-control form-control-sm mt-1 mb-3' onchange="handleOnChangeText(event,'inputBakiye')" value="${state.inputBakiye}" name="bakiye" type="text" placeholder="Bakiye"/>
        <button class='btn btn-sm btn-danger w-100' type="button" onclick="javascript:handleAddUser()">Ekle</button>
    </form>`
}

export default AddUserForm;