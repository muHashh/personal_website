import React, { useState, useEffect, useCallback } from "react";

const Navbar = (props) => {

  const [isTop, setIsTop] = useState(true);
  const [isNavbarToggled, setIsNavbarToggled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const istop = window.scrollY < 20;
      if (istop !== isTop) {
        setIsTop(istop);
      }
    });
  }, [isTop]);

  const sendRequest = useCallback(() => {
    setIsNavbarToggled(true); // Once navbar has been opened, it's always transparent
  }, [])

  return (

    // Navbar
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-dark
        ${(isNavbarToggled || !isTop) ? "transparent" : "bg-transparent"} 
      `}
    >
      <a className="navbar-brand" href="/">
        Home
      </a>

      {/* Hamburger Menu toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={sendRequest}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible content */}
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="nav navbar-nav mr-auto mt-2 mt-lg-0">
          <li 
            className="nav-item"
            data-toggle="collapse"
            data-target=".navbar-collapse.show">
              <a 
                className="nav-link lead"
                href="#projects"
                onClick={() => {
                  const anchor = document.querySelector('#projects');
                  anchor.scrollIntoView({ behavior: 'smooth',});
                }}>
                {/* <b>Projects</b> */}
              </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;