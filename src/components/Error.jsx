import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>404 ERROR</h1>
      <h3>Page not Found ...</h3>
      <p>
        Go to the
        <Link
          to="/"
          style={{
            marginLeft: "1rem",
            fontSize: "2rem",
            color: "red",
          }}
        >
          Home
        </Link>
      </p>
    </div>
  );
};

export default Error;
