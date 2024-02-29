import { Link, useRouteError } from "react-router-dom";

import ErrorStyle from "./ErrorStyle.js";

export const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <ErrorStyle>
        <div>
          <h3>Page not found</h3>
          <p>Can not find the page you are looking for.</p>
          <Link to="/debtbook/">Back home</Link>
        </div>
      </ErrorStyle>
    );
  }

  return (
    <ErrorStyle>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </ErrorStyle>
  );
};
