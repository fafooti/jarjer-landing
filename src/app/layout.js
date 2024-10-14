import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const productSans = localFont({
  src: [
    {
      path: "./fonts/Product-Sans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Product-Sans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-product-sans",
  display: "swap",
});

export const metadata = {
  title: "JarJer",
  description: "Food Delivey App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${productSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
