import React from "react";

const MyApp: React.FC<{ Component: React.FC; pageProps: any }> = ({
  Component,
  pageProps,
}) => {
  return <Component {...pageProps} />;
};

export default MyApp;
