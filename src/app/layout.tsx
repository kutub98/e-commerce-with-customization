import { asap } from "@/assets/fonts";
import "@/styles/core.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customization Example...",
  description: "ABC Corp. - Customization Example ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={asap.className}>{children}</body>
    </html>
  );
}
