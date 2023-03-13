import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navebar from "../components/Navebar";

export default function Home() {
  return (
    <div>
      <div className="conatiner-fluid">
        <div className="bg-img">
          <Navebar />
          <div className="tag">Beauty and cleanliness, all in one place.</div>
          <div className="container w-75 h-25 chooseimage rounded" style={{"marginTop":"100px"}}>
            <div className="card-group m-5">
              <div className="card m-5 bgcolor card text-bg-dark rounded-3">
              <Link to="./Man-Salon"><img src={require('./man-getting-his-beard-shaved-with-razor.jpg')} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                  <h5 className="card-title">Salons for mens and womens</h5>
                </div>
              </div>
              <div className="card m-5 bgcolor card text-bg-dark rounded-3">
               <Link to="./House-Workers"> <img src={require('./smiling-young-cleaning-guy-wearing-uniform-cap-holding-bucket-cleaning-tools-with-mop.jpg')} className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                  <h5 className="card-title fs-3" style={{"textAlign":"center"}}>House Workers</h5>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="container-fluid " style={{"marginTop":"250px"}}><Footer/></div>
     
    </div>
  );
}
