import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

// Sore
import store from "../app/store";

// Libraries
import "../styles/bootstrap-grid.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default MyApp;
