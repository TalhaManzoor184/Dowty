export const metadata = {
  title: "Common Copyright Mistakes Creators Make With Thumbnails",
  description:
    "From stock photos to screenshots to using another creator's face — the copyright mistakes that get YouTube thumbnails claimed, taken down, or demonetized, and how to avoid them.",
  keywords: [
    "youtube thumbnail copyright",
    "thumbnail copyright mistakes",
    "can i use screenshots as thumbnails",
    "youtube fair use thumbnails",
    "youtube thumbnail dmca",
  ],
  alternates: { canonical: "/blog/thumbnail-copyright-mistakes" },
  openGraph: {
    title: "Common Copyright Mistakes Creators Make With Thumbnails",
    description: "The copyright mistakes that get YouTube thumbnails claimed or taken down — and how to avoid them.",
    url: "https://grokthumbnails.com/blog/thumbnail-copyright-mistakes",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Common Copyright Mistakes Creators Make With Thumbnails",
  description: "The copyright mistakes that get YouTube thumbnails claimed, taken down, or demonetized, and how to avoid them.",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  author: { "@type": "Organization", name: "GrokThumbnails" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I use a screenshot from a movie or TV show as a thumbnail?",
      acceptedAnswer: { "@type": "Answer", text: "Generally no, unless your use qualifies as fair use, such as genuine commentary or criticism where the screenshot is necessary to the point being made." },
    },
    {
      "@type": "Question",
      name: "Is it safe to use free stock photos in thumbnails?",
      acceptedAnswer: { "@type": "Answer", text: "Only if you check the specific license. Many 'free' stock sites restrict commercial or monetized use." },
    },
    {
      "@type": "Question",
      name: "Can I put another creator's face on my thumbnail?",
      acceptedAnswer: { "@type": "Answer", text: "It can raise both copyright and publicity-rights issues, especially if it implies endorsement. Getting permission, or using your own imagery, is safer." },
    },
    {
      "@type": "Question",
      name: "Does adding text over a copyrighted image make it fair use?",
      acceptedAnswer: { "@type": "Answer", text: "No. Fair use depends on purpose, amount used, and market effect, not on whether you added text or filters." },
    },
  ],
};

const FAQS = [
  ["Can I use a screenshot from a movie or TV show as a thumbnail?", "Generally no, unless your use qualifies as fair use — genuine commentary or criticism where the screenshot is necessary to the point being made. Using a still purely because it looks good carries real claim risk."],
  ["Is it safe to use free stock photos in thumbnails?", "Only if you check the license on the specific photo, not just the site's general reputation. Many free stock licenses restrict commercial or monetized use."],
  ["Can I put another creator's face on my thumbnail?", "It can raise both copyright and publicity-rights concerns, especially if it implies endorsement. Getting permission, or using your own imagery instead, is the safer route."],
  ["Does adding text over a copyrighted image make it fair use?", "No. Fair use depends on the purpose, amount, and market effect of the use, not on whether the image was visually altered."],
];

