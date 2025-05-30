import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and merges Tailwind CSS classes with twMerge
 * to resolve conflicts and duplicates.
 * 
+ * @param inputs - Class values to combine and merge
+ * @returns Merged class string
+ */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 