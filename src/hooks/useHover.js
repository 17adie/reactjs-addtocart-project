import { useState, useEffect, useRef } from "react"

const useHover = () => {
  const [hovered, setHovered] = useState(false)
  const ref = useRef()

  const enter = () => {
    setHovered(true)
  }
  const leave = () => {
    setHovered(false)
  }

  useEffect(() => {
    // error fixed by this line
    // https://bobbyhadz.com/blog/react-remove-event-listener
    const element = ref.current

    element.addEventListener("mouseenter", enter)
    element.addEventListener("mouseleave", leave)

    // cleanup function
    return () => {
      // element = have value
      // ref.current = null
      // to check: try to replace element to ref.current
      element.removeEventListener("mouseenter", enter)
      element.removeEventListener("mouseleave", leave)
    }
  }, [])

  return [hovered, ref]
}

export default useHover
