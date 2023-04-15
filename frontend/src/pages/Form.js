import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const finish = (e) => {
    e.preventDefault();
    let formDataThing = {
      name: name,
      email: email,
      phone: phone,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/5be3d955-b402-43d3-afce-728eab0a643b",
        formDataThing
      )
      .then((res) => {
        console.log(formDataThing);
        setName("");
        setEmail("");
        setPhone("");
        navigate('/ConfirmationPage')
      });

  };
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
        <form class="form">
        <input class="name" type="text" placeholder="Name" />
        <input class="email" type="email" placeholder="Email" />
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          class="number"
          placeholder="Phone Number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={phone}
        />
        </form>
        <script src="https://smtpjs.com/v3/smtp.js">
</script>

        <script>
        const form= document.querySelector('.form')
        function sendMessage(e){
          e.preventDefault();
                const name= document.querySelector('.name')
              email= document.querySelector('.email')
              message="You signed up with the data from the port - i can integrate the data later "ALI""

              Email.send({
              SecureToken:"bb1c565a-23df-4cf9-9c70-006d69d75cbc",
              To : email.value,
              From : "jamh885@gmail.com",
              Subject : "This is the subject",
              Body : message.value }).then(
            message = alert(message)
          );
        }

        form.addEventListener('submit', sendMessage)

        </script>


        <button onClick={finish}>Sign Up</button>
      </form>
      <Footer />
    </>
  );
}
