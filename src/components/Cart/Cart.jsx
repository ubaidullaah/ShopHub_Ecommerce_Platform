import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../App"; 
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalBill = cart.reduce((total, product) => total + product.price, 0);

  const handlePlaceOrder = () => {
    alert("Order placed!");
    clearCart(); // Clear the cart after placing the order
    navigate("/"); // Redirect to home 
  };

  const handleClearCart = () => {
    toast.success("Your cart has been cleared!", {
      position: "top-right",
      autoClose: 3000, // Close after 3 seconds
      onClose: clearCart, // Clear the cart when the toast closes
    });
  };

  const handleRemoveFromCart = (item) => {
    toast.success(
      <div>
        <p>
          <strong>{item.title}</strong> has been removed from your cart!
        </p>
        <button
          onClick={() => removeFromCart(item.id)} // Proceed to remove item
          className="mt-2 bg-secondary text-white py-1 px-2 rounded-md hover:bg-primary"
        >
          Ok
        </button>
      </div>,
      {
        position: "top-right",
        autoClose: 5000, // Close after 5 seconds
        onClose: () => removeFromCart(item.id), // Remove item when toast closes
      }
    );
  };

  return (
    <div className="container mx-auto mt-14 mb-12">
      <ToastContainer /> {/* Render toast notifications */}
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500">Your cart is empty.</p>
          <button
            onClick={() => navigate('/products')}
            className="mt-4 bg-primary text-white py-1 px-3 rounded-md"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item)} // Use the new removal handler
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h2 className="font-semibold">Total: ${totalBill.toFixed(2)}</h2>
            <div className="flex mt-2 space-x-2">
              <button
                onClick={handlePlaceOrder}
                className="bg-primary text-white py-1 px-3 rounded-md"
              >
                Place Order
              </button>
              <button
                onClick={() => navigate('/products')}
                className="bg-secondary text-white py-1 px-3 rounded-md"
              >
                Add More Items
              </button>
              <button
                onClick={handleClearCart}
                className="bg-red-500 text-white py-1 px-3 rounded-md"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
