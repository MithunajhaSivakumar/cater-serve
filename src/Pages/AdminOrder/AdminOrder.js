import React from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import OrderList from '../../Components/OrderList/OrderList'
import './AdminOrder.css'
function AdminOrder() {
  return (
    <div>
      <Navbar />
      <OrderList />
    </div>
  )
}

export default AdminOrder