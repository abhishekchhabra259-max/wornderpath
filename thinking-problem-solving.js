// WonderPath — Thinking & Problem-Solving progression (third domain, v3 build)
//
// SOURCING PER RUNG (same discipline as the other two domains):
// - "items": individual behaviors from CDC's Learn the Signs. Act Early. checklists.
// - "depth": from Zero to Three's age-based "Thinking Skills" family resources
//   (zerotothree.org) — independent source, adds context CDC doesn't.
// - "montessoriNote": HOW to support the behavior — simple materials, self-directed
//   repetition, real tools over multi-function toys.
// - "activity": synthesized by me from the above — flag for expert review.
//
// Rung reached if parent checks ANY item in it (partial credit).
// Age ranges are internal only — never shown to the parent.

const THINKING_PROBLEM_SOLVING = [
  {
    id: "cause-and-effect",
    ageRangeMonths: [6, 11],
    items: ["Bangs two things together"],
    depth: "Babies learn cause and effect through repetition — pressing a button to see a toy pop up, banging or shaking things to see what happens. When a rubber duck splashes but a washcloth sinks, that's real early science, not just play. (Zero to Three)",
    montessoriNote: "Choose simple, single-function objects over toys with lots of lights and sounds — the more the toy does on its own, the less the child has to figure out.",
    activity: "Give safe, simple objects to bang, shake, and drop repeatedly — a wooden spoon and a metal one, for instance — and narrate what happens each time.",
    searchQuery: "baby cause and effect toy wooden",
    nextRungId: "memory-and-search"
  },
  {
    id: "memory-and-search",
    ageRangeMonths: [9, 15],
    items: ["Looks for things he sees you hide, like a toy under a blanket"],
    depth: "Hiding games build both memory and object permanence — the understanding that something still exists even out of sight. This is also the foundation of early problem-solving, since a baby has to remember where to look. (Zero to Three)",
    montessoriNote: "Start with one obvious hiding spot before making the game harder — mastery of a simple version matters more than rushing to a complex one.",
    activity: "Hide a favorite toy under a cup in full view, then let your baby search — once that's easy, try two cups, then three, going only as fast as she succeeds.",
    searchQuery: "baby hide and seek toy wooden",
    nextRungId: "tool-use-containers"
  },
  {
    id: "tool-use-containers",
    ageRangeMonths: [12, 18],
    items: ["Puts something in a container, like a block in a cup"],
    depth: "Around this age, toddlers start using objects as tools — like using a stick to reach something out of range — and their growing memory shows up in imitation, copying something they saw you do even hours or days earlier. (Zero to Three)",
    montessoriNote: "Offer real containers and objects sized for small hands, rather than toy versions — a real cup and block teach more than a plastic imitation with a fixed \"correct\" sound or light.",
    activity: "Set out a few containers and small safe objects and let your child fill and dump them repeatedly — this repetition is how the concept of \"in and out\" gets learned, not wasted time.",
    searchQuery: "wooden stacking blocks toddler",
    nextRungId: "imitation-simple-pretend"
  },
  {
    id: "imitation-simple-pretend",
    ageRangeMonths: [15, 20],
    items: ["Copies you doing chores, like sweeping with a broom", "Plays with toys in a simple way, like pushing a toy car"],
    depth: "Play-pretend can start simply — narrating a stuffed animal's feelings (\"Bear loves cuddles — do you think he's hungry?\") and offering simple props builds imagination even before a child initiates pretend play on their own. (Zero to Three)",
    montessoriNote: "Give your child real, child-sized versions of household tools — a small broom, a real cloth for wiping — rather than pretend replicas; this builds genuine capability alongside imagination.",
    activity: "Let your child help with a real simple chore alongside you — sweeping, wiping a low table — narrating the steps as you both do it.",
    searchQuery: "toddler child size cleaning tools",
    nextRungId: "mechanism-exploration"
  },
  {
    id: "mechanism-exploration",
    ageRangeMonths: [18, 24],
    items: ["Holds something in one hand while using the other hand; for example, holding a container and taking the lid off", "Tries to use switches, knobs, or buttons on a toy", "Plays with more than one toy at the same time, like putting toy food on a toy plate"],
    depth: "Offer lots of tools for experimenting — toys and objects a toddler can shake, open, close, or take apart to see how they work. Toddlers are natural \"little scientists\" running constant small experiments. (Zero to Three)",
    montessoriNote: "One activity at a time, fully explored, teaches more than many toys offered at once — set up one open-ended material and let your child exhaust its possibilities.",
    activity: "Offer toys or safe household objects with switches, latches, or lids to open and close repeatedly — a simple box with a lid works as well as any bought toy.",
    searchQuery: "toddler busy board activity",
    nextRungId: "symbolic-pretend-play"
  },
  {
    id: "symbolic-pretend-play",
    ageRangeMonths: [22, 30],
    items: ["Uses things to pretend, like feeding a block to a doll as if it were food"],
    depth: "A big step in thinking skills happens as a toddler develops real imagination — able to let one object symbolically stand for another, like a round pillow becoming a \"pizza.\" This is a genuine cognitive leap, not just more elaborate play. (Zero to Three)",
    montessoriNote: "Let your child choose what an object represents rather than telling her — if she picks up a block and calls it a phone, follow that idea rather than correcting or redirecting it.",
    activity: "Offer open-ended props (a block, a scarf, an empty box) without a fixed \"correct\" use, and follow whatever your child decides to turn it into.",
    searchQuery: "toddler open ended pretend play props",
    nextRungId: "multistep-instructions"
  },
  {
    id: "multistep-instructions",
    ageRangeMonths: [28, 34],
    items: ["Follows two-step instructions like \"put the toy down and close the door\"", "Shows he knows at least one color", "Shows simple problem-solving skills, like standing on a small stool to reach something"],
    depth: "Encourage your child to test out different solutions to a problem rather than solving it for him — suggesting he try a block in another hole, or add blocks to steady a wobbly tower, builds real thinking skill more than a quick fix does. (Zero to Three)",
    montessoriNote: "Give instructions one step at a time at first, then combine two only once single steps are solid — this matches how the skill actually builds, rather than testing the limit.",
    activity: "Give a simple two-step instruction during ordinary routines — \"pick up the block, and put it in the box\" — and let your child work through both parts without repeating it for her.",
    searchQuery: "toddler shape sorter puzzle",
    nextRungId: "drawing-safety-directed-play"
  },
  {
    id: "drawing-safety-directed-play",
    ageRangeMonths: [32, 40],
    items: ["Draws a circle when you show him how", "Avoids touching hot objects, like a stove, when warned"],
    depth: "In this third year, thinking takes a real jump — children start appreciating jokes and humor, solving more complex problems, and can direct their own pretend play with real internal logic (\"the dog has to go inside because it's raining\"). (Zero to Three)",
    montessoriNote: "Let your child direct pretend play rather than leading it yourself — ask questions (\"what happens next?\") instead of suggesting the storyline, to build her own logical thinking.",
    activity: "During pretend play, ask open questions rather than directing — \"what does the doll want to do now?\" — and let your child's own logic drive what happens next.",
    searchQuery: "toddler drawing crayons set",
    nextRungId: null
  }
];

