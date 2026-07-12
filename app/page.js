import ThumbnailTool from "./components/ThumbnailTool";

export const metadata = {
  title: "Free YouTube Thumbnail Downloader - HD & 4K Instant Download",
  description:
    "Download any YouTube video thumbnail in HD, 4K maxres, SD or HQ instantly. 100% free, no sign-up, no watermark. Works on mobile & desktop.",
  keywords: [
    "youtube thumbnail downloader",
    "free youtube thumbnail downloader",
    "youtube thumbnail grabber",
    "yt thumbnail grabber",
    "thumbnail extractor",
    "download youtube thumbnail hd",
    "youtube thumbnail downloader 4k",
    "maxresdefault downloader",
    "youtube thumbnail downloader no watermark",
    "youtube cover download",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Free YouTube Thumbnail Downloader - HD & 4K",
    description:
      "Get any YouTube video's thumbnail in the highest quality available. Free, instant, no login required.",
    url: "https://grokthumbnails.com/",
    siteName: "GrokThumbnails",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free YouTube Thumbnail Downloader - HD 4K Online Tool",
    description:
      "Download YouTube thumbnails instantly in all qualities - free, secure, no login required.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free YouTube Thumbnail Downloader",
  url: "https://grokthumbnails.com/",
  description:
    "Instant free tool to download YouTube thumbnails in HD, 4K and all available qualities - no registration needed.",
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
      name: "Is this YouTube thumbnail downloader really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is 100% free with unlimited downloads, no sign-up and no watermark added to the image.",
      },
    },
    {
      "@type": "Question",
      name: "Why is maxresdefault sometimes missing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not every video has a 4K/HD maxres thumbnail uploaded by the creator. The tool automatically falls back to sd, hq, mq or default quality.",
      },
    },
    {
      "@type": "Question",
      name: "Can I download thumbnails from YouTube Shorts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, paste any Shorts URL and the tool fetches the thumbnail the same way it does for regular videos.",
      },
    },
  ],
};

export default function Home() {
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
      <ThumbnailTool />
    </main>
  );
}
