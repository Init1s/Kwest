// AEO question pages — answer-engine-optimised content with FAQPage
// structured data. Each entry follows the same pattern:
//   - summary: 40-80 words, the direct answer (this is what voice
//     assistants and AI overviews quote).
//   - body: longer detail in 2-4 paragraphs.
//   - relatedServices: slugs that link back into the booking flow.

export type Answer = {
  slug: string;
  question: string;
  summary: string;
  body: string[];
  relatedServices: string[];
};

export const answers: Answer[] = [
  {
    slug: "how-often-should-you-get-a-fade",
    question: "How often should you get a fade?",
    summary:
      "Most fades hold their shape for two to three weeks. Skin fades and high fades need a touch-up around week two; mid and low fades stretch to three weeks comfortably. If you're growing the top out, the fade still needs maintenance even when the top doesn't.",
    body: [
      "The fade is the part of the cut that loses definition fastest — it's where the hair transitions from skin or short clipper length up to longer hair, and growth at the bottom of the fade is the most visible. Even a quarter-inch of growth blurs the line.",
      "Two to three weeks is the standard rotation. Tighter fades (skin, high) trend toward the two-week side; mid and low fades hold a little longer. Hair growth rate varies — about a quarter to a half inch per month is typical — so your own rate may pull the schedule one way or the other.",
      "If you're growing the top out, a lot of clients try to skip fade maintenance to let the whole cut grow together. That usually backfires — the top grows in proportion, but the fade grows away from its line. A touch-up on the sides every three weeks keeps the cut sharp while the top progresses.",
    ],
    relatedServices: ["haircut", "haircut-and-beard"],
  },
  {
    slug: "what-is-a-mid-fade-vs-low-fade",
    question: "What's the difference between a mid fade and a low fade?",
    summary:
      "The fade line position is the difference. A low fade starts about an inch above the ear; a mid fade starts at the temple — about halfway up the side of the head. Mid fades show more skin and read as more dramatic; low fades are subtle and easier to grow out.",
    body: [
      "The fade line is the highest point on the side of the head where the hair fades down to skin or near-skin. Where that line sits is what makes a fade low, mid, or high.",
      "A low fade starts about an inch above the ear and curves around the back. It's the most conservative of the three — a lot of hair remains on the sides, and the contrast between top and side is gentle. Easy to maintain, easy to grow out, fits any face shape.",
      "A mid fade puts the line at the temple — roughly halfway between the ear and the top of the head. It shows more skin around the side and pulls the eye up. More dramatic than a low fade, but still flexible enough for office and event settings.",
      "Which one is right for you usually comes down to head shape, hair texture on top, and how often you want to book maintenance. Consultation covers it in the first five minutes of any appointment.",
    ],
    relatedServices: ["haircut", "the-lux-special"],
  },
  {
    slug: "how-much-does-a-mens-haircut-cost-in-boca-raton",
    question: "How much does a men's haircut cost in Boca Raton?",
    summary:
      "Men's haircuts in Boca Raton typically run from $30 at chain barbershops up to $130 or more for premium full-service appointments. Kwest The Barber charges $45 for a standard Haircut and $130 for the LUX Special, which adds a beard sculpt, hot-towel, and finishing work.",
    body: [
      "Boca Raton has a wide range of barbershops at every price point. Chain shops typically run $25–$35 for a basic cut. Independent neighborhood shops sit in the $40–$60 range. Premium and appointment-only shops can run $80 and up, especially for full-service appointments that include beard work and a hot-towel finish.",
      "At Kwest The Barber, the price ladder is straightforward: $35 for a Kids Haircut, $45 for a standard adult Haircut, $60 for Haircut and Beard or Scissor Cut, $85 for Hot Towel Shave and Haircut, $100 for After Hours, $130 for the LUX Special (the most-booked appointment), and $150 for House Call VIP.",
      "Booking is handled through Squire and pricing is locked at the time of the appointment — no surprise upcharges in the chair.",
    ],
    relatedServices: ["haircut", "the-lux-special", "haircut-and-beard"],
  },
  {
    slug: "best-barber-for-textured-and-curly-hair-in-south-florida",
    question: "What's the best barber for textured and curly hair in South Florida?",
    summary:
      "Look for a barber whose portfolio includes textured cuts as the rule, not the exception. Specifically: clean curl definition without flattened tops, sharp fades that don't fight the texture, and an all-scissor option for clients who don't want clippers on top. Kwest The Barber in Boca Raton specialises in textured cuts and offers a dedicated Scissor Cut service.",
    body: [
      "Textured and curly hair behaves differently than straight hair under clippers. A barber who's spent most of their career on straight cuts will often over-clipper a curly top, leaving the curl pattern flattened or uneven. The cut needs to be approached differently — looser tension, more scissor work, more frequent check-ins as the cut progresses.",
      "Two things to look for in a barber's portfolio: textured cuts that retain definition rather than reading 'pressed flat,' and fades that taper into the texture instead of cutting hard against it. Both come from spending real chair-time with textured hair, not from watching tutorials.",
      "At Kwest The Barber, the Scissor Cut is built specifically for textured and longer curly styles — all hand-cut, no clippers on top. The standard Haircut and the LUX Special also handle textured cuts; the consultation is where the approach gets calibrated to your specific texture and density.",
    ],
    relatedServices: ["scissor-cut", "haircut", "the-lux-special"],
  },
  {
    slug: "walk-in-vs-appointment-barber",
    question: "Walk-in or appointment — which is better for a barber visit?",
    summary:
      "Appointments win for predictability and quality. Walk-ins win when you have a flexible window and don't mind waiting. For premium services (full-service cuts, hot-towel shaves, anything over an hour), always book — those slots are not held for walk-ins. For a standard cut on a slow weekday, walk-in works if the chair is open.",
    body: [
      "An appointment guarantees you a specific time and a barber's full attention. Premium services — full-service appointments, hot-towel shaves, beard sculpts — are nearly always appointment-only because they need the chair blocked for 60–90 minutes. Without a booking, the barber can't commit to that block.",
      "Walk-ins are useful when your schedule is flexible. If you're in the neighborhood and the chair is open, you'll get the same cut at the same price. The catch is uncertainty — you might wait, you might get turned away, you might be slotted between two appointments.",
      "At Kwest The Barber, walk-ins are welcome when the chair is open. For The LUX Special, Hot Towel Shave, Scissor Cut, and After Hours appointments, book ahead — these are not held for walk-ins.",
    ],
    relatedServices: ["haircut", "the-lux-special"],
  },
  {
    slug: "how-to-prep-for-your-first-barbershop-visit",
    question: "How do I prep for my first barbershop visit?",
    summary:
      "Show up with hair clean and dry (or at least clean), a few reference photos of cuts you like, a sense of how often you can come back for maintenance, and a few extra minutes for the consultation. That's it. The barber handles the rest.",
    body: [
      "Hair should be clean — washed in the last 24 hours — and dry on arrival. Product can be in (it usually is) but the cleaner the canvas, the better the cut. If your hair is wet from showering before the appointment, that's fine too; the barber will work with whatever state it's in.",
      "Reference photos help. A few shots of cuts you like — front, side, and back if possible — communicate ten times better than words. The barber will tell you which references are realistic for your hair texture and head shape, and which ones aren't.",
      "Be honest about how often you can come back. A cut that needs a two-week touch-up isn't the right cut for someone who can only book monthly. The barber will adjust the recommendation based on your real rotation.",
      "Budget a few extra minutes for the consultation on your first visit. Five to ten minutes of conversation up front saves an hour of fixing things later.",
    ],
    relatedServices: ["haircut", "the-lux-special"],
  },
];

export function getAnswer(slug: string): Answer | undefined {
  return answers.find((a) => a.slug === slug);
}
