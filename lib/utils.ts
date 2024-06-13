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

// export const debounce = function <T extends (...args: any[]) => any>(
//   originalFun: T,
//   delay: number
// ) {
//   let timerId: NodeJS.Timeout;
//   return function (...args: Parameters<T>) {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       originalFun.apply(this, args);
//     }, delay);
//   };
// };

type Callback = (...args: unknown[]) => void;

interface DebounceFunction<F extends Callback> {
  (this: ThisParameterType<F>, ...args: Parameters<F>): void;
}

export const debounce = function <T extends Callback>(
  originalFun: T,
  delay: number
): DebounceFunction<T> {
  let timerId: NodeJS.Timeout;
  return function (...args: Parameters<T>) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      originalFun.apply(this, args);
    }, delay);
  };
};
