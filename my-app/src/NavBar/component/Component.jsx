import React from "react";
import { useState } from "react";
import "./Component.scss";
import { NavLink } from "react-router-dom";

const Component = (props) => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const inputShow = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSumbit = () => {
    console.log(details);
  };
  return (
    <div className="Component">
      <div class="container">
        <form action="">
          <p>{props.title}</p>
          <input
            type="email"
            name="email"
            onChange={inputShow}
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            name="password"
            onChange={inputShow}
            placeholder="Password"
          />
          <br />
          <input onClick={handleSumbit} type="button" value={props.title} />
          <br />
          <NavLink className="link_path" to={props.path}>
            {props.pathName}
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Component;
