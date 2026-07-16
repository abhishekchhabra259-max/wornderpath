// WonderPath — Talking & Listening progression (single domain, v3 build)
//
// SOURCING PER RUNG:
// - "items": individual checkable behaviors, from CDC's Learn the Signs. Act Early.
//   checklists (verbatim/near-verbatim), split into separate items rather than bundled.
// - "depth": from Zero to Three's age-based family resources (zerotothree.org) — adds
//   context CDC doesn't provide. Independent source, not a CDC repeat.
// - "montessoriNote": HOW to present the activity well.
// - "activity": synthesized by me from the above three sources — the part your expert
//   reviewer should sanity-check first.
//
// Rung is considered "reached" if the parent checks ANY item in it — this avoids an
// all-or-nothing bundle where a child doing 2 of 3 things gets no credit for either.
//
// Age ranges exist for internal sequencing only — deliberately NOT shown to the parent,
// to avoid an explicit "here's what your child should be doing by this age" comparison.

const TALKING_LISTENING = [
  {
    id: "prelinguistic-sounds",
    ageRangeMonths: [6, 11],
    items: ["Makes different sounds, like \"mamama\" and \"babababa\"", "Lifts arms to be picked up"],
    depth: "Babies move from babbling to consonant-vowel sounds (da, ma, ba), and from grunting for what they want to reaching or pointing toward it. (Zero to Three)",
    montessoriNote: "Respond to every sound as if it's meaningful conversation — this teaches turn-taking in dialogue before real words exist.",
    activity: "Describe what your baby is looking at out loud — \"red, round ball\" — and pause after, giving him space to babble back.",
    searchQuery: "baby high contrast picture book",
    nextRungId: "first-words-understanding"
  },
  {
    id: "first-words-understanding",
    ageRangeMonths: [11, 15],
    items: ["Waves \"bye-bye\"", "Calls a parent \"mama\" or \"dada\" or another special name", "Understands \"no\" (pauses briefly or stops when you say it)"],
    depth: "Understanding grows faster than speaking at this stage — some children say a first word as early as 9 months, others not until 18. What matters is steady forward movement, not the exact month. (Zero to Three)",
    montessoriNote: "Name objects simply and clearly during daily routines (\"cup,\" \"shoe\") rather than quizzing — let the child absorb language rather than perform it.",
    activity: "Talk or sing about what you're doing as you do it — \"Mommy is washing your hands\" — matching words to real actions in real time.",
    searchQuery: "toddler first picture board book",
    nextRungId: "single-word-requests"
  },
  {
    id: "single-word-requests",
    ageRangeMonths: [15, 20],
    items: ["Tries to say three or more words besides \"mama\" or \"dada\"", "Follows one-step directions without any gestures"],
    depth: "Vocabulary is typically around 20-50 words in this window. Toddlers also communicate heavily through gesture — leading you by the hand to what they want counts as real communication, even before the words catch up.",
    montessoriNote: "Never correct pronunciation directly. If she says \"wa-wa,\" respond with \"yes, water\" — modeling the correct word without making the attempt feel wrong.",
    activity: "Build on what your child tries to say — if he says \"truck,\" say \"Yes, that's a big blue truck,\" adding one layer of detail to his own word.",
    searchQuery: "toddler word learning flashcards",
    nextRungId: "book-engagement"
  },
  {
    id: "book-engagement",
    ageRangeMonths: [18, 24],
    items: ["Looks at a few pages in a book with you"],
    depth: "Around this age, children often start turning pages themselves or holding a book as if \"reading,\" may say the word \"book,\" and often show a preference for one specific book at bedtime. (Zero to Three)",
    montessoriNote: "Let the child choose the book and control the pace of page-turning — following her interest builds more engagement than a fixed reading routine.",
    activity: "Read the same book on request, as many times as asked — repetition is how early vocabulary and story structure are absorbed at this age, not a sign of running out of ideas.",
    searchQuery: "toddler board book set",
    nextRungId: "two-word-combinations"
  },
  {
    id: "two-word-combinations",
    ageRangeMonths: [22, 27],
    items: ["Says at least two words together, like \"more milk\"", "Points to at least two body parts when asked", "Uses more gestures than just waving and pointing, like nodding yes or blowing a kiss"],
    depth: "It helps to separate receptive vocabulary (what a child understands) from expressive vocabulary (what they can say) — a child can follow multi-step spoken instructions well before they can produce the words themselves, and that gap is normal, not a concern on its own. (Zero to Three)",
    montessoriNote: "Offer real, specific vocabulary rather than simplified baby-talk substitutes — name things precisely (\"golden retriever,\" not just \"doggie\") since toddlers absorb real words easily.",
    activity: "Sing songs like \"Head, Shoulders, Knees, and Toes\" to reinforce body-part names — pause partway through and see if she fills in the next word.",
    searchQuery: "toddler repetitive story board book",
    nextRungId: "vocabulary-expansion"
  },
  {
    id: "vocabulary-expansion",
    ageRangeMonths: [26, 32],
    items: ["Says about 50 words", "Combines two or more words with an action word, like \"doggie run\"", "Names things in a book when asked \"what is this?\"", "Uses words like \"I,\" \"me,\" or \"we\""],
    depth: "Vocabulary tends to grow quickly through this window — commonly into the 200-300 word range by roughly two and a half. Speed varies a lot child to child and isn't itself a sign of anything.",
    montessoriNote: "Point-and-name games work best when the child initiates them — following her question (\"what's that?\") teaches more than prompting yours.",
    activity: "Ask open questions about pictures in a book — \"what do you think happens next?\" — rather than only naming objects, to build early narrative thinking.",
    searchQuery: "toddler picture book set",
    nextRungId: "story-anticipation"
  },
  {
    id: "story-anticipation",
    ageRangeMonths: [30, 36],
    items: ["Says what action is happening in a picture or book when asked, like \"running\" or \"eating\""],
    depth: "Many children begin anticipating a familiar story at this stage — saying a key line just before it comes up in a repeated book — and may start pretending to \"read\" a book on their own or tell simple stories in their own words. (Zero to Three)",
    montessoriNote: "Let the child \"read\" the book back to you in her own words before you read the real text — this builds narrative confidence independent of literacy skill.",
    activity: "Read the same favorite story often enough that your child starts finishing familiar lines — then pause right before those lines and let her fill them in.",
    searchQuery: "toddler early reader story book",
    nextRungId: "conversational-exchange"
  },
  {
    id: "conversational-exchange",
    ageRangeMonths: [34, 40],
    items: ["Talks in conversation using at least two back-and-forth exchanges", "Asks \"who,\" \"what,\" \"where,\" and \"why\" questions", "Says first name when asked", "Talks well enough for others to understand most of the time"],
    depth: "Total vocabulary is commonly reported in the 500+ word range by age three, with clearer sentence structure and simple grammar. This is also typically when a toddler starts asking genuine questions rather than only naming things.",
    montessoriNote: "Answer \"why\" questions honestly and simply rather than deflecting — genuine back-and-forth conversation at this stage is what builds real conversational confidence, more than correctness of the answer.",
    activity: "Play simple opposite games — \"I am small\" (crouch down), \"I am big\" (stand up) — same for fast/slow, quiet/loud — building descriptive vocabulary through physical contrast.",
    searchQuery: "toddler question asking games",
    nextRungId: null
  }
];

