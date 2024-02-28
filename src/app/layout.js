import { Inter } from "next/font/google";
import "./style/globals.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "./style/common.css";


const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});


export const metadata = {
  title: "Welcome to Austin Asset Management",
  description: "Welcome to Austin Asset Management",
  icons:{
    icon: [
      {
        url: '/assets/images/logo.svg',
        // href: '/assets/images/logo.svg'
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </>
  );
}
