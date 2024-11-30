import {useState} from 'react'
import Popup from 'reactjs-popup'
import './index.css'

const PaymentPopup = ({isOpen, onClose, itemCount, totalPrice}) => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [orderConfirmed, setOrderConfirmed] = useState(false)

  const handleConfirmOrder = () => {
    setOrderConfirmed(true)
  }

  return (
    <Popup open={isOpen} modal onClose={onClose}>
      <div className="popup-content">
        {!orderConfirmed ? (
          <>
            <h2>Payment Options</h2>
            <label>
              <input type="radio" name="payment" value="card" disabled />
              Card
            </label>
            <label>
              <input type="radio" name="payment" value="netbanking" disabled />
              Net Banking
            </label>
            <label>
              <input type="radio" name="payment" value="upi" disabled />
              UPI
            </label>
            <label>
              <input type="radio" name="payment" value="wallet" disabled />
              Wallet
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="cod"
                onChange={() => setPaymentMethod('cod')}
              />
              Cash on Delivery
            </label>
            <div className="order-summary">
              <p>Items: {itemCount}</p>
              <p>Total: ₹{totalPrice}</p>
            </div>
            <button
              type="button"
              onClick={handleConfirmOrder}
              disabled={paymentMethod !== 'cod'}
            >
              Confirm Order
            </button>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </>
        ) : (
          <div className="success-message">
            <h2>Your order has been placed successfully</h2>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </Popup>
  )
}

export default PaymentPopup
