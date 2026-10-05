// Shared community links + recurring-event details, used by the promo banner and footer.

export const DISCORD_URL = "https://discord.gg/TPkUw4VSBg";

/** The weekly draft night. */
export const WEEKLY_DRAFT = {
  day: "Wednesday",
  time: "6:00pm",
  venue: "Jolt",
} as const;

/** e.g. "Wednesdayy 6:00pm @ Jolt" */
export const WEEKLY_DRAFT_LINE = `${WEEKLY_DRAFT.day} ${WEEKLY_DRAFT.time} @ ${WEEKLY_DRAFT.venue}`;
