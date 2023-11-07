import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...params: ClassValue[]) {
  return twMerge(clsx(params));
}
