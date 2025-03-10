import { Montserrat, Lato } from "next/font/google";
import "./globals.css";

// Montserrat : Heading
const montserrat = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
});

// Lato : Body
const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "TryItOn AI",
  description: "Try It On is an AI-powered platform that lets users generate professional headshots and try on different styles effortlessly. Upload your photos and get high-quality, realistic results in minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
