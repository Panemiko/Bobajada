import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...params: ClassValue[]) {
  return twMerge(clsx(params));
}

export function getBaseUrl() {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT}`; // dev SSR should use localhost
}
