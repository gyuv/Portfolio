import type { Metadata } from "main";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuvaraj | Enterprise QA Architect & Sales Leader",
  description: "Million-dollar portfolio featuring gaming-grade aesthetics and advanced technical execution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#020617] text-white selection:bg-cyan-500 selection:text-black font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
