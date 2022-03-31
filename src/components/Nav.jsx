import React from "react";

function Nav() {
  return (
    <div>
      <nav class="navbar is-fixed-top">
        <div class="container">
          <div id="navMenu" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item my-name">
                Sa<br></br>White
              </a>
            </div>

            <div class="navbar-end">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Work</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
