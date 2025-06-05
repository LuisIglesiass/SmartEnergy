import localFont from "next/font/local";
import "./globals.css";
import { CO2Provider } from "./context/CO2Context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Smart Energy",
  description: "Your o2 tracker",
  icons: {
    icon: "../favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <CO2Provider>
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </CO2Provider>
  );
}
