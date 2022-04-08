import React from "react";

function Nav() {
  return (
    <div>
      <nav class="navbar is-fixed-top">
        <div class="container">
          <div id="navMenu" class="navbar-menu">
            <div class="navbar-start">
              <a href="#begin" class="navbar-item my-name">
                Sage<br></br>White
              </a>
            </div>

            <div class="navbar-end">
              <a href="#current-about" class="navbar-item">
                About
              </a>
              <a href="#first-project" class="navbar-item">
                Work
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
