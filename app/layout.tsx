import "./globals.css";
import { Inter, Newsreader } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-ui" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: "ProjectDash",
  description: "Multi-Model AI Chat Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newsreader.variable} bg-bg text-text-primary font-sans antialiased transition-colors duration-250 ease-[cubic-bezier(0.4,0,0.2,1)]`}>
        {children}
      </body>
    </html>
  );
}
