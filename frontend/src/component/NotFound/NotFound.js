import React, { Fragment } from "react";
import "./NotFound.css";
const NotFound = () => {
  return (
    <Fragment>
      <div className="not-found">
        <div>
          <img src="./404.png" alt="Mechanic" />
        </div>
        <div>
          <p>
            Page not found | Broken <span>link</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
