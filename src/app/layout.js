import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jacob Fratti",
  description: "Professional Portfolio of Jacob Fratti",
};

  export default function RootLayout({ children }) {
    return (
      <html lang="en" >
        <body className={inter.className}>
          <div className="flex flex-col min-h-screen">
            <Navbar className="flex-shrink-0" />
            <div className="flex-grow">
              {children}
            </div>
            <Footer className="flex-shrink-0" />
          </div>
        </body>
      </html>
    );
  }
