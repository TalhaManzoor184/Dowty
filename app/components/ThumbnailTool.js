"use client";

import { useState } from "react";

const QUALITIES = [
  { name: "maxresdefault.jpg", label: "Max Resolution (HD/4K)", dim: "1280 × 720+" },
  { name: "sddefault.jpg", label: "SD", dim: "640 × 480" },
  { name: "hqdefault.jpg", label: "HQ", dim: "480 × 360" },
  { name: "mqdefault.jpg", label: "MQ", dim: "320 × 180" },
  { name: "default.jpg", label: "Default", dim: "120 × 90" },
];

function extractYouTubeID(url) {
  if (!url) return null;
  url = url.trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(url)) return url;

  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]{11})/,
    /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([A-Za-z0-9_-]{11})/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,
    /[?&]v=([A-Za-z0-9_-]{11})/,
  ];

  for (const r of patterns) {
    const m = url.match(r);
    if (m?.[1]) return m[1];
  }
  return url.match(/([A-Za-z0-9_-]{11})/)?.[1] || null;
}

const thumbUrl = (id, name) => `https://img.youtube.com/vi/${id}/${name}`;

async function imageExists(url) {
  try {
    const r = await fetch(url, { method: "HEAD" });
    if (r.ok) return true;
  } catch {}
  try {
    const r = await fetch(url, { mode: "no-cors" });
    return r.ok;
  } catch {
    return false;
  }
}

async function downloadImage(url, filename) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const blob = await res.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      URL.revokeObjectURL(link.href);
      link.remove();
    }, 100);
  } catch (e) {
    alert("Download failed: " + e.message);
  }
}

const FAQS = [
  {
    q: "Is this YouTube thumbnail downloader really free?",
    a: "Yes — 100% free with unlimited downloads, no sign-up and no watermark added to the image.",
  },
  {
    q: "Why is maxresdefault sometimes missing?",
    a: "Not all videos have a 4K/HD maxres thumbnail uploaded. The tool automatically tries lower qualities (sd → hq → mq → default) until it finds one that exists.",
  },
  {
    q: "Can I download thumbnails from YouTube Shorts?",
    a: "Yes — paste any Shorts URL and the tool fetches it the same way as a regular video.",
  },
  {
    q: "Is it safe to use this online YouTube thumbnail grabber?",
    a: "Everything runs client-side in your browser. We don't see or store the links you paste — your browser talks directly to YouTube's own public image servers.",
  },
  {
    q: "Can I use downloaded thumbnails commercially?",
    a: "Thumbnails are copyrighted by the video's creator. Use them for personal reference, managing your own channel, or fair-use commentary — not as your own commercial artwork without permission.",
  },
];

