import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const readFileAsDataURL = (file: File | Blob): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') resolve(reader.result);
    };
    reader.readAsDataURL(file);
  });
};

export const debounce = function <T extends (...args: unknown[]) => unknown>(
  originalFun: T,
  delay: number
) {
  let timerId: NodeJS.Timeout;
  return function (...args: Parameters<T>) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      originalFun.apply(this, args);
    }, delay);
  };
};
