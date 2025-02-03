"use client";
import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/products'
import { getCartItems } from '../action/action';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { client } from '@/sanity/lib/client';
import Swal from 'sweetalert2';


function CheckOut() {

  const [cartItems , setCartItems] = useState<Product[]>([]);
  const [discount , setDiscount] = useState<number>(0);
  const [formValue , setFormValue] =useState({
    firstName : "",
    lastName : "",
    email : "",
    phone : "",
    adress : "",
    zipCode : "",
    city : "",
  })
  const [formErrors , setFormErrors] =useState({
    firstName : false,
    lastName : false,
    email : false,
    phone : false,
    adress : false,
    zipCode : false,
    city : false,
  })

  useEffect(()=>{
    setCartItems(getCartItems());
    const appliedDisount = localStorage.getItem("appliedDiscount")
    if(appliedDisount){
      setDiscount(Number(appliedDisount))
    }
  },[]);

  const subTotal =cartItems.reduce(
    (total , item) => total + item.price *  item.inventory, 0)

    const handleInputChange =(e : React.ChangeEvent<HTMLInputElement>) => {
      setFormValue({
        ...formValue,
        [e.target.id] : e.target.value
      })
    }

    const validateForm =  () => {
      const erorr = {
        firstName : !formValue.firstName,
        lastName : !formValue.lastName,
        email : !formValue.email,
        phone : !formValue.phone,
        adress : !formValue.adress,
        zipCode : !formValue.zipCode,
        city : !formValue.city
      };
      setFormErrors(erorr);
      return Object.values(erorr).every((error) => !error);
    }

    const handlePlaceOrder = async () => {


      const orderData = {
        _type : 'order',
        firstName : formValue.firstName,
        lastName : formValue.lastName,
        adress : formValue.adress,
        city : formValue.city,
        zipCode : formValue.zipCode,
        phone : formValue.phone,
        email :formValue.email,
        cartItems : cartItems.map(item => ({
          _type : 'reference',
          _ref : item._id
        })),
        // total : total,
        discount : discount,
        orderDate : new Date().toISOString
      };
      try {
        await client.create(orderData)
        localStorage.removeItem('appliedDiscount')
      }catch(error) {
        console.log("Error Creating Order" , error)
      }

      Swal.fire({
        title : "Processing You order...",
        text : "Please wait a moment",
        icon : "info",
        showCancelButton : true,
        confirmButtonColor : "#3085d6",
        cancelButtonColor : "#d33",
        confirmButtonText : "Proceed"
      }).then((result) => {
        if(result.isConfirmed) {
          if(validateForm()) {
            localStorage.removeItem('appliedDiscount');
            Swal.fire(
              "Success",
              "Your order has been successfully processed",
              "success"
            )
          }else{
            Swal.fire(
              "Error!",
              "Please fill all in the fields before proceeding.",
              "error"
            )
          }
        }
      })

      // if(validateForm()) {
      //   localStorage.removeItem('appliedDiscount')
      // }
    }
  
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='mt-6'>
        <div className='max-w-6xl max-auto px-4 sm:px-6 lg:px-8'>
          <nav className='flex items-center gap-2 py-4'>
            <Link href={"/cart"} className='text-[#666666] hover:text-balance transition text-sm'>cart :</Link>
            
            <span className='border-b-4'>Check Out Your Cart</span>
          </nav>
        </div>
      </div>

      <div className='max-w-6xl max-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='bg-white border rounded-lg p-6 space-y-6'>
            <h2 className='text-lg font-semibold mb-4'> 
              Order Summary
            </h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className='flex items-center gap-4 py-3 border-b'>
                  <div className='w-16 h-16 rounded overflow-hidden'>
                      {item.image && (
                        <Image
                        src={urlFor(item.image).url()}
                        alt='image'
                        width={50}
                        height={50}
                        className='object-cover w-full h-full'
                        />
                      )}
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-sm font-medium'>
                      {item.productName}
                    </h3>
                      <p className='text-xs text-gray-500'>Quantity : {item.inventory}</p>
                      <p>${item.price * item.inventory}</p>
                    
                  </div>

                </div>
              ))
            ):(
              <p className='text-xs font-medium'>No items in cart</p>
            )}
            <div className='text-right pt-4'>
              <p className='text-sm'>
                subTotal: <span>${subTotal}</span>
              </p>
              <p className='text-sm'>
                Discount: <span>${discount}</span>
              </p>
              <p className='text-lg font-semibold'>
                Total: ${subTotal.toFixed(2)}
              </p>
            </div>
          </div>

          <div>
            <h2>Billing Information</h2>
            <div>

              <div className='flex'>
              <div>
                <label htmlFor='firstName'>First Name </label>
                <input type="text"
                id='firstName'
                placeholder='Enter Your First Name'
                value={formValue.firstName}
                onChange={handleInputChange}
                className='border'
                />
                {formErrors.firstName && (
                  <p className='text-sm text-red-500'>
                    First Name is Required
                  </p>
                )}
              </div>
              <br />
              <div>
                <label htmlFor='lastName'>Last Name </label>
                <input type="text"
                id='lastName'
                placeholder='Enter Your Last Name'
                value={formValue.lastName}
                onChange={handleInputChange}
                className='border'
                />
                {formErrors.lastName && (
                  <p className='text-sm text-red-500'>
                    Last Name is Required
                  </p>
                )}
              </div>
              </div>
              <br />
              <div>
                <label htmlFor='adress'>Adress </label>
                <input type="text"
                id='adress'
                placeholder='Enter Your Adress'
                value={formValue.adress}
                onChange={handleInputChange}
                className='border'
                />
                {formErrors.adress && (
                  <p className='text-sm text-red-500'>
                    Adress is Required
                  </p>
                )}
              </div>
              <br />
              <div>
                <label htmlFor='email'>Email </label>
                <input type="text"
                id='email'
                placeholder='Enter Your Email Adress'
                value={formValue.email}
                onChange={handleInputChange}
                className='border'
                />
                {formErrors.adress && (
                  <p className='text-sm text-red-500'>
                    Email is Required
                  </p>
                )}
              </div>
              <br />
              <div>
                <label htmlFor='phone'>Phone </label>
                <input type="text"
                id='phone'
                placeholder='Enter Your Phone Number'
                value={formValue.phone}
                onChange={handleInputChange}
                className='border'
                />
                {formErrors.adress && (
                  <p className='text-sm text-red-500'>
                    Phone is Required
                  </p>
                )}
              </div>
              <br />
              <div>
                <label htmlFor='city'>City </label>
                <input type="text"
                id='city'
                placeholder='Enter Your City Name'
                value={formValue.city}
                onChange={handleInputChange}
                className='border'
                />
                {formErrors.adress && (
                  <p className='text-sm text-red-500'>
                    City is Required
                  </p>
                )}
              </div>
              <br />
              <div>
                <label htmlFor='zipCode'>Zip Code </label>
                <input type="text"
                id='zipCode'
                placeholder='Enter Your Zip Code Number'
                value={formValue.zipCode}
                onChange={handleInputChange}
                className='border'
                />
                {formErrors.adress && (
                  <p className='text-sm text-red-500'>
                    Zip Code is Required
                  </p>
                )}
              </div>
              <br />
              <button
              className='w-full h-12 bg-blue-500 hover:bg-blue-700 text-white'
               onClick={handlePlaceOrder}>
                Place Your Order
              </button>
            </div>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default CheckOut;
