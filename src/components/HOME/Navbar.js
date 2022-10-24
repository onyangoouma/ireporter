import React from "react";


const Navbar = () => {
  return (
    <div>
    <div className="navTop">
            <div className="navItem">
            <img src='../images/logo1.png' alt="" width={100} height={100} />
            </div>
            
            

            
            <div className="navItem">
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
