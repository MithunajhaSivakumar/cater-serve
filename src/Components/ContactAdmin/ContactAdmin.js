import React from 'react'
import './ContactAdmin.css'


function ContactAdmin() {
  return (
    <div>
        <section class="bg-contact bg-section" id="contact">
            <div class="container-fluid">
                <h1 class="container-h1">Contact us</h1>
                <div class="row">
                    <div class="col-md-6 col-sm-6 contact-left">
                        <div class="left-box">
                            <address class="contact">
                                <span class="span-contact">Call:</span>
                                <br/>
                                +91 9876543210
                                <br/> 
                                <span class="span-contact">Email:</span> 
                                <br/>
                                startechiee@gmail.com
                                <br/>
                                <span class="span-contact">Visit:</span>  
                                <br/>
                                Kec Perundurai Erode
                                <br/>
                                Tamil Nadu
                                <br/>
                                Erode
                            </address>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6 contact-right" >
                            
                            <form novalidate action="mailto:anttnew@gmmmail.com" name="frm" method="post">
                                 <div class="form-group has-feedback">
                                    <label class="sr-only">First name:</label>
                                    <input type="text" name="name" class="form-control" placeholder="First name" required />
                                    
                                </div>
                                 <div class="form-group has-feedback">
                                    <label class="sr-only">Last name:</label>
                                    <input type="text" name="surname" class="form-control" placeholder="Last name" required />
                                    
                                </div>
                                <div class="form-group has-feedback">
                                    <label class="sr-only">Email:</label>
                                    <input type="email" name="email" class="form-control"  placeholder="Email" required />
                                    
                                </div>
                                <div class="form-group">
                                    <label class="sr-only" name="comment" for="comment">Comment:</label>
                                    <textarea class="form-control" rows="5" id="comment" placeholder="Description"></textarea>
                                </div>
                                <div class="contact-buttons pull-left">
                                    <input type="submit" className="send-btn" name="submit"  value="Send" />
                                    <input type="reset" className="reset-btn" value="Reset" />
                                </div>
                            </form>
                            
                </div>
            </div>

            <div class="row">
            
            </div>
        </div>    
    </section>
    </div>
  )
}

export default ContactAdmin