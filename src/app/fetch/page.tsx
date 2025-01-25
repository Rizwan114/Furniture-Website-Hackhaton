// 'use client';

// import { useEffect, useState } from "react";
// import { Product } from "../../../types/products";
// import { client } from "@/sanity/lib/client";
// import { allProducts } from "@/sanity/lib/queries";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import Link from "next/link";
// import Header from "../components/Header-1/page";

// export default function Home() {

//     const [product , setProduct] = useState<Product[]>([])
  
//     useEffect(()=>{
//       async function fetchproduct (){
//         const fetchedProduct : Product[] = await client.fetch(allProducts)
//         setProduct(fetchedProduct)
//       }
//       fetchproduct()
//     },[])
  
//     return (
      
//      <div className="max-w-6xl mx-auto px-4 py-8">
//       <Header/>
//       <h1 className="text-2xl font-bold mt-7 mb-6 text-center">Our Latest Product</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {
//             // product.map((product)=>(
//             //   <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
//             //     <Link href={`/product/${product.slug.current}`}>
//             //     {/* <Link href={`/product/`}> */}
//             //     {product.productName}
//             //     {product.image && (
//             //       <Image
//             //       src={urlFor(product.image).url()}
//             //       alt="image"
//             //       width={200}
//             //       height={200}
//             //       className="w-full h-48 object-cover rounded-md"
//             //       />
//             //     )}
//             //     {product.price}
//             //     </Link>
//             //   </div>
//             // ))


//             product.map((product) => (
//               <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg">
//                 {product.slug?.current ? (
//                   <Link href={`/product/${product.slug.current}`}>
//                     {product.productName}
//                   </Link>
//                 ) : (
//                   <span>{product.productName}</span>
//                 )}
//                 {product.image && (
//                   <Image
//                   src={urlFor(product.image).url()}
//                   alt="image"
//                   width={200}
//                   height={200}
//                   className="w-full h-48 object-cover rounded-md"
//                   />
//                 )}
//               </div>
//             ))
            



//           }
//           </div>

//         </div>
//   );
// }








import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header-1/page";

export const revalidate = 0; // Optionally disable caching for always fresh server-rendered data

async function fetchProducts(): Promise<Product[]> {
    try {
        const products = await client.fetch(allProducts);
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

export default async function Home() {
    const products = await fetchProducts();

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <Header />
            <h1 className="text-2xl font-bold mt-7 mb-6 text-center">
                Our Latest Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
                    >
                        {product.slug?.current ? (
                            <Link href={`/product/${product.slug.current}`}>
                                {product.productName}
                            </Link>
                        ) : (
                            <span className="font-medium text-lg">
                                {product.productName}
                            </span>
                        )}
                        {product.image && (
                            <Image
                                src={urlFor(product.image).url()}
                                alt={"img"}
                                width={200}
                                height={200}
                                className="w-full h-48 object-cover rounded-md mt-2"
                            />
                        )}
                        <p className="mt-2 text-sm font-semibold">
                            ${product.price}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
