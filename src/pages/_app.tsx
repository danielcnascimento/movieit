import GlobalStyle from "../styles/globals";
import { AppProps } from "next/app";

import { Provider } from "react-redux";
import { store } from "../store/reducers";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <GlobalStyle />
      </Provider>
    </>
  );
}

export default MyApp;
