import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TimecodeBar from "./components/TimecodeBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://grokthumbnails.com"),
  title: {
    default: "GrokThumbnails - Free YouTube Thumbnail & Video Downloader",
    template: "%s | GrokThumbnails",
  },
  description:
    "Free tools for YouTube creators: download thumbnails in HD/4K or grab videos in any available quality. No sign-up, no watermark.",
  keywords: [
    "youtube thumbnail downloader",
    "youtube video downloader",
    "free youtube thumbnail downloader",
    "youtube thumbnail grabber",
    "youtube downloader mp4",
    "download youtube thumbnail hd",
    "youtube to mp4 downloader",
    "youtube shorts downloader",
  ],
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#EEF1F5] text-[#1B1F27]">
        <TimecodeBar />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
