import React, { useEffect, useState } from "react";
import { data } from "./data";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Admin() {
  const [datas, setDatas] = useState([{}]);
  axios
    .get("https://sheet.best/api/sheets/ac21aa44-68ac-409c-9f1f-9cfc60262fe9")
    .then((res) => setDatas(res.data));

  return (
    <div className="admin">
      <h2 className="bruh">Admin</h2>
      <Link to="/" className="bruh">
        Go Back Home
      </Link>
      <div className="amount itemThing other">
        You have {datas.length} people(s) signed up
      </div>
      <div className="users itemThing other">
        {datas.map((people) => (
          <div>
            User:
            <div>{people.name}</div>
            <div>{people.email}</div>
            <div>{people.phone}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
