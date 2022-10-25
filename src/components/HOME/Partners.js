import React from "react";

import {Link} from "react-router-dom";
import styled from "styled-components";


const Partners = () => {
  const Grid = styled.div`
  display: flex;
  // grid-template-columns: repeat(1, 3fr);
  grid-template-columns: repeat(2, 3fr);
  grid-gap: 70px;
  width:50px;
  padding: 20px;
  
`



  return (
  // <div class="product" id="product">

  //   <img src="images/colapse.jpg" alt="" class="productImg"/>
  //   <div class="productDetails">
  //     <b>Cases Reported </b>
  //       <p>Collapsed Building in Nairobi</p>
  //       <p> class="productDesc"June 14, 2011: Two workers died after a six-storey building under construction collapsed in Nairobi January 2006. </p>   
  //        <Link  to="/signup" className="productButton"> create case </Link> 
  //   </div>
    
  //   <figure class="wp-caption">
  //     <img class="demo" src="images/colapse.jpg" alt="Image" />
  //     <figcaption className="wp-caption-text">Collapsed Building in Nairobi June 14, 2011: Two workers died after a six-storey building under construction collapsed in Nairobi January 2006.</figcaption>
    
  //   </figure>

<div>

<Grid className="imageplusnews">


 


    <img src="https://lh3.googleusercontent.com/TFcvndBxeggBwx_ewIGSbFKFmfaN0e_7mx4r--b7_Vr_ZUA0GZ-EmtHTAAG1q62Rpu-LPNlYWOv7f0ePB2mup_a2jFuqVhJIssbGx4Qf=s750" width={200} height={200}/>
  <div>
    <h3>Enziu River Bridge</h3>
    <p>I am calling upon the Kenyan government. </p>
    </div>
   



    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBLfwKG8u9t2N-vt8vkOicZGbp8UEzMepPSUX-4QScmUqBY69NL6xP1e2Qn2I0TRr5I0&usqp=CAU" width={200} height={200}/>
  <div>
    <h3>Bribery in Kenya</h3>
    Three people among them two police officers .
    </div>
   


    <img src="https://lh3.googleusercontent.com/TFcvndBxeggBwx_ewIGSbFKFmfaN0e_7mx4r--b7_Vr_ZUA0GZ-EmtHTAAG1q62Rpu-LPNlYWOv7f0ePB2mup_a2jFuqVhJIssbGx4Qf=s750" width={200} height={200}/>
  <div>
    <h3>Enziu River Bridge</h3>
    <p>I am calling upon the Kenyan government. </p>
    </div>
</Grid>
<Link  to="/signup" className="productButton"> create case </Link> 
{/* <Link to="/" className="nsButton">HOME</Link> */}



const Partners = () => {
  return (
  <div class="product" id="product">

    <img src="./HOME/colapse.jpg" alt="" class="productImg"/>
    <div class="productDetails">
      <b>Cases Reported </b>
        <p>Collapsed Building in Nairobi</p>
        <p> class="productDesc"June 14, 2011: Two workers died after a six-storey building under construction collapsed in Nairobi January 2006. </p>   
         <button class="productButton"> create case </button> 
    </div>
    
    <figure class="wp-caption">
      <img class="demo" src="images/colapse.jpg" alt="Image" />
      <figcaption class="wp-caption-text">Collapsed Building in Nairobi</figcaption>
     <button class="casebutton">crate case</button>
    </figure>


  </div> 
  );
};

export default Partners;