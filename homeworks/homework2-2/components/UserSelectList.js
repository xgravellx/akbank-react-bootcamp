import state from '../state.js'

const UserSelectList = (props) => {
    return `<select class='form-select form-select-sm mt-1 mb-1' onchange="javascript:handleOnChangeText(event,'${
      props.stateControl
    }')" name="${props.name}">
    <option>${props.placeholder}</option>
      ${state.userList
        .filter((user) => user.id !== props.hidden)
        .map(
          (user) =>
            '<option ' +
            (user.id === state[props.stateControl] ? 'selected' : '') +
            ' value="' +
            user.id +
            '" >' +
            user.adSoyad +
            '</option>'
        )
        .join('')}
      </select> `
  }
  export default UserSelectList