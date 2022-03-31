import React from "react";
import "../projects";

function Projectentry(props) {
  return (
    <div id="first-project" class="section has-text-centered">
      <div>
        <img src={props.img} alt="" />
      </div>
      <div class="columns link-base">
        <div class="column">
          <a
            class="button is-rounded is-white live-color has-text-centered"
            href={props.github}
          >
            Github
          </a>
        </div>
        <div class="column">
          <a class="button is-rounded is-primary" href={props.url}>
            LiveSite
          </a>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h6>{props.type}</h6>
        </div>
        <div class="column">
          <h1>{props.name}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Projectentry;
