// cPanel's "Setup Node.js App" (Phusion Passenger) runs this file directly
// and expects the app to listen on the PORT it provides via process.env.PORT.
// This wraps Next.js's programmatic server API so it works under Passenger.

const { createServer } = require("http");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(process.env.PORT || 3000, () => {
    console.log(`Server ready on port ${process.env.PORT || 3000}`);
  });
});
