import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import './Registration.css'
import {Link} from 'react-router-dom'

function Registration() {
  return (
    <div className="registration">
    <Navbar/>
      <div className='body-register'>
      <div className="header-register">Catering Center Registration</div>
      <div className="container-register">
        <div className="subtitle">1. About Catering</div>

        <div className="section-register">
          <div className="left-register">
            <div className="label-register">Catering Name </div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="text" name="cateringName" id="cateringName" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">About Catering Center & Service</div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <textarea rows="5" cols="50" name='aboutCatering' id="aboutCatering" />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">Catering Image </div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="file" name="cateringImage" id="caterimgImage" required />
            </div>
          </div>
        </div>

        <div className="subtitle">2. Owners</div>

        <div className="section-register">
          <div className="left-register">
            <div className="label-register">Owner Name </div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="text" name="ownerName" id="ownerName" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">About Owner</div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <textarea rows="5" cols="50" name='aboutOwner' id="aboutOwner" />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">Image </div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="file" name="cateringImage" id="caterimgImage" required />
            </div>
          </div>
        </div>

        <div className="subtitle">3. Cost</div>

        <div className="section-register">
          <div className="left-register">
            <div className="label-register">Veg </div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="text" name="cateringName" id="cateringName" placeholder="cost-per-plate" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">Veg Special Image </div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="file" name="cateringImage" id="caterimgImage" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">About Veg Menu</div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <textarea rows="3" cols="50" name='aboutCatering' id="aboutCatering" />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">Non-Veg </div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="text" name="cateringName" id="cateringName" placeholder="cost-per-plate" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">Non-Veg Special Image </div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="file" name="cateringImage" id="caterimgImage" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">About Non-Veg Menu</div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <textarea rows="3" cols="50" name='aboutCatering' id="aboutCatering" />
            </div>
          </div>
        </div>

        <div className="subtitle">4. Menu List</div>
        
        <div className="section-register">
        <br></br>
        <h4>Breakfast</h4>

          <div className="left-register">
            <div className="label-register">Menu Name</div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="text" name="ownerName" id="ownerName" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">Menu Cost</div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="text" name="ownerName" id="ownerName" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">Menu Item Image </div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="file" name="cateringImage" id="caterimgImage" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">About Menu Item</div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <textarea rows="5" cols="50" name='aboutOwner' id="aboutOwner" />
            </div>
          </div>

          <div className="right-register-add">
            <div className="content-register-add">
              <span className="span-add"> Add new Menu Item </span>
              <i className='fa fa-plus icon-align'></i>
            </div>
          </div>


          <br></br><br></br>
        <h4>Lunch</h4>

          <div className="left-register">
            <div className="label-register">Menu Name</div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="text" name="ownerName" id="ownerName" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">Menu Cost</div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="text" name="ownerName" id="ownerName" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">Menu Item Image </div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="file" name="cateringImage" id="caterimgImage" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">About Menu Item</div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <textarea rows="5" cols="50" name='aboutOwner' id="aboutOwner" />
            </div>
          </div>

          <div className="right-register-add">
            <div className="content-register-add">
              <span className="span-add"> Add new Menu Item </span>
              <i className='fa fa-plus icon-align'></i>
            </div>
          </div>


          <br></br><br></br>
        <h4>Dinner</h4>

          <div className="left-register">
            <div className="label-register">Menu Name</div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="text" name="ownerName" id="ownerName" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">Menu Cost</div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="text" name="ownerName" id="ownerName" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">Menu Item Image </div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="file" name="cateringImage" id="caterimgImage" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">About Menu Item</div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <textarea rows="5" cols="50" name='aboutOwner' id="aboutOwner" />
            </div>
          </div>

          <div className="right-register-add">
            <div className="content-register-add">
              <span className="span-add"> Add new Menu Item </span>
              <i className='fa fa-plus icon-align'></i>
            </div>
          </div>

        </div>


        <br></br>
        <div className="subtitle">5. Contact Details</div>

        <div className="section-register">
          <div className="left-register">
            <div className="label-register">Catering Address </div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="text" name="ownerName" id="ownerName" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">Phone Number</div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="text" name="ownerName" id="ownerName" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">Email Address</div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="text" name="ownerName" id="ownerName" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">Other Branches </div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="text" name="ownerName" id="ownerName" required />
            </div>
          </div>

          <div className="left-register">
            <div className="label-register">Your Platform link</div>
          </div>
          <div className="right-register">
            <div className="content-register">
              <input className='input-register' type="text" name="ownerName" id="ownerName" required />
            </div>
          </div>

        </div>
        <br></br>

        <div className="subtitle">6. Agreement</div>
        <p>
          I declare that the above information given is true to the best of my knowledge. I'm willing to register in this E-Catering Service platform 
          and I'll keep tracking for notifications and response to the customers as soon as possible. I'm ensuring that I'll keep the profile updated.
        </p>
        <div className="left-register">
          <input className='input-register' type="checkbox" name="#" id="#" value="#" />{"       "}I Agree
        </div>
        <div>
          Signature(Account Owner) ____________________ Date ________________
        </div>
        <br></br>
        <Link className="nav-link" to={{pathname:"/"}}>
          <div className="btn-align"><button className="btn-reg">Register</button></div>
        </Link>
        
        
      </div>
      
    </div>
    </div>
    
  );
}

export default Registration;
