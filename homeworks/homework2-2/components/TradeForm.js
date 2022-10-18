import state from '../state.js'
import UserSelectList from "./UserSelectList.js"
import ProductSelectList from "./ProductSelectList.js"

const TradeForm = () => {
    return `<form>
      ${UserSelectList({
        name: 'seller',
        placeholder:"Satıcı seçiniz",
        stateControl: 'inputTradeSeller',
        value: `${state.inputTradeSeller}`,
      })}
      ${ProductSelectList({
        name: 'sellProduct',
        placeholder:"Ürün seçiniz",
        stateControl: 'inputSellProduct',
        value: `${state.inputSellProduct}`,
      })}
      ${UserSelectList({
        name: 'buyer',
        placeholder:"Alıcı Seçiniz",
        stateControl: 'inputTradeBuyer',
        hidden: `${state.inputTradeSeller}`,
      })}
      <button type="button" class="btn btn-outline-danger btn-sm mt-1 w-100" onclick="javascript:handleTrade()">Gönder</button>
      </form>`
  }

  export default TradeForm