import React from 'react'
import './InstaImage.css';

function InstaImage() {
  return (
    <div>
        <section id="gallery" className="bg-gallery no-padding">
        <div className="container-fluid">
            <h3>Gallery</h3>
            <hr className="hr-h3s"/>
            <div className="row no-gutter gallery"> 
                
                <div className="col-sm-4 portfolio-item">
                    <div className="portfolio-link">
                        <img src="https://images.unsplash.com/photo-1529835299686-53bd13fb3ee1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-fluid
                        " alt=""/>    
                    </div>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <div className="portfolio-link">
                        <img src="https://images.unsplash.com/photo-1489089905289-5c91ae6e2544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <div className="portfolio-link">
                        <img src="https://res.cloudinary.com/dbte0ueti/image/upload/v1536952203/new/s3.jpg" className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <div className="portfolio-link">
                        <img src="https://res.cloudinary.com/dbte0ueti/image/upload/v1536952203/new/s4.jpg" className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <div className="portfolio-link">
                        <img src="https://res.cloudinary.com/dbte0ueti/image/upload/v1536952203/new/s5.jpg" className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <div className="portfolio-link">
                        <img src="https://res.cloudinary.com/dbte0ueti/image/upload/v1536952203/new/s6.jpg" className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
            <div className="row more-img">

                    <div className="to-gallery">
                        <h4>For more pictures visit us on</h4>
                        <div className="social-networks">
                            <a href="https://www.instagram.com"  className="instagram"><i className="fa fa-instagram"></i></a>
                            <a href="https://www.facebook.com" className="facebook"><i className="fa fa-facebook"></i></a>
                        </div>
                    </div>
                
            </div>

        </div>
    </section>
    </div>
  )
}

export default InstaImage