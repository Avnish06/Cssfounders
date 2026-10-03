import type { Metadata } from "next";
import "./tailwind.css";

export const metadata: Metadata = {
  title: "TourVista - Explore The Whole World | Travel Agency",
  description:
    "Discover breathtaking destinations, unforgettable experiences, and the joy of travel with TourVista. Handpicked places that promise unforgettable experiences.",
  keywords: "travel agency, tour packages, destinations, adventure, tourism",
  openGraph: {
    title: "TourVista - Explore The Whole World",
    description: "Discover breathtaking destinations and unforgettable travel experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;600&family=Architects+Daughter&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
