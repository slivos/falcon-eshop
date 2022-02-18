import React from "react";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <>
      <h3>Niečo sa pokazilo ...</h3>
      Na oprave už pracujeme.
      <br />
      Akciu opakujte prosím neskôr.
      <br />
      <br />
      <Link to="/">Prejsť na úvodnú obrazovku.</Link>
    </>
  );
}

export default ErrorPage;
