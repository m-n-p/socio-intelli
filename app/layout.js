import "./globals.css";
import { Roboto } from "next/font/google";

import App from "./app";
import Head from "next/head";

const roboto = Roboto({ weight: ["400", "500", "700"], preload: false });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head></Head>
      <body className={roboto.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}
