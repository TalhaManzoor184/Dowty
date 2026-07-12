import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 flex items-center justify-between flex-wrap gap-3">
      <Link href="/" className="flex items-center gap-2">
        <span className="h-8 w-8 rounded-lg bg-linear-to-br from-[#E1432B] to-[#1F5FA8] flex items-center justify-center font-bold text-[#EEF1F5] text-sm">
          GT
        </span>
        <span className="font-display text-xl tracking-wide text-[#1B1F27]">
          GROKTHUMBNAILS
        </span>
      </Link>

      <nav className="flex items-center gap-5 text-sm text-[#667085]">
        <Link href="/" className="hover:text-[#E1432B] transition">
          Thumbnail Downloader
        </Link>
        <Link href="/youtube-video-downloader" className="hover:text-[#E1432B] transition">
          Video Downloader
        </Link>
        <Link href="/blog/thumbnail-design-tips-2026" className="hover:text-[#E1432B] transition hidden sm:inline">
          Blog
        </Link>
        <Link href="/about" className="hover:text-[#E1432B] transition hidden sm:inline">
          About
        </Link>
      </nav>
    </header>
  );
}
