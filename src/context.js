import React, { createContext, useEffect, useState } from "react"

const Context = createContext()

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data))
  }, [])

  const toggleFavorite = (ImgId) => {
    const updatedArr = allPhotos.map((v) => {
      if (v.id === ImgId) {
        return { ...v, isFavorite: !v.isFavorite }
      }
      return v
    })
    setAllPhotos(updatedArr)
  }

  const addToCart = (newItem) => {
    setCartItems((prevItems) => [...prevItems, newItem])
  }

  const removeFromCart = (ImgId) => {
    setCartItems((prevItems) => prevItems.filter((v) => v.id !== ImgId))
  }

  const emptyCart = () => {
    setCartItems([])
  }

  return <Context.Provider value={{ allPhotos, toggleFavorite, cartItems, addToCart, removeFromCart, emptyCart }}>{children}</Context.Provider>
}

export { ContextProvider, Context }
