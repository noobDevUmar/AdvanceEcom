import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useParams } from 'react-router-dom'
import { emptyCartAsync } from '../features/Cart/cartSlice'

import { resetOrder } from '../features/order/orderSlice'
import { selectUserInfo } from '../features/user/userSlice'
const OrderSuccessPage = () => {
  const params = useParams()
  const user = useSelector(selectUserInfo)
  const dispatch = useDispatch()
  useEffect(()=>{

    dispatch(emptyCartAsync(user.id))

    // Reset current Order or it will clash 
    dispatch(resetOrder())
  },[dispatch,user.id])
  return (
    <>
   {!params.id && <Navigate to='/' replace={true}/>}
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-base font-semibold text-green-600"> order Success Placed </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"> Order Number #{params.id} </h1>
      <p className="mt-6 text-base leading-7 text-gray-600"> Check Your Orders in My Account ► Orders </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Continue Shopping 
        </Link>
    
      </div>
    </div>
  </main>
  </>
  )
}

export default OrderSuccessPage