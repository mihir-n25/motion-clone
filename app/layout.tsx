
import type { Metadata } from "next";

import {Toaster} from "sonner";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme_provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Motion",
  description: "Can make your workspace where better",
  icons : {
    icon : [
      {
       media : "(prefer-color-scheme : light)",
       url : "/logo.svg",
      //  href : "logo.svg"
      },
      {
       media : "(prefer-color-scheme : dark)",
       url : "/logo-dark.svg",
      //  href : "logo-dark.svg"
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="motion-theme-2"
        >
          <Toaster position="bottom-center"/>
          {children}
          </ThemeProvider>
          </ConvexClientProvider>
          </body>
    </html>
  );
}
