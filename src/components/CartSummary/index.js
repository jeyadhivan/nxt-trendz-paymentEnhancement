import {useState} from 'react'
import CartContext from '../../context/CartContext'
import PaymentPopup from '../PaymentPopup'
import './index.css'

const CartSummary = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleCheckout = () => {
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const totalItem = cartList.length

        let totalPrice = 0
        cartList.forEach(eachItem => {
          totalPrice += eachItem.quantity * eachItem.price
        })

        return (
          <div className="summary-container">
            <h1>
              Order Total: <span className="total-price">Rs {totalPrice}</span>
            </h1>
            <p>{totalItem} items in cart</p>
            <button
              type="button"
              className="checkout-button"
              onClick={handleCheckout}
            >
              Checkout
            </button>
            <PaymentPopup
              isOpen={isPopupOpen}
              onClose={handleClosePopup}
              itemCount={totalItem}
              totalPrice={totalPrice}
            />
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary
