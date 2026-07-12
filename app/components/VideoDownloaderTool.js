"use client";

import { useState } from "react";

const IconSearch = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
  </svg>
);
const IconDownload = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M12 3v12m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconEye = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const IconClock = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconChevron = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconShield = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HOW_TO_STEPS = [
  { n: "01", title: "Paste the link", body: "Copy any YouTube video, Shorts, or embed URL and drop it into the box above." },
  { n: "02", title: "We fetch the details", body: "Title, channel, thumbnail, view count, and every available format are pulled in seconds." },
  { n: "03", title: "Pick a quality & download", body: "Choose the resolution you want and the file downloads straight to your device." },
];

const FAQS = [
  { q: "Is this tool free to use?", a: "Yes. Searching for a video and downloading it doesn't cost anything or require an account." },
  { q: "What formats can I download?", a: "We surface every MP4 rendition YouTube exposes for a video, from standard definition up to the highest quality available." },
  { q: "Does it work with YouTube Shorts?", a: "Yes — paste a Shorts link the same way you would a regular video URL." },
  { q: "Will the downloaded video lose quality?", a: "No. We link directly to YouTube's own source files, so you get the same quality YouTube serves for that resolution." },
  { q: "Do you store the videos I download?", a: "No. Nothing is uploaded to or cached on our servers — your browser downloads straight from YouTube's file source." },
];

function downloadVideo(url, filename, onDone) {
  const proxyUrl = `/api/proxy-download?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(filename)}`;

  const link = document.createElement("a");
  link.href = proxyUrl;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();

  // The browser hands off to its own download manager almost immediately;
  // this just clears the button's "Downloading..." state shortly after.
  setTimeout(() => onDone?.(), 1200);
}

