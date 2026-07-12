export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for GrokThumbnails' free YouTube thumbnail and video downloader tools.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-bold mb-1">Privacy Policy</h1>
      <p className="text-[#7C8494] mb-8">Last updated: July 10, 2026</p>

      <div className="space-y-6 text-[#667085] leading-relaxed text-sm sm:text-base">
        <p>
          GrokThumbnails (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
          operates the free YouTube thumbnail and video downloader tools at
          grokthumbnails.com. This page explains what information is - and
          isn&apos;t - handled when you use them.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-[#E1432B] mb-2">Information we collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-[#1B1F27]">The thumbnail downloader</strong> runs entirely in
              your browser. We never see the video URLs you paste, and image
              requests go directly to YouTube&apos;s own public servers.
            </li>
            <li>
              <strong className="text-[#1B1F27]">The video downloader</strong> sends the video ID you
              submit to our server, which requests download links from a
              third-party video metadata API and returns them to your
              browser. We do not store the URL, the video ID, or the
              resulting file - the request is discarded once the response is
              sent back to you.
            </li>
            <li>
              We may use standard web analytics (such as Google Analytics) to
              understand aggregate traffic. This data is anonymized and not
              tied to your identity.
            </li>
            <li>
              If we display advertising (e.g. Google AdSense), our ad
              partners may use cookies to serve relevant ads. See
              &quot;Advertising&quot; below.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#E1432B] mb-2">Advertising</h2>
          <p>
            We may use Google AdSense to display ads. Google and its partners
            may use cookies to serve ads based on your prior visits to this
            and other websites. You can opt out of personalized advertising
            at{" "}
            <a href="https://adssettings.google.com" className="text-[#E1432B]">
              Google Ads Settings
            </a>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#E1432B] mb-2">Your rights</h2>
          <p>
            If laws such as GDPR or CCPA apply to you and you have questions
            about data held via analytics or advertising partners, contact us
            using the details below.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#E1432B] mb-2">Changes to this policy</h2>
          <p>We may update this policy from time to time. Changes will be posted here with a new &quot;last updated&quot; date.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#E1432B] mb-2">Contact</h2>
          <p>
            Questions about this policy:{" "}
            <a href="/contact" className="text-[#E1432B]">contact us here</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
