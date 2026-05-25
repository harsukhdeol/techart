// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS DATA  —  add new projects here
//
// HOW TO ADD A NEW PROJECT
// 1. Copy one of the objects below and paste it at the TOP of the array.
// 2. Fill in your details — title, description, tags, and sections.
// 3. Put your cover image in  public/images/  and set imageSrc below.
//    If you don't have an image yet, leave imageSrc as null.
// 4. Save — the site updates automatically.
//
// SECTION TYPES
//  'problem'   — The challenge / what you were trying to solve
//  'process'   — How you approached it (supports inline images)
//  'result'    — The outcome (supports inline images)
//  'takeaways' — Bullet list of key learnings
//
// TAG VARIANTS:  'pink' | 'lavender' | 'peach' | 'sage' | 'blue' | 'mint'
// ─────────────────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 'water-ripple-shader',
    title:       'Water surface ripple shader from scratch',
    description: 'Building a convincing real-time water ripple using vertex displacement and normal maps.',
    date:        'May 2025',
    readTime:    '8 min read',
    difficulty:  'Intermediate',
    isNew:       true,

    imageSrc:    null,
    imageAlt:    'Water ripple shader in viewport',
    imageColor:  '#F5BFCE',

    tags: [
      { label: 'Shaders',  variant: 'pink' },
      { label: 'Niagara',  variant: 'lavender' },
    ],

    sections: [
      {
        type:    'problem',
        heading: 'The problem',
        content: [
          "I needed a real-time water surface that responded to objects entering it — not a static normal map loop. The default water plane looked fine at a distance but fell apart up close.",
          "The challenge: vertex displacement needs to be cheap, normal recalculation has to match the displaced geometry, and the whole thing has to play nicely with global illumination.",
        ],
      },
      {
        type:    'process',
        heading: 'My process',
        content: [
          "I broke the effect into three separate material functions: sine-wave displacement, a normal reconstruction pass, and foam edge detection. Keeping them separate made iteration much faster.",
        ],
        images: [
          { src: null, alt: 'Material graph', caption: 'material graph', color: '#FCE8F2' },
        ],
        contentAfter: [
          "The key insight was using world-position-based UV tiling instead of object UVs — the pattern stays consistent as the mesh scales and tiles seamlessly across multiple actors.",
        ],
      },
      {
        type:    'result',
        heading: 'The result',
        content: [
          "A fully dynamic water shader with sub-10 instruction count that works with global illumination without any render hacks. The foam edge detection reuses the depth buffer so there's no extra pass cost.",
        ],
        images: [
          { src: null, alt: 'Final water shader result', caption: 'final result', color: '#D8D0F8' },
        ],
      },
      {
        type:    'takeaways',
        heading: 'Key takeaways',
        items: [
          "World-position UV tiling is almost always better than object UVs for large surfaces.",
          "Split complex materials into named functions — it makes debugging and reuse much easier.",
          "Foam edge detection using the depth buffer adds zero extra render pass cost.",
          "Always check instruction count in the material stats panel before shipping.",
        ],
      },
    ],
  },

  {
    id:          'procedural-foot-ik',
    title:       'Procedural foot IK on uneven terrain',
    description: 'Using animation blueprints and IK solvers to plant feet realistically on any surface angle.',
    date:        'Mar 2025',
    readTime:    '6 min read',
    difficulty:  'Intermediate',
    isNew:       false,

    imageSrc:    null,
    imageAlt:    'Character walking on uneven terrain',
    imageColor:  '#F8CEAA',

    tags: [
      { label: 'Animation',  variant: 'peach' },
      { label: 'Blueprints', variant: 'lavender' },
    ],

    sections: [
      {
        type:    'problem',
        heading: 'The problem',
        content: [
          "The default character walk cycle looked fine on flat ground but broke on any incline — feet floating above or clipping through the surface.",
        ],
      },
      {
        type:    'process',
        heading: 'My process',
        content: [
          "I used a two-bone IK setup driven by line traces from each foot down to the surface. The pelvis height is then adjusted so neither foot is ever fully extended.",
        ],
        images: [
          { src: null, alt: 'Animation blueprint IK setup', caption: 'animation blueprint', color: '#FEF0E8' },
        ],
        contentAfter: [
          "The trickiest part was blending the pelvis offset smoothly — too fast and it snaps, too slow and the character looks drunk on stairs. A simple spring interpolation solved it.",
        ],
      },
      {
        type:    'takeaways',
        heading: 'Key takeaways',
        items: [
          "Line traces from the foot bone (not the root) give far more accurate placement.",
          "Spring interpolation for the pelvis offset prevents jarring snaps between surfaces.",
          "Add a slope angle threshold — beyond ~45° you want to override IK and play a stumble animation instead.",
        ],
      },
    ],
  },
]
