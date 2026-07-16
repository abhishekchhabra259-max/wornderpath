// WonderPath — Moving & Doing progression (fourth domain, v3 build)
//
// SOURCING PER RUNG (same discipline as the other three domains):
// - "items": individual behaviors from CDC's Learn the Signs. Act Early. checklists.
// - "depth": from Zero to Three's family resources where specifically available;
//   otherwise a well-corroborated general fact (multiple independent sources agree),
//   noted honestly rather than falsely attributed to Zero to Three alone.
// - "montessoriNote": HOW to support the behavior — real child-sized tools, practical
//   life exercises, unhurried repetition.
// - "activity": synthesized by me from the above — flag for expert review.
//
// Rung reached if parent checks ANY item in it (partial credit).
// Age ranges are internal only — never shown to the parent.

const MOVING_DOING = [
  {
    id: "hand-transfer-sitting",
    ageRangeMonths: [6, 11],
    items: ["Moves things from one hand to her other hand", "Sits without support", "Gets to a sitting position by herself"],
    depth: "The pincer grasp — using thumb and forefinger together — typically emerges around 7-9 months, right alongside the ability to sit independently. Both are foundational: sitting frees the hands to explore, and the pincer grip opens up small-object play.",
    montessoriNote: "Offer objects just past your baby's current reach rather than handing everything directly — this builds the reaching, sitting, and transferring skills together, at his own pace.",
    activity: "Place a few safe objects slightly out of easy reach while your baby is sitting, and let her practice reaching, transferring hand to hand, and exploring each one.",
    searchQuery: "baby sensory toy set",
    nextRungId: "cruising-pincer-grip"
  },
  {
    id: "cruising-pincer-grip",
    ageRangeMonths: [9, 15],
    items: ["Pulls up to stand", "Walks, holding on to furniture", "Picks things up between thumb and pointer finger, like small bits of food"],
    depth: "Most babies begin cruising along furniture between 10-12 months, and this is also typically when the pincer grasp becomes reliable enough for small finger foods. The two skills reinforce each other — furniture-holding frees balance practice while the hands do fine work.",
    montessoriNote: "Arrange low, sturdy furniture in a row so your baby can cruise safely from one piece to the next, rather than relying on your hand for support.",
    activity: "Offer small, safe finger foods (soft fruit pieces, cooked pasta) to practice the pincer grasp, and set up furniture at a safe cruising height nearby.",
    searchQuery: "baby push along walker toy",
    nextRungId: "independent-walking-self-feeding"
  },
  {
    id: "independent-walking-self-feeding",
    ageRangeMonths: [14, 20],
    items: ["Walks without holding on to anyone or anything", "Drinks from a cup without a lid, may spill sometimes", "Feeds himself with his fingers", "Tries to use a spoon"],
    depth: "Once walking is steady, hands are freer to take on new independence tasks — feeding and drinking. Expect real mess during this stage; it's part of how the coordination gets practiced, not a sign of doing it wrong.",
    montessoriNote: "Use a small, real cup and spoon sized for a toddler's hand rather than spill-proof versions with training wheels — real tools teach real control faster, even with more spills at first.",
    activity: "At mealtimes, offer a small open cup with a little water or milk, and a toddler-sized spoon, even knowing some will spill — this is how the skill is actually built.",
    searchQuery: "toddler open cup spoon set",
    nextRungId: "scribbling-climbing"
  },
  {
    id: "scribbling-climbing",
    ageRangeMonths: [16, 22],
    items: ["Scribbles", "Climbs on and off a couch or chair without help"],
    depth: "Scribbling and climbing both reflect growing control over the body's larger and smaller movements at the same time — a toddler experimenting with what her arms, legs, and hands can do independently.",
    montessoriNote: "Offer large, chunky crayons and big paper rather than fine-tipped pens — the goal at this stage is the arm movement and grip, not neat lines.",
    activity: "Set out large paper and chunky crayons for open scribbling, and allow supervised climbing on and off low, stable furniture.",
    searchQuery: "toddler chunky crayons paper set",
    nextRungId: "running-kicking-stairs"
  },
  {
    id: "running-kicking-stairs",
    ageRangeMonths: [20, 27],
    items: ["Kicks a ball", "Runs", "Walks (not climbs) up a few stairs with or without help", "Eats with a spoon"],
    depth: "A simple walk where a child collects things in a basket — picking things up, squatting, walking — builds both large and small movement skills together in one ordinary activity, without needing any special equipment. (Zero to Three)",
    montessoriNote: "Let outdoor walks be unhurried and exploratory rather than destination-focused — the squatting, picking up, and carrying is the actual motor practice, not the walk itself.",
    activity: "Take a slow walk with a small basket and let your child collect leaves, stones, or other safe \"treasures\" — the constant bending, walking, and carrying builds coordination naturally.",
    searchQuery: "toddler soft ball set",
    nextRungId: "twisting-jumping-pages"
  },
  {
    id: "twisting-jumping-pages",
    ageRangeMonths: [26, 32],
    items: ["Uses hands to twist things, like turning doorknobs or unscrewing lids", "Jumps off the ground with both feet", "Turns book pages one at a time"],
    depth: "Squeezing a wet sponge to release water is a simple, real task that builds meaningful hand and finger strength — more effective than most purpose-built toys aimed at the same skill. (Zero to Three)",
    montessoriNote: "Give real jars with lids, real doorknobs to practice on, and a sponge and water — practical, real-world tasks build twisting and gripping strength better than a plastic toy version.",
    activity: "Set up a simple \"washing\" activity — a small basin, water, a sponge to squeeze, and a few safe jars with lids to twist open and closed.",
    searchQuery: "toddler practical life activity set",
    nextRungId: "stringing-dressing"
  },
  {
    id: "stringing-dressing",
    ageRangeMonths: [30, 38],
    items: ["Strings items together, like large beads or macaroni", "Puts on some clothes by himself, like loose pants or a jacket"],
    depth: "Pulling a string to move a weighted box — like a simple homemade wagon — teaches a child to use an object as a tool, combining physical control with early problem-solving in one activity. (Zero to Three)",
    montessoriNote: "Practice dressing with genuinely loose, simple clothing first (elastic-waist pants, open jackets) before anything with buttons or zips — early independence should feel achievable, not frustrating.",
    activity: "Offer large beads or dry macaroni on a shoelace for threading practice, and let your child attempt to put on a loose jacket or pants by himself, even if it takes a while.",
    searchQuery: "toddler lacing threading toy",
    nextRungId: "utensil-complex-movement"
  },
  {
    id: "utensil-complex-movement",
    ageRangeMonths: [34, 42],
    items: ["Uses a fork"],
    depth: "By this age range, many children are also refining skills just beyond fork use — buttoning large buttons, pedaling a tricycle, and throwing a ball overhand — showing how gross and fine motor skills continue advancing together into the preschool years.",
    montessoriNote: "Introduce one new practical-life skill at a time (fork use, then large buttons, then a tricycle) rather than expecting all new physical skills at once — mastery of one builds confidence for the next.",
    activity: "Practice fork use at regular mealtimes with easy-to-spear foods (soft fruit chunks, cooked vegetables), and offer a tricycle or ride-on toy for emerging leg-pedaling coordination.",
    searchQuery: "toddler tricycle ride on toy",
    nextRungId: null
  }
];

function getMovingRungById(id) {
  return MOVING_DOING.find(r => r.id === id);
}

function getMovingRungNearAge(ageMonths) {
  let match = MOVING_DOING.find(r => ageMonths >= r.ageRangeMonths[0] && ageMonths < r.ageRangeMonths[1]);
  if (!match) {
    match = ageMonths < MOVING_DOING[0].ageRangeMonths[0]
      ? MOVING_DOING[0]
      : MOVING_DOING[MOVING_DOING.length - 1];
  }
  return match;
}

function getMovingChecklistWindow(ageMonths, expandLevel) {
  const matchedIdx = MOVING_DOING.findIndex(r => r.id === getMovingRungNearAge(ageMonths).id);
  const startIdx = Math.max(0, matchedIdx - 1);
  const endIdx = Math.min(MOVING_DOING.length - 1, matchedIdx + expandLevel);
  const rungs = MOVING_DOING.slice(startIdx, endIdx + 1);
  const flatItems = [];
  rungs.forEach(r => { r.items.forEach(item => flatItems.push({ text: item, rungId: r.id })); });
  return { flatItems, canExpandMore: endIdx < MOVING_DOING.length - 1 };
}
