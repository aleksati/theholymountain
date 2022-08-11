import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        {/* The Portal for my modals */}
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  );
}
