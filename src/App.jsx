import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Header from "./components/Header"


function App() {

  return (
    <>
      <div>
       <Header/>
        <Routes>
          <Route path="/react-redux" element={<Home/>} />
          <Route path="/react-redux/cart" element={<Cart/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
