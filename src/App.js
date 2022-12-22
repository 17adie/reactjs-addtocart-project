import { Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import NoMatch from "./pages/NoMatch"

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Photos />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
