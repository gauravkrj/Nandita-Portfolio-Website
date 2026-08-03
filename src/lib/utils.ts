import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMetric(value: number, prefix = "", suffix = ""): string {
  return `${prefix}${value.toLocaleString()}${suffix}`;
}
