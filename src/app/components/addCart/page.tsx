"use client";

import { Product } from "../../../../types/products";
import { addToCart } from "@/app/action/action";
import Swal from "sweetalert2";

export default function AddToCartButton({ product }: { product: Product }) {
  const handleAddToCart = () => {
    addToCart(product);
    Swal.fire({
        position : "top-right",
        icon : "success",
        title : `${product.productName} add to cart`,
        showConfirmButton : false,
        timer : 1000
    })
  };

  return (
    <button
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg
      hover:scale-110 transition-transform duration-300 ease-in-out"
      onClick={handleAddToCart}
    >
      ADD TO CART
    </button>
  );
}



// import { Product } from "../../../../types/products";
// import { addToCart } from "@/app/action/action";
// import Swal from "sweetalert2";

// export default function AddToCartButton({ product }: { product: Product }) {
//   const handleAddToCart = () => {
//     addToCart(product);
//     Swal.fire({
//       position: "top-right",
//       icon: "success",
//       title: `${product.productName} added to cart`,
//       showConfirmButton: false,
//       timer: 1000,
//     });
//   };

//   return (
//     <button
//       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out"
//       onClick={handleAddToCart}
//     >
//       ADD TO CART
//     </button>
//   );
// }