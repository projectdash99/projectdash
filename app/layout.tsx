import "./globals.css";
import { Inter, Fraunces } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
});

import { ThemeProvider } from "../components/ThemeProvider";

export const metadata = {
  title: "ProjectDash",
  description: "Multi-Model AI Chat Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${fraunces.variable} bg-bg text-text-primary font-sans leading-relaxed antialiased transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
