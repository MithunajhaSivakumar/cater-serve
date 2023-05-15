import React from 'react'
import './MainCatering.css'


function MainCatering() {
  return (
    <div>
        <section className="bg-staff" id="staff">
        <div className="container-fluid">
            <h3>High Rating Catering Staffs</h3>
            <hr className="hr-h3s"/> 
                <div className="row text-center thumbnail-row">
                    <div className="col-sm-3">
                        <div className="staff">
                            <img className="chef-img-show" src="https://res.cloudinary.com/dbte0ueti/image/upload/v1536952566/new/manager.jpg" alt="chef-img" />
                            <h5 className="">John Johnson</h5>
                            <h6>Manager</h6>    
                        </div>
                     </div>
                     <div className="col-sm-3">  
                        <div className="staff">
                            <img className="chef-img-show" src="https://res.cloudinary.com/dbte0ueti/image/upload/v1536952565/new/chef1.jpg" alt="chef-img" />
                            <h5 className="">Anna Schmidt</h5>
                            <h6>Chef</h6>         
                        </div>
                    </div>  
                    <div className="col-sm-3">  
                        <div className="staff">
                            <img className="chef-img-show" src="https://res.cloudinary.com/dbte0ueti/image/upload/v1536952566/new/chef3.jpg" alt="chef-img" />
                            <h5 className="">Ivan Gonzales</h5>
                            <h6>Chef</h6>
                        </div>
                    </div>
                      <div className="col-sm-3">  
                        <div className="staff">
                            <img className="chef-img-show" src="https://res.cloudinary.com/dbte0ueti/image/upload/v1536952566/new/chef2.jpg" alt="chef-img" />
                            <h5 className="">Joseph Martinez</h5>
                            <h6>Chef</h6>
                        </div>
                    </div>
                </div>
        </div>
    </section>
    </div>
  )
}

export default MainCatering