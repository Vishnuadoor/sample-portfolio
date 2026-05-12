import { Instrument_Serif, JetBrains_Mono, Outfit } from 'next/font/google';

export const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--font-instrument-serif',
});

export const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});
