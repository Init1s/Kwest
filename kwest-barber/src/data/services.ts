// Source of truth for all service pages. Order here drives sitemap order.
// Prices and durations mirror what's listed on the home Services section
// (which itself mirrors Squire). Keep in sync if Squire changes.

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  price: string;
  priceNumeric: number;
  duration: string;
  durationMinutes: number;
  description: string;
  process: string[];
  bestFor: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "the-lux-special",
    name: "The LUX Special",
    shortName: "LUX Special",
    price: "$130",
    priceNumeric: 130,
    duration: "1 hr 30 min",
    durationMinutes: 90,
    description:
      "The complete experience and the most-booked service in the chair. Cut, beard sculpt, hot-towel finish, and a styled close — slow, precise, no shortcuts. Built for clients who want every detail handled in one sitting.",
    process: [
      "Consultation — head shape, hair texture, goals.",
      "Fade or clipper work tailored to the cut.",
      "Beard sculpt with line-up and edge.",
      "Hot towel application to soften the skin.",
      "Straight razor finish on the lines.",
      "Style, product, and final inspection.",
    ],
    bestFor: [
      "Special occasions (weddings, photoshoots, interviews).",
      "Clients who want the full experience, not a quick cut.",
      "First-time visitors who want to see the standard.",
    ],
    faqs: [
      {
        q: "How is this different from a Haircut and Beard?",
        a: "The LUX Special adds the hot towel treatment and straight-razor finish on top of the cut and beard work. It's a slower, more deliberate appointment built for occasions where you want every detail right.",
      },
      {
        q: "Do I need to book ahead?",
        a: "Yes. The LUX Special blocks 90 minutes in the chair and tends to be the first booking to fill up. Book at least a week out for weekends.",
      },
    ],
  },
  {
    slug: "house-call-vip",
    name: "House Call VIP",
    shortName: "House Call",
    price: "$150",
    priceNumeric: 150,
    duration: "2 hr 30 min",
    durationMinutes: 150,
    description:
      "Private on-location service. Kwest brings the chair and the standards to your home, office, or venue. Built for clients who want the full barbershop experience without leaving the building — common for wedding parties, executives between meetings, and clients with mobility constraints.",
    process: [
      "Coordinate location and setup needs in advance.",
      "Kwest arrives with chair, tools, and prep equipment.",
      "Full cut, beard, and finish performed on site.",
      "Workspace cleaned before departure.",
    ],
    bestFor: [
      "Wedding parties on the day of the event.",
      "Executives with tight calendars.",
      "Anyone who cannot make it to the shop.",
    ],
    faqs: [
      {
        q: "What is the travel area?",
        a: "Standard House Call coverage is Palm Beach and northern Broward county. Locations outside that radius can be quoted on request.",
      },
      {
        q: "How far in advance should I book?",
        a: "Two weeks minimum for weekends. Same-day House Calls are rare but occasionally possible — message on Instagram if the situation is urgent.",
      },
    ],
  },
  {
    slug: "after-hours-haircut",
    name: "After Hours Haircut",
    shortName: "After Hours",
    price: "$100",
    priceNumeric: 100,
    duration: "1 hr 30 min",
    durationMinutes: 90,
    description:
      "Private appointment outside of standard shop hours. Built for clients with schedules that don't fit a Tuesday-to-Saturday slot — overnight workers, traveling clients, anyone who wants the chair to themselves with no waiting room around them.",
    process: [
      "Schedule confirmed by direct message.",
      "Shop opened only for the booked client.",
      "Full cut and beard, same standards as a daytime visit.",
    ],
    bestFor: [
      "Travelers passing through with limited windows.",
      "Clients on overnight shift schedules.",
      "Anyone wanting a private appointment with no foot traffic.",
    ],
    faqs: [
      {
        q: "What counts as after-hours?",
        a: "Any appointment outside Tuesday–Saturday business hours. Late-night, very early morning, or Sunday / Monday (the shop's closed days) all qualify.",
      },
    ],
  },
  {
    slug: "hot-towel-shave-and-haircut",
    name: "Hot Towel Shave & Haircut",
    shortName: "Hot Towel Shave + Haircut",
    price: "$85",
    priceNumeric: 85,
    duration: "1 hr 15 min",
    durationMinutes: 75,
    description:
      "Cut paired with a traditional hot-towel straight-razor shave. The shave is the slow part — towels, lather, two passes with the blade, balm. Built for clients who want the old-school barbershop ritual in addition to the cut.",
    process: [
      "Cut performed first.",
      "Hot towel application to open pores and soften the beard.",
      "Lather and straight-razor shave, with-the-grain pass.",
      "Second hot towel, then against-the-grain refinement.",
      "Cold towel and balm to close pores and finish.",
    ],
    bestFor: [
      "Clients who shave at home but want the real thing periodically.",
      "Special occasions where the close shave matters.",
      "Anyone curious about the traditional barbershop ritual.",
    ],
    faqs: [
      {
        q: "Is this safe for sensitive skin?",
        a: "Yes — the hot-towel-and-prep step exists exactly to handle sensitive skin. If you have a known irritation issue, mention it during consultation and the prep is adjusted accordingly.",
      },
      {
        q: "Can I just get the shave without the cut?",
        a: "Booking is currently bundled with the haircut. Message via Instagram if you want a shave-only appointment quoted.",
      },
    ],
  },
  {
    slug: "scissor-cut",
    name: "Scissor Cut",
    shortName: "Scissor Cut",
    price: "$60",
    priceNumeric: 60,
    duration: "1 hr 30 min",
    durationMinutes: 90,
    description:
      "All-scissor work for textured cuts, longer styles, and clients who don't want clippers near their head. Slower than a clipper cut by design — every section is hand-cut, hand-checked, and refined.",
    process: [
      "Consultation on length and texture goals.",
      "Sectioning and tension cutting throughout.",
      "Texturizing and point-cutting for natural movement.",
      "Style, product, and final inspection.",
    ],
    bestFor: [
      "Curly, coily, and textured hair styles.",
      "Longer cuts grown out past clipper length.",
      "Clients who specifically want a no-clipper approach.",
    ],
    faqs: [
      {
        q: "Why does it take 90 minutes?",
        a: "Scissor work is slower than clipper work — each section gets attention. The duration is honest, not padded. If you book a 60-minute slot expecting all-scissor it will run short.",
      },
    ],
  },
  {
    slug: "haircut-and-beard",
    name: "Haircut and Beard",
    shortName: "Haircut + Beard",
    price: "$60",
    priceNumeric: 60,
    duration: "1 hr",
    durationMinutes: 60,
    description:
      "Full cut paired with a clean beard sculpt and edge-up. The standard combo for clients who maintain a beard — same precision on both, finished together so the cut and the beard line up properly.",
    process: [
      "Cut performed first.",
      "Beard shaped to face structure.",
      "Cheek and neck lines defined with the straight razor.",
      "Beard oil applied to finish.",
    ],
    bestFor: [
      "Regular clients on a 2–4 week rotation.",
      "Anyone who maintains a beard and wants both done in one visit.",
    ],
    faqs: [
      {
        q: "How often should I book this combo?",
        a: "Every 2–4 weeks depending on how fast your hair and beard grow. Most regulars are on a 3-week rotation.",
      },
    ],
  },
  {
    slug: "haircut",
    name: "Haircut",
    shortName: "Haircut",
    price: "$45",
    priceNumeric: 45,
    duration: "1 hr",
    durationMinutes: 60,
    description:
      "A sharp, tailored cut built around your head shape and hair texture. Consultation included. The foundation service — what most new clients book first.",
    process: [
      "Consultation — what you want, what works, what won't.",
      "Cut, fade, or tapered work as discussed.",
      "Line-up and edge.",
      "Style and product.",
    ],
    bestFor: [
      "First-time visitors.",
      "Clients without a beard or who maintain it themselves.",
      "Regular maintenance between LUX visits.",
    ],
    faqs: [
      {
        q: "How often should I get a haircut?",
        a: "Every 2–4 weeks for most cuts. Tighter fades need a touch-up around the 2-week mark; longer styles can stretch to 4–6 weeks. The cut you book determines the rotation.",
      },
    ],
  },
  {
    slug: "kids-haircut",
    name: "Kids Haircut",
    shortName: "Kids Haircut",
    price: "$35",
    priceNumeric: 35,
    duration: "45 min",
    durationMinutes: 45,
    description:
      "Patient, clean cuts for kids 14 and under. Same precision, same standards, with the pace and attention adjusted for younger clients. First-time-in-the-chair appointments are welcome.",
    process: [
      "Brief intro and consultation with parent and child.",
      "Cut performed at a calm pace.",
      "Style and final inspection together.",
    ],
    bestFor: [
      "Kids' first real barbershop visit.",
      "Regular maintenance cuts for school-age kids.",
    ],
    faqs: [
      {
        q: "What ages does this cover?",
        a: "14 and under. Anyone 15+ books a standard Haircut at $45.",
      },
      {
        q: "Can a parent stay in the chair area?",
        a: "Absolutely. First visits especially — many kids do better with a parent nearby.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
