import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom'  
import './UserLogin.css'
import * as Components from './Components';
import Navbar from '../../Components/NavBar/Navbar'

function UserLogin() {
    const [signIn, toggle] = React.useState(true);
      return(
        <div> 
            <Navbar />
        <div  className='login-body'>
          <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type='text' placeholder='Name' required/>
                      <Components.Input type='email' placeholder='Email' required/>
                      <Components.Input type='password' placeholder='Password' required/>
                      <Link className="nav-link" to={{pathname:"/"}}>
                            <Components.Button type='submit'>Sign Up</Components.Button>
                      </Link>
                      
                      <div>___________________________</div>
                      <Link className="nav-link" to={{pathname:"/register"}}>
                        <div className='vendor-login-area'>Are you a Catering Vendor?</div><button className='vendor-login'>Register</button>
                      </Link>
                       
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>Login</Components.Title>
                       <Components.Input type='email' placeholder='Email' required/>
                       <Components.Input type='password' placeholder='Password' required/>
                       <Components.Forget href='#'>Forget Password</Components.Forget>
                       <Link className="nav-link" to={{pathname:"/"}}>
                            <Components.Button>Login</Components.Button>
                      </Link>
                       
                       {/* <div>___________________________</div>
                       <div className='vendor-login-area'>Are you a Catering Vendor?</div><button className='vendor-login'>Vendor Login</button> */}
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello!</Components.Title>
                        <Components.Paragraph>
                            Create account to book catering centers with royal touch
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
        </div>
        </div>
      )
}

export default UserLogin