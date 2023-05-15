import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div>
        <section id="contact">
      <div class="contact-container container">
        <div class="contact-img">
          <img src="https://i.postimg.cc/1XvYM67V/restraunt2.jpg" alt="" />
        </div>

        <div class="form-container">
          <h2>Book us Order</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="E-Mail" />
          <textarea
            cols="30"
            rows="6"
            placeholder="Date of Order and Count of members"
          ></textarea>
          <p href="#" class="btn btn-primary">Submit</p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact