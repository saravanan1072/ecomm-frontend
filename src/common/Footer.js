import React from "react";
import master from "../images/master.svg";
import paypal from "../images/Paypal.svg";
import visa from "../images/visa.svg";
import wester from "../images/Western.svg";
export default function Footer() {
  return (
    <>
    <hr className="hr"/>
      <div className="f-flex">
        <div className="f-child"> <b>SHOPPING</b>
          <p>
            Online shopping is a form of electronic commerce which allows
            consumers to directly buy goods or services from a seller over the
            Internet using a web.
          </p>
        </div>

        <div className="f-child"> <b>FOLLOW US</b>
        <p>To get more relevent new products follow our sites to get an updates.</p>
        <p><i className="fa-brands fa-facebook"></i> <i className="fa-brands fa-twitter"></i></p>
        
        </div>
        <div className="f-child"><b>CONTACT US</b>
        <p>Shopping: address @building 124 Call us now: 0123-456-789 Email: support@whatever.com</p>
        </div>
      </div>

      <hr className="hr"/>

      <div className="f-flex">
               <div> <b>Get to know Us</b>
                    <p>About Us </p>
                    <p>Careers </p>
                    <p>Press Realise </p>
                    <p>Amazon Science</p>
               </div>
               <div> <b>Connect With Us</b>
                    <p>Facebook </p>
                    <p>Instagram </p>
                    <p>Twitter</p>
               </div>
               <div> <b>Extras</b>
                    <p>Sell on ishop </p>
                    <p>Sell under ishop accelerator </p>
                    <p>Protect and build tour brand </p>
                    <p>Ishop global selling</p>
               </div>
               <div> <b>Let Us Help You</b>
                    <p>COVIND-19 </p>
                    <p>Your Account </p>
                    <p>Return Center</p>
                    <p>100% Purchase Protcction</p>
               </div>
             
</div>
<hr className="hr"/>

<div className="payment">
  <img src={master} alt="master"/>
  <img src={visa} alt="master"/>
  <img src={wester} alt="master"/>
  <img src={paypal} alt="master"/>
</div>
    </>
  );
}
