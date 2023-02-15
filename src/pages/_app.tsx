import "normalize.css";
import { AppProps } from "next/app";
import { LangContextProvider } from "context/LangContext";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "assets/common.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LangContextProvider>
      <Component {...pageProps} />
    </LangContextProvider>
  );
}
