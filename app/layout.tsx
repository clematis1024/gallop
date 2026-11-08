import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/nav/navbar";

export const metadata: Metadata = {
  title: "Bun + Next.js Starter",
  description: "Powered by Bun",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;