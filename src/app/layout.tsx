import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deon — UI / OS Visual Designer",
  description: "Personal portfolio of Deon, UI / OS Visual Designer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
