import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#D8DEE6] bg-[#E9EDF2] mt-16">
      <div className="h-1 w-full bg-linear-to-r from-[#E1432B] via-[#1F5FA8] to-[#E1432B]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-linear-to-br from-[#E1432B] to-[#1F5FA8] flex items-center justify-center font-bold text-[#EEF1F5] text-sm">
              GT
            </span>
            <span className="font-semibold tracking-tight text-[#1B1F27]">
              GrokThumbnails
            </span>
          </div>
          <p className="mt-3 text-sm text-[#7C8494] leading-relaxed max-w-xs">
            Free tools for YouTube creators — grab thumbnails or download
            videos, no sign-up, nothing stored on our end.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-[#E1432B] font-semibold mb-4">
            Tools
          </h4>
          <ul className="space-y-2.5 text-sm text-[#667085]">
            <li><Link href="/" className="hover:text-[#E1432B] transition">Thumbnail Downloader</Link></li>
            <li><Link href="/youtube-video-downloader" className="hover:text-[#E1432B] transition">Video Downloader</Link></li>
            <li><Link href="/blog/thumbnail-design-tips-2026" className="hover:text-[#E1432B] transition">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-[#E1432B] font-semibold mb-4">
            Company
          </h4>
          <ul className="space-y-2.5 text-sm text-[#667085]">
            <li><Link href="/about" className="hover:text-[#E1432B] transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-[#E1432B] transition">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-[#E1432B] transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[#E1432B] transition">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#D8DEE6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7C8494]">
          <span>
            © {new Date().getFullYear()} GrokThumbnails. Not affiliated with
            YouTube or Google.
          </span>
          <span>Karachi, PK</span>
        </div>
      </div>
    </footer>
  );
}
