export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the GrokThumbnails team for support, feedback, or copyright concerns.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-[#667085] mb-8">
        Have a question, found a bug, or need to report a copyright issue?
        We read every message.
      </p>

      <div className="rounded-xl bg-[#FFFFFF] border border-[#D8DEE6] p-6 mb-4">
        <p className="text-sm text-[#667085]">Email</p>
        <a href="mailto:support@grokthumbnails.com" className="text-[#E1432B] text-lg font-medium">
          support@grokthumbnails.com
        </a>
        <p className="mt-3 text-sm text-[#7C8494]">We typically reply within 1-2 business days.</p>
      </div>

      <div className="rounded-xl bg-[#FFFFFF] border border-[#D8DEE6] p-6">
        <p className="font-semibold text-[#1B1F27] mb-1">Copyright / DMCA requests</p>
        <p className="text-sm text-[#667085]">
          If you believe content accessible through our tools infringes your
          copyright, email us with the video URL in question and a
          description of the issue, and we will review it promptly.
        </p>
      </div>
    </main>
  );
}
