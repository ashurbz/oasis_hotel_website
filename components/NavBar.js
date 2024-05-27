import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Link href="./about">About Page</Link>
      <Link href="./cabin">Cabin Page</Link>
      <Link href="./">Home Page</Link>
      <Link href="./account">Account Page</Link>
    </div>
  );
};

export default NavBar;
