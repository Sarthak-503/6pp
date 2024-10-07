// import axios from "axios";
import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";


import { Link } from "react-router-dom";
import CartItem from "../components/cart-item";
const cartItems  = [
  {
    productId:"sasasasa",
    photo:"https://imgs.search.brave.com/4lV5TSvsv5QOLgolMi1u5Ada8zv8BuJNPyobK-sBxEE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy14dDVl/bjBxOGtmL2ltYWdl/cy9zdGVuY2lsLzUw/MHg2NTkvcHJvZHVj/dHMvMTE0MTYvMjcz/NzEvTUJQLTEzLU0x/N1ItU1BBQ0VfR1JB/WV9fMzc5NjAuMTY1/OTYyNTU1MS5qcGc_/Yz0y",
    name:"Macbook",
    price:323232,
    quantity:4,
    stock:10
}];
const subtotal = 4000;
const tax = Math.round(subtotal*0.18);
const shippingCharges = 200;
const discount = 400; 
const total = subtotal + tax + shippingCharges;
const Cart = () => {
  const [couponCode,setCouponCode] = useState<string>("");
  const [isValidCouponCode,setIsValidCouponCode] = useState<boolean>(false);

  useEffect(()=>{
    const timeOutId = setTimeout(()=>{
      if(Math.random()>0.5)setIsValidCouponCode(true);
      else {
        setIsValidCouponCode(false);
      }
    },1000)
    return () => {
      clearTimeout(timeOutId);
      setIsValidCouponCode(false);
    }
  },[couponCode])
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => (
            <CartItem
              key={idx}
              cartItem={i}
            />
          ))
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em className="red"> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>

        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;