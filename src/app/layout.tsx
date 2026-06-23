import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/layout/LenisProvider";
import Header from "@/components/layout/Header";
import CustomCursor from "@/components/ui/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rashitha Nalaranga | Premium Portfolio",
  description: "System Engineer • IoT Specialist • Full Stack Developer",
};

export const viewport = {
  themeColor: "#151045",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          <LenisProvider>
            <CustomCursor />
            <div className="noise-overlay" />
            <Header />
            <main className="flex-1 flex flex-col">{children}</main>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
