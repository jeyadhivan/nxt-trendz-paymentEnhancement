// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalItem = cartList.length

      let totalPrice = 0
      cartList.forEach(eachitem => {
        totalPrice += eachitem.quantity * eachitem.price
      })

      return (
        <div className="summary-container">
          <h1>
            Order Total: <span className="total-price">Rs {totalPrice}</span>
          </h1>
          <p>{totalItem} items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
