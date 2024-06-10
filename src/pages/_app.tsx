import "@/styles/global.css";
import type { AppProps } from "next/app";
import { NextPageWithLayout } from "./page";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || (page => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default App;
