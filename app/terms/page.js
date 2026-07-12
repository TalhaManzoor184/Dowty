export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for GrokThumbnails' free YouTube thumbnail and video downloader tools.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-bold mb-1">Terms of Service</h1>
      <p className="text-[#7C8494] mb-8">Last updated: July 10, 2026</p>

      <div className="space-y-6 text-[#667085] leading-relaxed text-sm sm:text-base">
        <p>
          By using GrokThumbnails&apos; tools (&quot;the Service&quot;), you
          agree to these Terms. If you do not agree, please do not use the
          Service.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-[#E1432B] mb-2">1. Description of service</h2>
          <p>
            GrokThumbnails provides a free thumbnail downloader and a free
            video downloader for YouTube content. The thumbnail tool runs
            entirely in your browser. The video tool requests download links
            from a third-party API on your behalf; no video files are stored
            on our servers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#E1432B] mb-2">2. Eligibility & acceptable use</h2>
          <p>You must be at least 13 years old, or the minimum age required in your country, to use the Service. You agree not to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Use the Service for any unlawful purpose or in a way that violates YouTube&apos;s own Terms of Service</li>
            <li>Attempt to reverse-engineer, scrape, or redistribute the Service without permission</li>
            <li>Use automated scripts or bots to overload or abuse the Service</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#E1432B] mb-2">3. Intellectual property & copyright</h2>
          <p>
            All thumbnails and videos belong to their respective YouTube
            creators. Our tools only access publicly available sources
            served by YouTube itself. Downloads are intended for personal
            reference, fair-use commentary, or managing your own channel&apos;s
            assets. You are responsible for complying with copyright law and
            YouTube&apos;s policies for any further use. We claim no ownership
            over any downloaded content.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#E1432B] mb-2">4. No warranties & limitation of liability</h2>
          <p>
            The Service is provided &quot;as is&quot; without warranties of
            any kind. We are not responsible for content being unavailable
            (this depends on YouTube or third-party APIs we rely on), for any
            loss arising from use of the Service, or for the actions of third
            parties. Since the Service is free, our liability in any case is
            limited to $0.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#E1432B] mb-2">5. Changes & termination</h2>
          <p>We may modify, suspend, or discontinue the Service at any time. We may also update these Terms; continued use after changes means you accept the updated Terms.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#E1432B] mb-2">6. Governing law</h2>
          <p>These Terms are governed by the laws of Pakistan. Disputes will be resolved in the courts of Karachi.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#E1432B] mb-2">7. Contact</h2>
          <p>
            Questions about these Terms:{" "}
            <a href="/contact" className="text-[#E1432B]">contact us here</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
