import type { Metadata } from "next";
import "./globals.css";

const APP_TITLE = "WineMindful";
const APP_DESCRIPTION =
  "Log pours, pause before overpouring, and celebrate mindful wins with WineMindful.";

export const metadata: Metadata = {
  metadataBase:
    process.env.NEXT_PUBLIC_SITE_URL
      ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
      : undefined,
  title: APP_TITLE,
  description: APP_DESCRIPTION,
  openGraph: {
    title: APP_TITLE,
    description: APP_DESCRIPTION,
    url: "https://winemindful.com",
    siteName: APP_TITLE,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: APP_TITLE,
    description: APP_DESCRIPTION
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png"
  }
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
