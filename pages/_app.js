import React, { useMemo, useReducer } from "react";
import Layout from "../components/layout";
import { checkoutReducer, initialState } from "../state/checkoutReducer";
import { CheckOutContext } from "../state/CheckOutContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <CheckOutContext.Provider value={contextValue}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CheckOutContext.Provider>
  );
}

export default MyApp;
