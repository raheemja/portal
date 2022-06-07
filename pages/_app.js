import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import Protected from "../components/protected";

// Sore
import store from "../app/store";

// Libraries
import "../styles/bootstrap-grid.css";
import "../styles/bootstrap-views.css";
import "../styles/style.css";

// Firebase App Object
import app from "../firebase/app";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
