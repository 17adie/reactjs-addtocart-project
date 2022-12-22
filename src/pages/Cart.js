import React, { useState, useContext } from "react"
import { Context } from "../context"
import CartItem from "../components/CartItem"
const Cart = () => {
  const [buttonText, setButtonText] = useState("Place Order")
  const { cartItems, emptyCart } = useContext(Context)
  const totalCost = 5.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })
  const haveItems = cartItems.length > 0
  const noItemInCart = <h2>You have no items in your cart.</h2>
  const cartItemsElements = cartItems.map((v) => {
    return <CartItem key={v.id} item={v} />
  })

  const placeOrder = () => {
    setButtonText("Ordering...")
    setTimeout(() => {
      console.log("Order placed!")
      setButtonText("Place Order")
      emptyCart()
    }, 3000)
  }

  const CheckOutElements = (
    <>
      <p className="total-cost">Total: {totalCostDisplay}</p>
      <div className="order-button">
        <button onClick={placeOrder}>{buttonText}</button>
      </div>
    </>
  )

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemsElements}
      {haveItems ? CheckOutElements : noItemInCart}
    </main>
  )
}

export default Cart
