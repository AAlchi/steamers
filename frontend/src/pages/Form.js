import React from "react";

export default function Form() {
  return (
    <div>
      <h2>Form</h2>
      <input type="text" />
      <input type="email" />
      <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
    </div>
  );
}
