import localFont from "next/font/local";

export const NeueMontreal = localFont({
  src: [
    {path: "./fonts/PPNeueMontreal-Bold.otf", weight: "700", style: "normal"},
    {path: "./fonts/PPNeueMontreal-Medium.otf", weight: "500", style: "normal"},
    {path: "./fonts/PPNeueMontreal-Book.otf", weight: "300", style: "normal"},
    {path: "./fonts/PPNeueMontreal-Thin.otf", weight: "200", style: "normal"},
    {path: "./fonts/PPNeueMontreal-Italic.otf", weight: "400", style: "italic"},
    {path: "./fonts/PPNeueMontreal-SemiBolditalic.otf", weight: "600", style: "italic"},
  ],
  display: "swap",
  variable: "--font-neue-montreal",
});

export const EditorialNew = localFont({
  src: [
    {path: "./fonts/PPEditorialNew-Ultrabold.otf", weight: "800", style: "normal"},
    {path: "./fonts/PPEditorialNew-Regular.otf", weight: "500", style: "normal"},
    {path: "./fonts/PPEditorialNew-Ultralight.otf", weight: "100", style: "normal"},
    {path: "./fonts/PPEditorialNew-UltraboldItalic.otf", weight: "800", style: "italic"},
    {path: "./fonts/PPEditorialNew-Italic.otf", weight: "500", style: "italic"},
    {path: "./fonts/PPEditorialNew-UltralightItalic.otf", weight: "100", style: "italic"},
  ],
  display: "swap",
  variable: "--font-editorial-new",
})
