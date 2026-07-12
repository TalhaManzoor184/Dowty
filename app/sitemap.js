export default function sitemap() {
  const base = "https://grokthumbnails.com";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/youtube-video-downloader`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog/thumbnail-design-tips-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/thumbnail-copyright-mistakes`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
