import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "KALALI B.M | Full-Stack Software Engineer",
  description:
    "SaaS, fintech, and automation engineer building scalable systems in Africa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
