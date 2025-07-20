import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>
        Cart Total: {cart.length} item{cart.length !== 1 ? "s" : ""}
      </p>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <p key={item.id}>
              {item.name} is in your cart
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;