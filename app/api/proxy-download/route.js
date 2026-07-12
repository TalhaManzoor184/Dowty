// Streams a remote video file through our own server with
// Content-Disposition: attachment, so the browser triggers a background
// download instead of navigating the current page to a cross-origin URL.
//
// Edge Runtime is required on Vercel: the default Node.js serverless
// runtime buffers the response body and enforces a small payload/time
// limit, which fails for anything but tiny files. Edge Runtime streams
// the body through directly.
export const runtime = "edge";

const ALLOWED_HOST_SUFFIXES = [
  "googlevideo.com",
  "googleusercontent.com",
  "ytimg.com",
  "youtube.com",
];

function isAllowedHost(hostname) {
  return ALLOWED_HOST_SUFFIXES.some(
    (suffix) => hostname === suffix || hostname.endsWith(`.${suffix}`)
  );
}

function sanitizeFilename(name) {
  const cleaned = (name || "video")
    .replace(/[^\w\s.-]/g, "")
    .trim()
    .slice(0, 120);
  return cleaned.toLowerCase().endsWith(".mp4") ? cleaned : `${cleaned}.mp4`;
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const videoUrl = searchParams.get("url");
  const filename = sanitizeFilename(searchParams.get("filename"));

  if (!videoUrl) {
    return Response.json({ error: "Missing url" }, { status: 400 });
  }

  let parsed;
  try {
    parsed = new URL(videoUrl);
  } catch {
    return Response.json({ error: "Invalid url" }, { status: 400 });
  }

  if (!isAllowedHost(parsed.hostname)) {
    return Response.json({ error: "Host not allowed" }, { status: 400 });
  }

  try {
    const upstream = await fetch(parsed.toString());

    if (!upstream.ok || !upstream.body) {
      return Response.json(
        { error: `Upstream fetch failed (${upstream.status})` },
        { status: 502 }
      );
    }

    const headers = new Headers();
    headers.set("Content-Type", upstream.headers.get("content-type") || "video/mp4");
    headers.set("Content-Disposition", `attachment; filename="${filename}"`);
    const length = upstream.headers.get("content-length");
    if (length) headers.set("Content-Length", length);

    return new Response(upstream.body, { headers });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
