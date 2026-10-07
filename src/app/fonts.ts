import { Chakra_Petch, Space_Grotesk } from "next/font/google";

/*
 * Chakra Petch is the squared-off, slightly technical display face the headings
 * and buttons are set in - it carries the futuristic register without tipping
 * into sci-fi costume. Space Grotesk carries body text, because a whole privacy
 * policy set in a display face is a punishment.
 *
 * `latin-ext` is not optional: Turkish (ş ğ ı İ) and Polish (ą ę ł ń ś ź ż) are
 * outside `latin`, and without it those letters fall back to a system face in the
 * middle of a word.
 */
const chakra = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** The class list `<html>` carries on every page. */
export const fontClasses = `${chakra.variable} ${grotesk.variable} h-full antialiased`;

/**
 * Marks the document as scripted before first paint, which is what the
 * scroll-reveal rules key off. Inline and synchronous on purpose: as a
 * deferred module it would run after paint and every section would
 * visibly blink out and back in.
 */
export const markScripted = `document.documentElement.classList.add('js')`;
