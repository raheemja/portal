import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import Protected from "../components/protected";
import Script from "next/script";

// Sore
import store from "../app/store";

// Libraries
import "../styles/bootstrap-grid.css";
import "../styles/bootstrap-views.css";
import "../styles/style.css";
import "../components/checkout/checkout.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="//fw-cdn.com/1747461/2608830.js" chat="true" />
      <Provider store={store}>
        <ChakraProvider>
          {Component?.restricted ? (
            <>
              <Protected />
              <Component {...pageProps} />
            </>
          ) : (
            <Component {...pageProps} />
          )}
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default MyApp;
