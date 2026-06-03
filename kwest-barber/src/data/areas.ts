// City pages — the area-page tier of the long-tail SEO strategy.
// Each entry is a city Kwest realistically serves within a ~25-minute drive
// of Boca Raton. Content is written to be locally relevant without
// fabricating specifics that could read as wrong to residents.

export type Area = {
  slug: string;
  name: string;
  shortName: string;
  // Approximate drive time from Boca Raton, used in copy and schema.
  driveMinutes: number;
  // Direction relative to Boca (for natural copy).
  direction: "north" | "south" | "west" | "east" | "local";
  // One-paragraph local intro — keep generic where unsure.
  intro: string;
  // Why a client from this area would drive to Kwest.
  pitch: string;
};

export const areas: Area[] = [
  {
    slug: "boca-raton",
    name: "Boca Raton",
    shortName: "Boca Raton",
    driveMinutes: 0,
    direction: "local",
    intro:
      "Boca Raton is the home shop. Most regulars are from the surrounding zip codes and book on a 2-to-4-week rotation. Walk-ins welcome when the chair is open; appointments preferred for the LUX Special, hot-towel shave, and after-hours service.",
    pitch:
      "If you live or work in Boca, the chair is fifteen minutes from most of the city. Book a Haircut or Haircut and Beard for the standard rotation, or the LUX Special when you need everything handled in one sitting.",
  },
  {
    slug: "highland-beach",
    name: "Highland Beach",
    shortName: "Highland Beach",
    driveMinutes: 8,
    direction: "east",
    intro:
      "Highland Beach is a short drive east of the shop along A1A. Many Highland Beach clients prefer late-morning or early-evening bookings to avoid mid-day beach traffic.",
    pitch:
      "Closest neighbour to the chair. Standard cuts run a 2-to-4-week rotation; House Call VIP is the move if you'd rather Kwest come to you.",
  },
  {
    slug: "delray-beach",
    name: "Delray Beach",
    shortName: "Delray Beach",
    driveMinutes: 12,
    direction: "north",
    intro:
      "Delray Beach sits about fifteen minutes up the coast from Boca. A large share of Kwest's standing roster commutes south from Delray for cuts, particularly on Saturday mornings.",
    pitch:
      "Atlantic Avenue traffic adds a few minutes Friday and Saturday — book mid-week if your schedule allows. The LUX Special is the most-booked appointment among the Delray regulars.",
  },
  {
    slug: "boynton-beach",
    name: "Boynton Beach",
    shortName: "Boynton Beach",
    driveMinutes: 22,
    direction: "north",
    intro:
      "Boynton Beach is north of Delray and about twenty-five minutes from the shop on a normal day. Worth the drive for clients who'd rather have one barber long-term than rotate through closer chairs.",
    pitch:
      "Most Boynton regulars book the Haircut and Beard combo on a three-week rotation. The After Hours Haircut is the answer if you work overnight shifts and can't make a daytime slot.",
  },
  {
    slug: "deerfield-beach",
    name: "Deerfield Beach",
    shortName: "Deerfield Beach",
    driveMinutes: 10,
    direction: "south",
    intro:
      "Deerfield Beach is the closest Broward-county neighbour, about ten minutes south. Easy hop on I-95 or Federal Highway depending on time of day.",
    pitch:
      "If you're in Deerfield, the chair is closer than most options in your own city. Walk-ins are welcome — call ahead if you need a specific window.",
  },
  {
    slug: "lighthouse-point",
    name: "Lighthouse Point",
    shortName: "Lighthouse Point",
    driveMinutes: 15,
    direction: "south",
    intro:
      "Lighthouse Point is fifteen minutes south of the shop on Federal Highway. Smaller city, tight-knit client base — many Lighthouse Point regulars came in originally on a neighbour's referral.",
    pitch:
      "Standard rotation works well for Lighthouse Point clients given the drive. Book the LUX Special when you want to make the trip count.",
  },
  {
    slug: "pompano-beach",
    name: "Pompano Beach",
    shortName: "Pompano Beach",
    driveMinutes: 20,
    direction: "south",
    intro:
      "Pompano Beach is twenty minutes south of Boca. Broward county clients who want a Palm Beach county barber typically pick Kwest because the drive is shorter than going further into Fort Lauderdale.",
    pitch:
      "The Hot Towel Shave & Haircut is the most-asked-about service from Pompano clients. Book a week out for weekend availability.",
  },
  {
    slug: "coral-springs",
    name: "Coral Springs",
    shortName: "Coral Springs",
    driveMinutes: 25,
    direction: "west",
    intro:
      "Coral Springs sits about twenty-five minutes west of Boca. Most Coral Springs clients book either the Haircut and Beard combo or the LUX Special — services worth the drive.",
    pitch:
      "If you're in Coral Springs, set a recurring monthly slot rather than booking visit-by-visit. The chair fills up two weeks out, so standing appointments make the drive predictable.",
  },
  {
    slug: "coconut-creek",
    name: "Coconut Creek",
    shortName: "Coconut Creek",
    driveMinutes: 18,
    direction: "west",
    intro:
      "Coconut Creek is about twenty minutes southwest of the shop. A practical alternative to Coral Springs for clients on the eastern side of the city.",
    pitch:
      "Three-week rotation works well from Coconut Creek. Book the Haircut and Beard if you maintain a beard, the Haircut on its own if you don't.",
  },
  {
    slug: "parkland",
    name: "Parkland",
    shortName: "Parkland",
    driveMinutes: 20,
    direction: "west",
    intro:
      "Parkland is a twenty-minute drive west. Most Parkland clients prefer late-afternoon or weekend bookings around school and work schedules.",
    pitch:
      "Kids Haircut bookings are common from Parkland clients — schedule the appointment around school pickup if that's the easier window.",
  },
  {
    slug: "margate",
    name: "Margate",
    shortName: "Margate",
    driveMinutes: 22,
    direction: "south",
    intro:
      "Margate is about twenty-two minutes south of the shop. Worth the drive if you want one consistent barber on the Palm Beach / Broward line.",
    pitch:
      "Margate regulars typically book on a three-week rotation. Same booking flow as everyone else — Squire handles it.",
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
