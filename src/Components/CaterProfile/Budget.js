import React from 'react'
import './Budget.css'

function Budget() {
  return (
    <div>
        <div class="budget-main">
        <h1>Cost</h1>
        <ul class="cards">
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
              <img src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" alt=""/>
                <div class="price">Rs.300<span>per-plate</span></div>
                <h2 class="card_title">Veg</h2>
              </div>
              <div class="card_content">
                <div class="card_text">
                  <p>Served with your choice of varieties like: <i>Sweet</i> of your choice, <i>Breakfast Dishes</i> about 6 varieties, <i>Full Lunch</i> with Full Meals and Variety Rice, <i>Great Dinner</i> with 5 Varieties. Add your choice of protein for Rs.100 more. </p>
                </div>
              </div>
            </div>
          </li>
      
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
              <img src="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg" alt="a Reuben sandwich on wax paper. "/>
                <div class="price">Rs.500<span>per-plate</span></div>
                <h2 class="card_title">Non Veg</h2>
              </div>
              <div class="card_content">
                <div class="card_text">
                  <p>All great meals take time, but this one takes it to the next level! <i>BreakFast</i> with 3 Varieties, <i>Lunch</i> Full meals with 3 varieties of Gravy and Chilli, <i>Dinner</i> with 4 Varieties.
                  </p>
                  </div>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
              <img src="https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg" alt="A side view of a plate of figs and berries. "/>
                <div class="price">Rs.650<span>per-plate</span></div>
                <h2 class="card_title">Chinese Foods</h2>
              </div>
              <div class="card_content">
                <div class="card_text">
                  <p>Choose your drizzle: <i>Sandwich</i>, <i>Noodles</i>,<i>cherry-balsamic vinegar</i>, <i>local honey</i>, or <i>housemade chocolate sauce</i>. </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      
      <p class='back' >Back to Caterings</p>
    </div>
  )
}

export default Budget