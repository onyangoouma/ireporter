import React from "react";

import {Link} from "react-router-dom";



const Navbar = () => {
  return (
    <div>
    <div className="navTop">
            <div className="navItem">

            <img src='../images/mkono.png' alt="" width={100} height={100} />

            <img src='../images/logo1.png' alt="" width={100} height={100} />

            </div>
            
            

            
            <div className="navItem">

                <Link to="/signin" className="limitedOffer">SIGN IN </Link>
            </div>
        </div>
        <div className="navBottom">
            <li><Link to="/" className="menuItem">HOME</Link></li>
            <li><Link to="/About"className="menuItem">ABOUT</Link></li>
            <li><Link to="/About" className="menuItem">PARTNERS</Link></li>
            <li><Link to="/testimonials" className="menuItem">TESTIMONIALS</Link></li>
            <li><Link to="/partners"className="menuItem">CASES</Link></li>
          

                <span className="limitedOffer">sign in </span>
            </div>
        </div>
        <div className="navBottom">
            <h3 className="menuItem">HOME</h3>
            <h3 className="menuItem">ABOUT</h3>
            <h3 className="menuItem">TESTIMONIALS</h3>
            <h3 className="menuItem">CASES</h3>

            
        </div>
        </div>
  );
};


export default Navbar;


