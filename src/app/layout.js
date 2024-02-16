import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Inter } from "next/font/google";
import "./style/globals.css";
import "./style/leftmenu.css";
import "./style/systyle.css";
import "./style/skstyle.css";
import "./style/filtercomponent.css";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});


export const metadata = {
  title: "Assets",
  description: "Welcome to Austin Asset Management",
  icon: [
    {
      media:'(prefer-color-theme: light)',
      url: '/public/assets/images/logo.svg',
      href: '/public/assets/images/logo.svg'
    }
  ]
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
