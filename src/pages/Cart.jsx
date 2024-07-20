import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import CartTile from "../components/CartTile";


const Cart = () => {

  const [totalCart, setTotalCart] = useState(0);

  const {cart} = useSelector(state => state);

  useEffect(()=> {
  setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])
  console.log(cart, totalCart)
  return (
    <>
    {cart && cart.length ? <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
      <div className="flex flex-col justify-center items-center p-3">
        {cart.map((cartItem)=> <div key={cartItem?.id}><CartTile cartItem={cartItem}/></div>)}

      </div>
      <div>
        <div className="flex flex-col justify-center items-end p-5 spac-y-5 mt-14">
        <h1 className="font-bold text-lg text-red-800">Your Cart Summary</h1>
        <p>
          <span className="text-gray-800 font-bold">Total Item</span>
          <span>: {cart.length}</span>
        </p>
        <p>
          <span className="text-gray-800 font-bold">Total Amount</span>
          <span>: ${totalCart}</span>
        </p>
        </div>
      </div>
    </div> : 
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="font-bold text-xl mb-2 text-red-600">Your Cart is Empty</h1>
      <Link to={'/react-redux'}>
      <button className="font-bold text-xl mb-2 bg-slate-800 rounded-xl p-3 w-[20rem] text-white">Shop Now</button></Link>
      </div>
      } 
    </>
  )
}

export default Cart