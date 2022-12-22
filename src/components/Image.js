import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "../context"
import useHover from "../hooks/useHover"

const Image = ({ className, img }) => {
  // const [hovered, setHovered] = useState(false)
  const [hovered, ref] = useHover()
  const { toggleFavorite, cartItems, addToCart, removeFromCart } = useContext(Context)

  const heartIcon = () => {
    if (img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    } else if (hovered) {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    }
  }

  const cartIcon = () => {
    const isAlreadyInCart = cartItems.some((v) => v.id === img.id)

    if (isAlreadyInCart) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
    } else if (hovered) {
      return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    }
  }

  return (
    // <div className={`${className} image-container`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
    <div className={`${className} image-container`} ref={ref}>
      <img src={img.url} alt="" className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  )
}

// propTypes : to check the value properties

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
}

export default Image
