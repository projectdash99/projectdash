import "./globals.css";
import { Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";

const instrumentSerif = Instrument_Serif({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-serif" 
});

const absans = localFont({ 
  src: "../public/fonts/Absans-Regular.woff2",
  variable: "--font-sans",
  display: "swap"
});

export const metadata = {
  title: "ProjectDash",
  description: "Multi-Model AI Chat Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${absans.variable} ${instrumentSerif.variable} bg-bg text-text-primary font-sans antialiased transition-colors duration-250 ease-[cubic-bezier(0.4,0,0.2,1)]`}>
        {children}
      </body>
    </html>
  );
}
