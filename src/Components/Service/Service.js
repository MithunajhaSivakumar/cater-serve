import React from 'react'
import './Service.css'

function Service() {
  return (
    <div>
        <section className="bg-service bg-section" id="service">
        <div className="container text-center">
            
            <h1 className="container-h1">Service</h1>
            <br/><br/>
            <div className="row service-round-3">
                <div className="col-sm-4 text-center round">
                    <div className="service-round b-party">
                        <i className="fa fa-4x fa fa-birthday-cake sr-icons"></i>
                    </div>
                    <h4>Birthday party</h4>
                    <p>For more information please contact us.</p>
                </div>
                <div className="col-sm-4 text-center round">
                    <div className="service-round wedding">
                        <i className="fa fa-4x fa fa-heart sr-icons"></i>
                    </div>    
                    <h4>Wedding</h4>
                    <p>For more information please contact us</p>
                </div>
                <div className="col-sm-4 text-center round">
                    <div className="service-round b-dinner">
                        <i className="fa fa-4x fa fa-suitcase  sr-icons"></i>
                    </div>
                    <h4>Business dinner</h4>
                    <p>For more information please contact us.</p>
                </div>
            </div>
            
        </div>
    </section>
    </div>
  )
}

export default Service