// src/pages/index.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /app as soon as the page is loaded
    router.push("/app");
  }, [router]);

  return null; // We don't need to render anything here because we're redirecting
}
