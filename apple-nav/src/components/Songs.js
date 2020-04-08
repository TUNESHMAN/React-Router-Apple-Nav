import React from "react";

function Songs({ match }) {
 return (
    <div>
      <h1>{match.params.id}</h1>
    </div>
  );
}

export default Songs;
