import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { navLinks } from "../constants";

function Navbar() {
  return (
    <nav>
        <div>
            <Link to="/">
                <p>anatomy of a bike.</p>
            </Link>
            <Link to="/repair">
                <p>how to repair?</p>
            </Link>
            <Link to="/plantrip">
                <p>plan a trip!</p>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar;