import React from "react";
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div>
    <div className="navTop">
            <div className="navItem">
            <img src='../HOME/logo1.png' alt="" width={100} height={100} />
            </div>
            
            

            
            <div className="navItem">
                <span className="limitedOffer">sign in </span>
            </div>
        </div>
        <div className="navBottom">
            <li><Link to="/" className="menuItem">HOME</Link></li>
            <li><Link to="/Slider" className="menuItem">Slider</Link></li>
            <li><Link to="/About"className="menuItem">ABOUT</Link></li>
            <li><Link to="/partners"className="menuItem">PARTNERS</Link></li>
            <li><Link to="/Cases" className="menuItem">CASES</Link></li>
            
        </div>
        </div>
  );
};

export default Navbar;