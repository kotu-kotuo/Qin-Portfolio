import { createClient } from "microcms-js-sdk";

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "qinp-blog", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_KEY,
});