function getRungById(id) {
  return TALKING_LISTENING.find(r => r.id === id);
}

function getRungsNearAge(ageMonths) {
  let match = TALKING_LISTENING.find(r => ageMonths >= r.ageRangeMonths[0] && ageMonths < r.ageRangeMonths[1]);
  if (!match) {
    match = ageMonths < TALKING_LISTENING[0].ageRangeMonths[0]
      ? TALKING_LISTENING[0]
      : TALKING_LISTENING[TALKING_LISTENING.length - 1];
  }
  return match;
}

// Returns a merged, flat list of items from a window of rungs around the child's age,
// WITHOUT exposing which rung (i.e. which "expected age") each item belongs to.
// This is the anxiety-reduction fix: no visible age-anchor on the checklist screen.
function getChecklistWindow(ageMonths, expandLevel) {
  const matchedIdx = TALKING_LISTENING.findIndex(r => r.id === getRungsNearAge(ageMonths).id);
  const startIdx = Math.max(0, matchedIdx - 1); // one rung below by default, broadens the band
  const endIdx = Math.min(TALKING_LISTENING.length - 1, matchedIdx + expandLevel);
  const rungs = TALKING_LISTENING.slice(startIdx, endIdx + 1);
  const flatItems = [];
  rungs.forEach(r => {
    r.items.forEach(item => flatItems.push({ text: item, rungId: r.id }));
  });
  return { flatItems, canExpandMore: endIdx < TALKING_LISTENING.length - 1 };
}
