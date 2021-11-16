import React from "react";

import type { AppProps } from "next/app";

import "@react-native-tailwindcss/tailwind/react-native-tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