function getThinkingRungById(id) {
  return THINKING_PROBLEM_SOLVING.find(r => r.id === id);
}

function getThinkingRungNearAge(ageMonths) {
  let match = THINKING_PROBLEM_SOLVING.find(r => ageMonths >= r.ageRangeMonths[0] && ageMonths < r.ageRangeMonths[1]);
  if (!match) {
    match = ageMonths < THINKING_PROBLEM_SOLVING[0].ageRangeMonths[0]
      ? THINKING_PROBLEM_SOLVING[0]
      : THINKING_PROBLEM_SOLVING[THINKING_PROBLEM_SOLVING.length - 1];
  }
  return match;
}

function getThinkingChecklistWindow(ageMonths, expandLevel) {
  const matchedIdx = THINKING_PROBLEM_SOLVING.findIndex(r => r.id === getThinkingRungNearAge(ageMonths).id);
  const startIdx = Math.max(0, matchedIdx - 1);
  const endIdx = Math.min(THINKING_PROBLEM_SOLVING.length - 1, matchedIdx + expandLevel);
  const rungs = THINKING_PROBLEM_SOLVING.slice(startIdx, endIdx + 1);
  const flatItems = [];
  rungs.forEach(r => { r.items.forEach(item => flatItems.push({ text: item, rungId: r.id })); });
  return { flatItems, canExpandMore: endIdx < THINKING_PROBLEM_SOLVING.length - 1 };
}