export default function ThumbnailTool() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [available, setAvailable] = useState([]);
  const [videoId, setVideoId] = useState(null);
  const [active, setActive] = useState(null);
  const [error, setError] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSearch = async () => {
    const id = extractYouTubeID(url);
    setError(null);
    setAvailable([]);
    setActive(null);

    if (!id) {
      setError("Invalid YouTube URL. Please try again.");
      return;
    }

    setLoading(true);
    setVideoId(id);

    const found = [];
    for (const q of QUALITIES) {
      const u = thumbUrl(id, q.name);
      if (await imageExists(u)) found.push({ ...q, url: u });
    }

    setLoading(false);

    if (found.length === 0) {
      setError("No thumbnails found (private, deleted or restricted video?)");
      return;
    }

    setAvailable(found);
    setActive(found[0]);
  };

  return (
    <>
      {/* HERO / SEARCH */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-14 pb-10 text-center">
        <h1 className="font-display text-4xl sm:text-6xl tracking-wide leading-none uppercase">
          Free YouTube Thumbnail
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#E1432B] to-[#1F5FA8]">
            Downloader — HD & 4K
          </span>
        </h1>
        <p className="mt-4 text-[#667085] text-sm sm:text-base max-w-md mx-auto">
          The fastest free youtube thumbnail grabber online — paste any link
          to preview and download its thumbnail in maxres, HD, SD or HQ
          quality. No registration, no watermark.
        </p>

        <div className="mt-8 relative">
          <span className="hidden sm:block absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#E1432B]" />
          <span className="hidden sm:block absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#1F5FA8]" />
          <div className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="yt-thumb-url" className="sr-only">
              YouTube video URL
            </label>
            <input
              id="yt-thumb-url"
              type="text"
              placeholder="Paste YouTube URL or Shorts link..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 bg-[#FFFFFF] border border-[#D8DEE6] focus:border-[#E1432B] focus:ring-2 focus:ring-[#E1432B]/30 rounded-xl px-4 py-3.5 text-sm text-[#1B1F27] placeholder:text-[#7C8494] outline-none transition"
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              className="shrink-0 rounded-xl px-6 py-3.5 font-semibold text-sm text-[#EEF1F5] bg-linear-to-r from-[#E1432B] to-[#1F5FA8] hover:brightness-110 active:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed transition shadow-lg shadow-[#1F5FA8]/20"
            >
              {loading ? "Loading..." : "Get Thumbnails"}
            </button>
          </div>
        </div>

        <div className="mt-4 text-xs text-[#667085] bg-[rgba(234,179,8,0.1)] border border-[rgba(234,179,8,0.3)] rounded-lg px-4 py-3 text-left">
          <strong className="text-[#7A5610]">Fair use notice:</strong>{" "}
          Thumbnails belong to their video creators. Use this tool for
          personal reference, channel management, or fair-use commentary.
        </div>

        {error && <p className="mt-4 text-[#B3261E] text-sm font-medium">{error}</p>}
      </section>

      {/* RESULT */}
      {active && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
          <div className="rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#D8DEE6] shadow-2xl shadow-black/30 p-5 sm:p-7">
            <div className="grid sm:grid-cols-[1fr_320px] gap-6">
              <div className="rounded-xl overflow-hidden bg-[#EEF1F5] aspect-video">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.url}
                  alt={`YouTube thumbnail ${active.dim}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm text-[#667085] mb-2">
                  Video ID: <strong className="text-[#1B1F27]">{videoId}</strong>
                </div>
                <div className="flex flex-col gap-2.5">
                  {available.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setActive(item)}
                      className={`text-left flex items-center justify-between gap-3 rounded-xl border px-4 py-3 transition ${
                        active.name === item.name
                          ? "border-[#E1432B] bg-[#E1432B]/10"
                          : "border-[#D8DEE6] bg-[#F1F4F8] hover:border-[#E1432B]"
                      }`}
                    >
                      <span>
                        <span className="block font-semibold text-sm text-[#1B1F27]">
                          {item.label}
                        </span>
                        <span className="block text-xs text-[#667085]">{item.dim}</span>
                      </span>
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          downloadImage(item.url, `${videoId}_${item.name}`);
                        }}
                        className="text-xs font-semibold text-[#E1432B] hover:text-[#1F5FA8] cursor-pointer"
                      >
                        Download
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* HOW IT WORKS */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14 border-t border-[#D8DEE6]">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-[#E1432B] font-semibold">
            Walkthrough
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold">How it works</h2>
        </div>
        <div className="grid sm:grid-cols-4 gap-4">
          {[
            ["01", "Copy the link", "Copy the video's YouTube link"],
            ["02", "Paste it", "Paste it into the box above"],
            ["03", "Pick a quality", "Choose the resolution you need"],
            ["04", "Download", "Click Download to save the image"],
          ].map(([n, t, b]) => (
            <div key={n} className="rounded-xl bg-[#FFFFFF] border border-[#D8DEE6] p-5">
              <span className="font-mono text-sm text-[#E1432B] font-bold">{n}</span>
              <h3 className="mt-2 font-semibold text-sm">{t}</h3>
              <p className="mt-1.5 text-xs text-[#667085] leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESOLUTIONS TABLE */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14 border-t border-[#D8DEE6]">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          YouTube thumbnail resolutions
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[#D8DEE6]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#FFFFFF] text-[#E1432B]">
                <th className="text-left p-3">Quality</th>
                <th className="text-left p-3">Resolution</th>
                <th className="text-left p-3">Best for</th>
              </tr>
            </thead>
            <tbody className="text-[#667085]">
              {[
                ["maxresdefault", "1280 × 720 (up to 4K)", "Custom thumbnails, high-res previews"],
                ["sddefault", "640 × 480", "Standard quality, faster loading"],
                ["hqdefault", "480 × 360", "Medium quality previews"],
                ["mqdefault", "320 × 180", "Small thumbnails, mobile"],
                ["default", "120 × 90", "Low-res fallback"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-[#D8DEE6]">
                  {row.map((cell, i) => (
                    <td key={i} className="p-3">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14 border-t border-[#D8DEE6]">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-[#E1432B] font-semibold">
            Questions
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
            Frequently asked questions
          </h2>
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
                  <span className="font-medium text-sm sm:text-base">{faq.q}</span>
                  <span className={`text-[#E1432B] transition-transform ${isOpen ? "rotate-180" : ""}`}>▾</span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm text-[#667085] leading-relaxed">{faq.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 text-center">
        <p className="text-sm text-[#667085]">
          Need the actual video file instead?{" "}
          <a href="/youtube-video-downloader" className="text-[#E1432B] font-semibold">
            Try our Video Downloader →
          </a>
        </p>
      </div>
    </>
  );
}
