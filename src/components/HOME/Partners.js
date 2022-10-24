import React from "react";


const Partners = () => {
  return (
  <div class="product" id="product">

    <img src="./HOME/colapse.jpg" alt="" class="productImg"/>
    <div class="productDetails">
      <b>Cases Reported </b>
        <p>Collapsed Building in Nairobi</p>
        <p> class="productDesc"June 14, 2011: Two workers died after a six-storey building under construction collapsed in Nairobi January 2006. </p>   
         <button className="productButton"> create case </button> 
    </div>
    
    <figure class="wp-caption">
      <img class="demo" src="images/colapse.jpg" alt="Image" />
      <figcaption className="wp-caption-text">Collapsed Building in Nairobi</figcaption>
    
    </figure>

  </div> 
  );
};

export default Partners;