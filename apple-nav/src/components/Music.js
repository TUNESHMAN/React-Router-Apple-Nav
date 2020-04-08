import React from "react";
import { Route, Link } from "react-router-dom";

function Music({ match }) {

  return (
    <div>
      <ul>
        <Link to={`${match.url}/blues`}>
          <li>Blues</li>
        </Link>
        <Link to={`${match.url}/rap`}>
          <li>Rap</li>
        </Link>
        <Link to={`${match.url}/country`}>
          <li>Country</li>
        </Link>
        <Link to={`${match.url}/pop`}>
          <li>Pop</li>
        </Link>
      </ul>
    </div>
  );
}

export default Music;
