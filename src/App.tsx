import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { GlobalStyle } from "./components/particles/GlobalStyle";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./contexts/CartContext";
import { ThemeProvider } from "styled-components";
import { breakpoints } from "./components/particles/breakpoints";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={breakpoints}>
          <CartProvider>
            <GlobalStyle />
            <Navbar />
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <Routes />
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
