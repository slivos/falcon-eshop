import React from "react";
import Cart from "../components/Cart/Cart";
import { Helmet } from "react-helmet";

const title = "Nákupný košík";

const CartPage = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Cart />
    </>
  );
};

export default CartPage;
