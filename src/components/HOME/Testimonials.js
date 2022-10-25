import React from "react";
import {Link} from "react-router-dom";


const Testimonials = () => {
  return (
    <>
    <div className="nsItem">
            <h3 class="nsTitleSm">TESTIMONIALS</h3>
            <h2 className="nsTitle">Ever since i started using ireporter there has been development in our county.leaders are now doing their work to maintain a reputation </h2>
            <a href="#nav">
                <Link to="/" className="nsButton">HOME</Link>
            </a>
        </div>
     </> 
  );
};

export default Testimonials;