import type { AppProps } from "next/app";

import { NextPageWithLayout } from "@/pages/page";
import "@/styles/global.css";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || (page => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default App;
