// Curated static gallery. Source files live in `renewwebsite/` at the
// repo root; processed copies (EXIF-baked, downscaled to 1400px max,
// JPEG q=85) live in `public/images/gallery/`.

export type GalleryPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  // Optional CSS object-position override for the homepage gallery's
  // aspect-square crop. Defaults to "50% 50%" (center). Use "50% 25%"
  // or similar when the head sits high in the frame and centering
  // would chop hair; "50% 35%" when face is mid-upper, etc.
  objectPosition?: string;
};

export const gallery: GalleryPhoto[] = [
  // First six are what the homepage gallery surfaces (slice(0, 6)).
  // Shuffled order — alternates the two newest portraits with the
  // existing set so the grid doesn't read top-to-bottom chronological.
  { src: "/images/gallery/gallery-12.jpeg", alt: "Client cut by Kwest", width: 932, height: 1400, objectPosition: "50% 20%" },
  { src: "/images/gallery/gallery-03.jpeg", alt: "Client cut by Kwest", width: 1120, height: 1400 },
  { src: "/images/gallery/gallery-06.jpeg", alt: "Client cut by Kwest", width: 1050, height: 1400 },
  { src: "/images/gallery/gallery-11.jpeg", alt: "Client cut by Kwest", width: 788, height: 1051 },
  { src: "/images/gallery/gallery-01.jpeg", alt: "Client cut by Kwest", width: 1152, height: 1391 },
  { src: "/images/gallery/gallery-02.jpeg", alt: "Client cut by Kwest", width: 787, height: 1400 },
  { src: "/images/gallery/gallery-04.jpeg", alt: "Client cut by Kwest", width: 1120, height: 1400 },
  { src: "/images/gallery/gallery-05.jpeg", alt: "Client cut by Kwest", width: 787, height: 1400 },
  { src: "/images/gallery/gallery-07.jpeg", alt: "Client cut by Kwest", width: 933, height: 1400 },
  { src: "/images/gallery/gallery-08.jpeg", alt: "Client cut by Kwest", width: 1050, height: 1400 },
  { src: "/images/gallery/gallery-09.jpeg", alt: "Client cut by Kwest", width: 1050, height: 1400 },
  { src: "/images/gallery/gallery-10.jpeg", alt: "Client cut by Kwest", width: 1050, height: 1400 },
];
