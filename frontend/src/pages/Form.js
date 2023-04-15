import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Form() {
  return (
    <>
      <form>
        <h2>Volunteer</h2>
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
