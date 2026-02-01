import "./globals.css";
import "../tokens/index.css";
import Header from "./components/Header";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        <main className="pagePadding">{children}</main>
      </body>
    </html>
  );
}


