// Curated static gallery — no third-party embed, no API token, no
// runtime dependency. Update by dropping a processed JPEG into
// public/images/gallery/ and adding an entry below.

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export const gallery: GalleryPhoto[] = [
  {
    src: "/images/gallery/client-mid-fade-front.jpeg",
    alt: "Front portrait of a client after a mid-fade cut.",
    caption: "Mid Fade",
    width: 933,
    height: 1400,
  },
  {
    src: "/images/gallery/client-mid-fade-side.jpeg",
    alt: "Side portrait of a client after a mid-fade cut.",
    caption: "Mid Fade — side",
    width: 933,
    height: 1400,
  },
  {
    src: "/images/gallery/client-mid-fade-portrait.jpeg",
    alt: "Portrait of a client after a mid-fade and beard sculpt.",
    caption: "Mid Fade + Beard",
    width: 933,
    height: 1400,
  },
];
