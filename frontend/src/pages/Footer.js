import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      &copy; 2023 Steamers |{" "}
      <Link className="linkthelink" to="/More">
        More Information
      </Link>
    </div>
  );
}
