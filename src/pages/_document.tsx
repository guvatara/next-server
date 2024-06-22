import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="fixed-navbar">
            <div className="site">
                <Main />
                <NextScript />
            </div>

            </body>
        </Html>
    );
}