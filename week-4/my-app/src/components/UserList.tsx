import React from 'react'

const UserList = () => {
  return (
    <div>UserList</div>
  )
}

export default UserList

import state from "../state.js";
import UserListUser from './UserListUser.js';

const UserList = () => {
    return `
        <ul>
            ${state.userList.map((user) => UserListUser(user)).join('')}
        </ul>
    `
}

export default UserList;