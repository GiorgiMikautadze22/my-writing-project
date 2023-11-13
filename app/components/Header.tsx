import React from "react";
import "./style.css";
import AddIcon from "../../public/add-sign.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="header">
      <div className="navigation">
        <button>Home</button>
        <button>Notes</button>
      </div>
      <div className="name-logo">
        <h1>Creator M</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/UNESCO_white_logo.svg/2560px-UNESCO_white_logo.svg.png"
          alt="Logo"
        />
      </div>
      <div className="add-listing-btn">
        <button>
          <span>Add new listing</span>
          <Image src={AddIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
