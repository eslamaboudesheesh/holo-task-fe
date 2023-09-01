import { useRouteError } from "react-router-dom";

type errorType = { statusText: string; message: string };

const ErrorPage = () => {
  const error = useRouteError() as errorType;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
