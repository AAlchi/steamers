import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Form() {
  return (
    <>
      <form>
        <img
          src="https://static.wixstatic.com/media/09862f_88f06041bdb745eb9e79aed1dff86577~mv2.png/v1/fill/w_460,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo.png"
          alt="image"
        />
        <div className="watudoin">
          <h2>Volunteer</h2>
          <center>
            <h4>For a chance to help veterans</h4>
          </center>
        </div>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input
          type="tel"
          placeholder="Phone Number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />

        <button>Sign Up</button>
      </form>
      <Footer />
    </>
  );
}
