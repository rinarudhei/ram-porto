import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function indexToNumberString(index: number): string {
  if (index < 10) {
    return `0${index}`;
  }

  return `${index}`;
}