export default function ThumbnailCopyrightMistakes() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article>
        <h1 className="text-3xl font-bold mb-1">Common Copyright Mistakes Creators Make With Thumbnails</h1>
        <p className="text-[#7C8494] text-sm mb-8">Published July 10, 2026 · 7 min read</p>

        <div className="space-y-5 text-[#667085] leading-relaxed text-sm sm:text-base">
          <p>
            A thumbnail is the one piece of a video most likely to contain
            someone else&apos;s copyrighted material, because it&apos;s
            assembled fast, usually last, and often from whatever image is
            easiest to grab. None of this is legal advice — copyright law
            varies by country and by specific facts — but the patterns below
            cover most of the trouble creators actually run into.
          </p>

          <div className="rounded-lg bg-[rgba(234,179,8,0.1)] border border-[rgba(234,179,8,0.3)] p-4 text-[#7A5610] text-sm">
            <strong>Disclaimer:</strong> This article explains general
            patterns, not legal advice for your specific situation. If
            you&apos;re facing an active claim or dispute, consult a
            qualified lawyer in your jurisdiction.
          </div>

          <h2 className="text-xl font-semibold text-[#E1432B] pt-2">1. Grabbing a movie, show, or news still</h2>
          <p>
            Pulling a frame from a film, TV show, or news broadcast feels
            harmless because it&apos;s &quot;just one image,&quot; but the
            still itself is a copyrighted work owned by the studio or
            network. Using it purely because it&apos;s eye-catching, without
            your video actually critiquing that specific footage, is the
            kind of use that gets flagged first by rights holders&apos;
            automated systems.
          </p>

          <h2 className="text-xl font-semibold text-[#E1432B] pt-2">2. Trusting &quot;free stock photo&quot; without reading the actual license</h2>
          <p>
            Free stock sites range from fully unrestricted to surprisingly
            limited, and licenses can differ photo by photo even on the same
            site. Some require a visible credit line, some prohibit implying
            endorsement, and some restrict monetized use. Screenshotting a
            photo from a general image search and assuming it&apos;s free is
            the most common source of accidental infringement in thumbnails.
          </p>

          <div className="overflow-x-auto rounded-xl border border-[#D8DEE6]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#FFFFFF] text-[#E1432B]">
                  <th className="text-left p-3">Source</th>
                  <th className="text-left p-3">Typical restriction</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Generic image search results", "Usually copyrighted by default — \"found on Google\" is not a license"],
                  ["\"Free for personal use\" stock sites", "Often forbids monetized content, which includes ad-supported YouTube videos"],
                  ["Creative Commons images", "License varies by type — some require attribution or forbid commercial use"],
                  ["Paid stock subscriptions", "Usually safest, but check if the plan covers video thumbnails specifically"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-[#D8DEE6]">
                    <td className="p-3 font-medium text-[#1B1F27]">{row[0]}</td>
                    <td className="p-3">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold text-[#E1432B] pt-2">3. Using another creator&apos;s face or thumbnail without permission</h2>
          <p>
            Reaction and commentary channels sometimes lift a screenshot of
            the person they&apos;re reacting to and use it as the main
            thumbnail image. Beyond the copyright question, using
            someone&apos;s likeness in a way that could imply endorsement can
            raise separate publicity-rights issues in some countries.
          </p>

          <h2 className="text-xl font-semibold text-[#E1432B] pt-2">4. Assuming a text overlay or filter makes it &quot;transformed&quot;</h2>
          <p>
            A common misconception is that adding a caption, border, or color
            filter to a copyrighted image legally &quot;transforms&quot; it
            into new work. It doesn&apos;t. Fair use looks at the purpose of
            the use, how much of the original was used, and market effect —
            not whether you visually modified the file.
          </p>

          <div className="rounded-xl bg-[#FFFFFF] border border-[#D8DEE6] p-4">
            <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <rect width="600" height="200" fill="#F1F4F8" />
              <rect x="20" y="20" width="260" height="160" rx="8" fill="#E9EDF2" stroke="#D8DEE6" />
              <text x="150" y="55" textAnchor="middle" fill="#1B1F27" fontSize="13" fontWeight="700">Your own photo/render</text>
              <circle cx="150" cy="110" r="35" fill="#34d399" opacity="0.85" />
              <text x="150" y="175" textAnchor="middle" fill="#667085" fontSize="12">Safe — you own it</text>
              <rect x="320" y="20" width="260" height="160" rx="8" fill="#E9EDF2" stroke="#D8DEE6" />
              <text x="450" y="55" textAnchor="middle" fill="#1B1F27" fontSize="13" fontWeight="700">Filtered screenshot</text>
              <circle cx="450" cy="110" r="35" fill="#B3261E" opacity="0.85" />
              <text x="450" y="128" textAnchor="middle" fill="#F1F4F8" fontSize="9">+text +filter</text>
              <text x="450" y="175" textAnchor="middle" fill="#667085" fontSize="12">Still the original work legally</text>
            </svg>
            <p className="text-xs text-[#7C8494] text-center mt-2">
              Fig 1: A filter or caption doesn&apos;t change who owns the underlying image.
            </p>
          </div>

          <h2 className="text-xl font-semibold text-[#E1432B] pt-2">5. Reusing brand logos or game/app art as decoration</h2>
          <p>
            Company logos, game box art, and app icons are typically both
            copyrighted and trademarked. Using them to accurately identify
            the subject of a genuine review is generally more defensible,
            but using a franchise&apos;s artwork purely for its visual appeal
            in an unrelated video is a common source of claims.
          </p>

          <h2 className="text-xl font-semibold text-[#E1432B] pt-2">6. Not keeping a record of where images came from</h2>
          <p>
            Even when an image is sourced legitimately, the license terms
            often get lost weeks later when a claim arrives. Keeping a simple
            log — source URL, license type, date downloaded — turns a
            stressful dispute into a five-minute reply.
          </p>

          <h2 className="text-xl font-semibold text-[#E1432B] pt-2">What&apos;s generally safer</h2>
          <ul className="space-y-2 pl-1">
            {[
              "Photos or renders you created yourself",
              "Properly licensed stock images, with the license saved somewhere you can find it later",
              "Official press kit or media assets explicitly provided for creator use",
              "Your own screen recordings of your own gameplay, software, or on-screen work",
              "Brief, clearly-labeled screenshots used specifically for genuine commentary or critique",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#E1432B]">✔</span> {item}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold text-[#E1432B] pt-2">FAQ</h2>
          <div className="space-y-3">
            {FAQS.map(([q, a]) => (
              <div key={q} className="rounded-xl border border-[#D8DEE6] bg-[#FFFFFF] p-4">
                <p className="font-semibold text-[#E1432B] text-sm">{q}</p>
                <p className="mt-1 text-sm">{a}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-[#FFFFFF] border border-[#D8DEE6] p-6 text-center mt-4">
            <p>
              Need to reference your own video&apos;s thumbnail history?{" "}
              <a href="/" className="text-[#E1432B] font-semibold">Grab it in full resolution here.</a>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
