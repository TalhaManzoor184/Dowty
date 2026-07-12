import VideoDownloaderTool from "../components/VideoDownloaderTool";

export const metadata = {
  title: "Free YouTube Video Downloader - Download MP4 in Any Quality",
  description:
    "Download YouTube videos and Shorts in MP4 — from standard definition up to the highest quality available. Free, no sign-up, no watermark.",
  keywords: [
    "youtube video downloader",
    "youtube downloader mp4",
    "free youtube video downloader",
    "youtube to mp4 downloader",
    "youtube video downloader online",
    "download youtube videos hd",
    "youtube shorts downloader",
    "youtube downloader no watermark",
    "save youtube video online",
  ],
  alternates: { canonical: "/youtube-video-downloader" },
  openGraph: {
    title: "Free YouTube Video Downloader - MP4, Any Quality",
    description:
      "Paste a link and download the video straight from YouTube's own source files. Free, instant, no login required.",
    url: "https://grokthumbnails.com/youtube-video-downloader",
    siteName: "GrokThumbnails",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free YouTube Video Downloader",
  url: "https://grokthumbnails.com/youtube-video-downloader",
  description:
    "Free tool to download YouTube videos in MP4, from standard definition up to the highest available quality.",
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this YouTube video downloader free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Searching for a video and downloading it doesn't cost anything or require an account.",
      },
    },
    {
      "@type": "Question",
      name: "Will the downloaded video lose quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The tool links directly to YouTube's own source files, so you get the same quality YouTube serves for that resolution.",
      },
    },
    {
      "@type": "Question",
      name: "Do you store the videos I download?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Nothing is uploaded to or cached on our servers - your browser downloads straight from YouTube's file source.",
      },
    },
  ],
};

export default function VideoDownloaderPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <VideoDownloaderTool />
    </main>
  );
}
