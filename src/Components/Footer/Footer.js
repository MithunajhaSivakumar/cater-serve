import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div>
        <footer class="footer">
            <div class="container-footer">
                <div class="row-footer">
                    <div class="footer-col">
                        <h4>Site</h4>
                        <ul className='ul-footer'>
                            <li className="li-footer"><p className="footer-a">Home</p></li>
                            <li className="li-footer"><p className="footer-a">Caterings</p></li>
                            <li className="li-footer"><p className="footer-a">Contact</p></li>
                            <li className="li-footer"><p className="footer-a">Map</p></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Get Help</h4>
                        <ul className='ul-footer'>
                            <li className="li-footer"><p className="footer-a">Book Caterings</p></li>
                            <li className="li-footer"><p className="footer-a">Ratings</p></li>
                            <li className="li-footer"><p className="footer-a">Reviews</p></li>
                            <li className="li-footer"><p className="footer-a">Payment Options</p></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Address</h4>
                        <ul className="ul-footer">
                            <li className="li-footer"><p className='footer-a'>KEC - Perundurai,</p></li>
                            <li className="li-footer"><p className='footer-a'>Erode - 638011</p></li>
                            <li className="li-footer"><p className='footer-a'>Tamil Nadu</p></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Follow us</h4>
                        <div class="social-links-footer">
                            <p className="footer-a"><i class="fab fa-google"></i></p>
                            <p className="footer-a"><i class="fab fa-facebook-f"></i></p>
                            <p className="footer-a"><i class="fab fa-instagram"></i></p>
                            <p className="footer-a"><i class="fab fa-twitter"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer