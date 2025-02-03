"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../action/action";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  /////////////this//////////////////
  const router = useRouter();
  //  function Page() {
  //   const router = useRouter()
  //   // ...
  //   router.push('/dashboard')
  
  //  }
   /////////this//////////////

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully placed.", "success");
        router.push("/checkout")
        setCartItems([]);
       
      }
      
    });
    
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between border p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center space-x-4">
                <Image
                    src={item.image ? urlFor(item.image).url() : "/placeholder-image.png"}
                    className="w-16 h-16 object-cover rounded-lg"
                    alt={item.productName || "Product image"}
                    width={500}
                    height={500}
                    onError={(e) => {
                    e.currentTarget.src = "/placeholder-image.png";
                    }}
                />

                  <div>
                    <h2 className="text-lg font-medium">{item.productName}</h2>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{item.inventory}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-bold">Cart Summary</h2>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Items:</span>
              <span>{cartItems.reduce((total, item) => total + item.inventory, 0)}</span>
            </div>
            <div className="flex justify-between font-medium text-lg">
              <span>Total Price:</span>
              <span>${calculatedTotal().toFixed(2)}</span>
            </div>
            <button
              onClick={handleProceed}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:shadow-lg hover:scale-105 transition-transform"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
