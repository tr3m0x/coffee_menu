import type { Metadata, Viewport } from "next";
import "./globals.css";

const productionUrl = "https://tr3m0x.github.io/coffee_menu/";

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  title: "COCO Café | Digital Menu",
  description: "Explore the COCO Café menu — Coffee & Stories.",
  applicationName: "COCO Café Menu",
  openGraph: {
    title: "COCO Café | Digital Menu",
    description: "Explore the COCO Café menu — Coffee & Stories.",
    url: productionUrl,
    siteName: "COCO Café",
    images: [{ url: "images/hero/coco-table.webp", width: 1536, height: 1024, alt: "Coffee and stories at COCO Café" }],
    type: "website",
  },
  icons: { icon: "icon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#26170F",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