export default function VideoDownloaderTool() {
  const [url, setUrl] = useState("");
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [error, setError] = useState(null);
  const [downloadingItag, setDownloadingItag] = useState(null);

  const getVideoId = (url) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([^?&]+)/
    );
    return match ? match[1] : url;
  };

  const formatDuration = (seconds) => {
    seconds = Number(seconds);
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (hrs) return `${hrs}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    return `${mins}:${String(secs).padStart(2, "0")}`;
  };

  const handleSearch = async () => {
    if (!url.trim()) {
      setError("Please enter a YouTube URL.");
      return;
    }
    setError(null);

    try {
      setLoading(true);
      setVideo(null);

      const id = getVideoId(url);

      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }

      setVideo(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const downloads = video
    ? [...(video.formats || []), ...(video.adaptiveFormats || [])].filter(
        (item) => item.url && item.mimeType?.includes("video/mp4")
      )
    : [];

  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-14 pb-10 text-center">
        <h1 className="font-display text-4xl sm:text-6xl tracking-wide leading-none uppercase">
          Free YouTube Video
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#E1432B] to-[#1F5FA8]">
            Downloader
          </span>
        </h1>
        <p className="mt-4 text-[#667085] text-sm sm:text-base max-w-md mx-auto">
          A fast, free youtube downloader for MP4 — drop a link below and
          choose the quality you want. No sign-up, no watermarks, no waiting
          rooms.
        </p>

        <div className="mt-8 relative">
          <span className="hidden sm:block absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#E1432B]" />
          <span className="hidden sm:block absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#1F5FA8]" />
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#E1432B]" />
              <label htmlFor="yt-video-url" className="sr-only">YouTube video URL</label>
              <input
                id="yt-video-url"
                type="text"
                placeholder="Paste YouTube URL..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full bg-[#FFFFFF] border border-[#D8DEE6] focus:border-[#E1432B] focus:ring-2 focus:ring-[#E1432B]/30 rounded-xl pl-11 pr-4 py-3.5 text-sm text-[#1B1F27] placeholder:text-[#7C8494] outline-none transition"
              />
            </div>

            <button
              onClick={handleSearch}
              disabled={loading}
              className="shrink-0 rounded-xl px-6 py-3.5 font-semibold text-sm text-[#EEF1F5] bg-linear-to-r from-[#E1432B] to-[#1F5FA8] hover:brightness-110 active:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed transition shadow-lg shadow-[#1F5FA8]/20"
            >
              {loading ? "Fetching..." : "Get Video"}
            </button>
          </div>
        </div>

        <div className="mt-4 text-xs text-[#667085] bg-[rgba(234,179,8,0.1)] border border-[rgba(234,179,8,0.3)] rounded-lg px-4 py-3 text-left">
          <strong className="text-[#7A5610]">Fair use notice:</strong> Only
          download videos you have the right to use, or for personal offline
          viewing. Respect creators&apos; copyright and YouTube&apos;s Terms
          of Service.
        </div>

        {error && <p className="mt-4 text-[#B3261E] text-sm font-medium">{error}</p>}
      </section>

      {video && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
          <div className="rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#D8DEE6] shadow-2xl shadow-black/30">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  video.thumbnail?.[5]?.url ||
                  video.thumbnail?.[4]?.url ||
                  video.thumbnail?.[3]?.url ||
                  video.thumbnail?.[2]?.url ||
                  video.thumbnail?.[1]?.url ||
                  video.thumbnail?.[0]?.url
                }
                alt={video.title}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#F1F4F8] via-transparent to-transparent opacity-60" />
            </div>

            <div className="p-5 sm:p-7">
              <h2 className="text-lg sm:text-2xl font-bold leading-snug">{video.title}</h2>
              <p className="mt-1.5 text-[#E1432B] text-sm font-medium">{video.channelTitle}</p>

              <div className="mt-3 flex items-center gap-5 text-xs sm:text-sm text-[#667085] font-mono">
                <span className="flex items-center gap-1.5">
                  <IconEye className="w-4 h-4 text-[#E1432B]" />
                  {Number(video.viewCount).toLocaleString()} views
                </span>
                <span className="flex items-center gap-1.5">
                  <IconClock className="w-4 h-4 text-[#E1432B]" />
                  {formatDuration(video.lengthSeconds)}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {downloads.length > 0 ? (
                  downloads.map((item) => {
                    const isDownloading = downloadingItag === item.itag;
                    return (
                      <button
                        key={item.itag}
                        type="button"
                        disabled={isDownloading}
                        onClick={() => {
                          setDownloadingItag(item.itag);
                          downloadVideo(
                            item.url,
                            `${video.title || "video"}-${item.qualityLabel || item.height + "p"}.mp4`,
                            () => setDownloadingItag(null)
                          );
                        }}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-[#D8DEE6] bg-[#F1F4F8] hover:border-[#E1432B] px-4 py-3 transition disabled:opacity-60 disabled:cursor-wait"
                      >
                        <span className="font-mono text-sm text-[#1B1F27]">
                          {item.qualityLabel || `${item.height}p`}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-[#E1432B] transition">
                          {isDownloading ? "Downloading..." : "Download"}
                          <IconDownload className="w-3.5 h-3.5" />
                        </span>
                      </button>
                    );
                  })
                ) : (
                  <p className="col-span-full text-center text-[#B3261E] text-sm py-3">
                    No downloadable video found.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14 border-t border-[#D8DEE6]">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-[#E1432B] font-semibold">Walkthrough</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold">How to use it</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {HOW_TO_STEPS.map((step) => (
            <div key={step.n} className="rounded-xl bg-[#FFFFFF] border border-[#D8DEE6] p-5">
              <span className="font-mono text-sm text-[#E1432B] font-bold">{step.n}</span>
              <h3 className="mt-2 font-semibold text-[#1B1F27]">{step.title}</h3>
              <p className="mt-1.5 text-sm text-[#667085] leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14 border-t border-[#D8DEE6]">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-[#E1432B] font-semibold">Questions</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Frequently asked questions</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={faq.q} className="rounded-xl border border-[#D8DEE6] bg-[#FFFFFF] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <span className="font-medium text-sm sm:text-base text-[#1B1F27]">{faq.q}</span>
                  <IconChevron className={`w-4 h-4 shrink-0 text-[#E1432B] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm text-[#667085] leading-relaxed">{faq.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14 border-t border-[#D8DEE6]">
        <div className="rounded-2xl bg-linear-to-br from-[#FFFFFF] to-[#F1F4F8] border border-[#D8DEE6] p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <IconShield className="w-5 h-5 text-[#E1432B]" />
            <h2 className="text-xl sm:text-2xl font-bold">Privacy at a glance</h2>
          </div>
          <div className="space-y-3 text-sm text-[#667085] leading-relaxed">
            <p>We don&apos;t store the videos you download or the links you paste. Each request is processed on the fly and discarded once the response is sent back to your browser.</p>
            <p>No account or personal information is required to use this tool.</p>
            <p>
              Full details in our{" "}
              <a href="/privacy" className="text-[#E1432B]">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
