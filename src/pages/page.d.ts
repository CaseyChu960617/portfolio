import { NextPage } from "next";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => any;
  Layout?: any;
};
