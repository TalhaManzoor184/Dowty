export const metadata = {
  title: "About GrokThumbnails",
  description:
    "GrokThumbnails builds free tools for YouTube creators — a thumbnail downloader and a video downloader. Learn what we do and why we built it.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-bold mb-6">About GrokThumbnails</h1>

      <div className="space-y-6 text-[#667085] leading-relaxed text-sm sm:text-base">
        <p>
          GrokThumbnails is a small, independently built set of tools for
          YouTube creators, editors, and researchers. We started with a
          thumbnail downloader for quickly grabbing reference images, and
          added a video downloader so creators can pull their own or
          reference footage in the quality they need — no cluttered ads,
          no sign-ups, no waiting rooms.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-[#E1432B] mb-2">Why we built it</h2>
          <p>
            As creators ourselves, we regularly needed fast, reliable ways to
            pull reference thumbnails and footage — for competitor research,
            archiving our own channel&apos;s assets, and studying what makes
            content work. Existing tools were either cluttered with intrusive
            ads or unreliable about finding the highest quality version.
            GrokThumbnails is our answer: focused tools that do one job well.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#E1432B] mb-2">How it works</h2>
          <p>
            Both tools read the video ID from the URL you paste and fetch
            directly from YouTube&apos;s own public sources. Everything runs
            in your browser — we don&apos;t proxy, store, or log the videos
            you look up.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#E1432B] mb-2">Who runs this</h2>
          <p>
            GrokThumbnails is maintained by an independent developer based in
            Karachi, Pakistan. We&apos;re not a large company — just a
            developer who builds tools we personally use and figures other
            creators will find useful too.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#E1432B] mb-2">Get in touch</h2>
          <p>
            Questions, feedback, or a copyright concern? Visit our{" "}
            <a href="/contact" className="text-[#E1432B]">contact page</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
