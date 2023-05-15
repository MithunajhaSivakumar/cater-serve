import React from 'react'
import './OrderList.css'

function OrderList(props) {
  return (
    <div className='orders'>
        <div class="order-list">
            <h4>Order List</h4>
          
          <form>
            <input type="text" placeholder="Search by Catering"/>
            <input type="phone" placeholder="Search by Customer"/>
            <input type="submit" value="Search"/>
          </form>
          <br/>

          <div class="order-main">
            <span class="book-id">
              <span>Booked Id</span>
            </span>
            <span class="catering-name">
              <span>Catering</span>
            </span>
            <span class="customer-name">
              <span>Customer</span>
            </span>
            <span class="order-date">
              <span>Ordered Date</span>
            </span>
            <span class="booked-date">
              <span>Booked Date</span>
            </span>
            <span class="status">
              <span>Order Status</span>
            </span>
          </div>
          <div className='items'>
            <div class="item">
              <span>1</span>
              <span>Star Catering</span>
              <span>Pavithra</span>
              <span>10.10.2022</span>
              <span>30.10.2022</span>
              <button>Confirmed</button>
            </div>

            <div class="item">
              <span>2</span>
              <span>Star Catering</span>
              <span>Pavithra</span>
              <span>10.10.2022</span>
              <span>30.10.2022</span>
              <button>Confirmed</button>
            </div>

            <div class="item">
              <span>3</span>
              <span>Star Catering</span>
              <span>Pavithra</span>
              <span>10.10.2022</span>
              <span>30.10.2022</span>
              <button>Confirmed</button>
            </div>

              <div class="item">
              <span>4</span>
              <span>Star Catering</span>
              <span>Pavithra</span>
              <span>10.10.2022</span>
              <span>30.10.2022</span>
              <button>Confirmed</button>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default OrderList