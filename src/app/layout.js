import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spardha Lead",
  description: "Generated by Spardha Lead",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href=
          "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet" />
        <script src=
          "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js">
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
