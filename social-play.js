// WonderPath — Social & Play progression (second domain, v3 build)
//
// SOURCING PER RUNG (same discipline as talking-listening.js):
// - "items": individual behaviors from CDC's Learn the Signs. Act Early. checklists.
// - "depth": from Zero to Three's age-based Social-Emotional Development family resources
//   (zerotothree.org) — independent source, adds context CDC doesn't.
// - "montessoriNote": HOW to support the behavior — grace-and-courtesy modeling, respecting
//   independent choice, not a claim about WHEN it appears.
// - "activity": synthesized by me from the above — flag for expert review.
//
// Rung reached if parent checks ANY item in it (partial credit, not all-or-nothing).
// Age ranges are internal only — never shown to the parent (same anxiety-reduction
// design as the Talking & Listening domain).

const SOCIAL_PLAY = [
  {
    id: "early-bonding",
    ageRangeMonths: [6, 11],
    items: ["Is shy, clingy, or fearful around strangers", "Shows several facial expressions, like happy, sad, angry, and surprised", "Smiles or laughs when you play peek-a-boo"],
    depth: "Peek-a-boo isn't just fun — it's early practice in back-and-forth interaction and shared emotion. Babies are also learning who they are through how the people around them respond to them. (Zero to Three)",
    montessoriNote: "Let your baby set the pace of the game — pause and wait for her reaction before continuing, rather than repeating on a fixed rhythm.",
    activity: "Play peek-a-boo often, and vary it slightly each time — different hiding spots, different sounds — to keep the back-and-forth feeling fresh and responsive.",
    searchQuery: "baby peekaboo interactive toy",
    nextRungId: "turn-based-play"
  },
  {
    id: "turn-based-play",
    ageRangeMonths: [11, 15],
    items: ["Plays games with you, like pat-a-cake", "Reacts when you leave — looks, reaches for you, or cries"],
    depth: "Simple turn-taking games — rolling a ball back and forth, passing something around — are early practice for sharing, well before a child can actually share on request. (Zero to Three)",
    montessoriNote: "Keep turn-taking games short and clearly signaled (\"my turn... your turn\") so the pattern is easy to follow at this age.",
    activity: "Roll a soft ball back and forth, naming each turn out loud — \"my turn... now your turn\" — to build the earliest sense of taking turns.",
    searchQuery: "baby soft ball toy",
    nextRungId: "checking-in-independence"
  },
  {
    id: "checking-in-independence",
    ageRangeMonths: [15, 20],
    items: ["Moves away from you, but looks to make sure you are close by"],
    depth: "Around this age, toddlers start developing a real sense of being a separate person from you — which is also the foundation empathy grows from, since realizing you're separate from others is what lets a child start imagining what someone else might be feeling. (Zero to Three)",
    montessoriNote: "Give safe, bounded space to explore away from you rather than following closely — the \"checking in\" behavior works best when the child feels she has real room to wander.",
    activity: "In a safe room, let your child wander a few steps away during play and simply be visible and available rather than following — let her do the checking-in.",
    searchQuery: "toddler safe exploration play mat",
    nextRungId: "shared-attention-helping"
  },
  {
    id: "shared-attention-helping",
    ageRangeMonths: [18, 24],
    items: ["Points to show you something interesting", "Puts hands out for you to wash them", "Helps you dress him by pushing an arm through a sleeve or lifting up a foot"],
    depth: "Give just enough help for a child to succeed at a task without frustration, rather than doing it for them or leaving them stuck — the goal is a small, achievable stretch each time. (Zero to Three)",
    montessoriNote: "Narrate the steps of a routine (dressing, washing hands) slowly and let the child do the part they're capable of, even if it's slower than doing it yourself.",
    activity: "During dressing or hand-washing, pause and wait a beat before helping — give your child a chance to attempt the next step herself first.",
    searchQuery: "toddler self dressing practice",
    nextRungId: "noticing-others-feelings"
  },
  {
    id: "noticing-others-feelings",
    ageRangeMonths: [22, 27],
    items: ["Notices when others are hurt or upset, like pausing or looking sad when someone is crying", "Looks at your face to see how to react in a new situation"],
    depth: "Toddlers this age are increasingly interested in peers, though play is still mostly side-by-side rather than truly cooperative — genuine shared play develops later, and that's expected, not behind. (Zero to Three)",
    montessoriNote: "Name emotions simply when you see them, in yourself and others — \"she looks sad\" — without pushing the child to act on it yet.",
    activity: "When your child notices someone upset, put words to it simply: \"he's crying, he might feel sad\" — no pressure to comfort, just naming the feeling.",
    searchQuery: "toddler emotions picture book",
    nextRungId: "confident-problem-solving"
  },
  {
    id: "confident-problem-solving",
    ageRangeMonths: [26, 32],
    items: ["Shows you what she can do by saying, \"look at me!\"", "Follows simple routines when told, like helping to pick up toys at \"clean-up time\""],
    depth: "Give your child real time to work through a small challenge alone — like getting boots on — before stepping in, and praise the effort and thinking itself, not just whether it worked. (Zero to Three)",
    montessoriNote: "Resist finishing a task for your child the moment it gets hard — a short struggle with a solvable problem is what builds real confidence, not a smooth outcome.",
    activity: "When your child is stuck on something small and safe, narrate what you notice about her effort — \"you're really thinking about which piece fits\" — before offering help.",
    searchQuery: "toddler independent play activity",
    nextRungId: "cooperative-play-emerging"
  },
  {
    id: "cooperative-play-emerging",
    ageRangeMonths: [30, 36],
    items: ["Plays next to other children and sometimes plays with them"],
    depth: "Children need real practice to learn sharing, turn-taking, and resolving conflict — it doesn't appear on its own. Activities that don't require sharing (art projects, music with one instrument each, sand or water play) keep conflict low while cooperative play is still forming. (Zero to Three)",
    montessoriNote: "Choose parallel-friendly activities for early playdates — side-by-side art or sensory play lets children enjoy each other's company without forcing turn-taking before they're ready.",
    activity: "For playdates at this age, set up parallel activities — each child with their own art materials or sand tools — rather than one shared toy that requires taking turns.",
    searchQuery: "toddler parallel play art set",
    nextRungId: "empathy-and-friendship"
  },
  {
    id: "empathy-and-friendship",
    ageRangeMonths: [34, 40],
    items: ["Calms down within 10 minutes after you leave her, like at a childcare drop-off", "Notices other children and joins them to play"],
    depth: "You can help a child imagine the effect of their actions on others by asking directly — \"look at her face, how do you think she's feeling?\" — which builds real empathy more than being told to say sorry. Following your child's lead in pretend play is also one of the best ways to build genuine connection. (Zero to Three)",
    montessoriNote: "Get involved in your child's pretend play on her terms — follow what she's already building rather than redirecting it — this is where real cooperative friendship skills develop.",
    activity: "Join your child's pretend play by following her lead completely — if she's serving pretend food, ask what's on the menu rather than suggesting a new game.",
    searchQuery: "toddler pretend play set",
    nextRungId: null
  }
];

function getSocialRungById(id) {
  return SOCIAL_PLAY.find(r => r.id === id);
}

function getSocialRungNearAge(ageMonths) {
  let match = SOCIAL_PLAY.find(r => ageMonths >= r.ageRangeMonths[0] && ageMonths < r.ageRangeMonths[1]);
  if (!match) {
    match = ageMonths < SOCIAL_PLAY[0].ageRangeMonths[0]
      ? SOCIAL_PLAY[0]
      : SOCIAL_PLAY[SOCIAL_PLAY.length - 1];
  }
  return match;
}

function getSocialChecklistWindow(ageMonths, expandLevel) {
  const matchedIdx = SOCIAL_PLAY.findIndex(r => r.id === getSocialRungNearAge(ageMonths).id);
  const startIdx = Math.max(0, matchedIdx - 1);
  const endIdx = Math.min(SOCIAL_PLAY.length - 1, matchedIdx + expandLevel);
  const rungs = SOCIAL_PLAY.slice(startIdx, endIdx + 1);
  const flatItems = [];
  rungs.forEach(r => { r.items.forEach(item => flatItems.push({ text: item, rungId: r.id })); });
  return { flatItems, canExpandMore: endIdx < SOCIAL_PLAY.length - 1 };
}
