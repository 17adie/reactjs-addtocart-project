import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "../context"
import useHover from "../hooks/useHover"

const CartItem = ({ item }) => {
  // const [hovered, setHovered] = useState(false)
  const [hovered, ref] = useHover()
  const { removeFromCart } = useContext(Context)

  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

  return (
    <div className="cart-item">
      {/* <i className={iconClassName} onClick={() => removeFromCart(item.id)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}></i> */}
      {/* uses custom hook */}
      <i className={iconClassName} onClick={() => removeFromCart(item.id)} ref={ref}></i>

      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
}

export default CartItem
