import state from '../state.js'

const UserExtre = (props) => {
    const userExtre = state.userList.find(
      (user) => user.id === props.userId
    ).extre
    return `
    <button onclick="javascript:handleUnselectCurrentUser()">Kapat</button>
      <ul>
          ${userExtre
            .map((info) => {
              return `<li class="userProduct_product"><span>${info}</span></li>`
            })
            .join('')}
      </ul>
      `
  }
export default UserExtre  