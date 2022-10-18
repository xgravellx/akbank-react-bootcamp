import state from "../state.js";

const UserListUser = (props) => {
    return `<li class="userListUser__li list-group-item d-flex ${
        state.currentUser === props.id ? 'strong' : ''
    }">
        <div class="userListUser__text">
            <span class='ms-2 me-auto'>${props.adSoyad}</span>
            <span>${props.bakiye}</span>
        </div>
        <div class="userListUser__actions">
            <button class='btn btn-outline-danger btn--edit btn-sm' onclick="javascript:handleChangeCurrentUser(${props.id},'products')">Ürünler</button>
            <button class='btn btn-outline-danger btn--edit btn-sm' onclick="javascript:handleChangeCurrentUser(${props.id},'extre')">Extre</button>
        </div>
    </li>`
}

export default UserListUser;