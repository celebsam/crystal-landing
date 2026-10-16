export const navigation = [
  { label: "About", href: "#about" },
  { label: "The Ecosystem", href: "#ecosystem" },
  { label: "Selected Work", href: "#portfolio" },
  { label: "Where Next?", href: "#pathways" },
  { label: "Perspective", href: "#ideas" },
  { label: "Contact", href: "#contact" },
] as const;

export const categories = [
  "All initiatives",
  "Spaces & objects",
  "Learning & opportunity",
  "Ideas & purpose",
] as const;

export type Category = (typeof categories)[number];

export interface Initiative {
  id: string;
  name: string;
  category: Exclude<Category, "All initiatives">;
  tagline: string;
  label: string;
  description: string;
  detail: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  stats?: { label: string; value: string };
  href: string;
  action: string;
  external?: boolean;
}

export const initiatives: Initiative[] = [
  {
    id: "studio-coka",
    name: "Studio COKA",
    category: "Spaces & objects",
    tagline: "Architecture, Interior Design & Construction",
    label: "Practice · Architecture · Built Environment",
    description: "Thoughtful spaces, designed for the way we live in African climates.",
    detail:
      "A full-service architecture, interior design, and construction practice specializing in climate-responsive structures, passive ventilation, honest materiality, and spatial wellbeing across residential, commercial, and institutional typologies.",
    image: "/img/7292B8D4-723A-4F36-AA1C-51F390A3813B_1_105_c 2 2.jpeg",
    imageAlt: "Studio COKA modern architectural building with cantilevered shade, brick piers, and outdoor recreation terrace",
    imageWidth: 768,
    imageHeight: 1024,
    stats: { label: "Design Philosophy", value: "Climate-Responsive & Context-Driven" },
    href: "https://studiocoka.com/",
    action: "Explore Studio COKA",
    external: true,
  },
  {
    id: "elevated",
    name: "ELEvated",
    category: "Spaces & objects",
    tagline: "Contemporary Furniture & Product Design",
    label: "Design Studio · Product · Material Craft",
    description: "Functional objects and furniture rooted in African context, materials, and ideas.",
    detail:
      "Creating bespoke furniture, architectural hardware, and interior objects that bridge indigenous craftsmanship with refined contemporary aesthetics—celebrating local timber, woven textures, and African design narratives.",
    image: "/img/Dividers.jpeg",
    imageAlt: "ELEvated custom vertical timber acoustic wall divider and sculptural upholstered swivel armchairs",
    imageWidth: 809,
    imageHeight: 1078,
    stats: { label: "Material Focus", value: "African Woods, Textiles & Metals" },
    href: "#pathways",
    action: "Discover ELEvated Objects",
  },
  {
    id: "ako",
    name: "AKO Alliance",
    category: "Learning & opportunity",
    tagline: "Expanding Education & Creative Access",
    label: "Social Impact · Youth · Educational Access",
    description: "Opening doors to learning, creative expression, and possibility for the next generation.",
    detail:
      "A mission-driven social initiative dedicated to expanding educational infrastructure, mentorship, and creative learning spaces for children and underserved youth across Nigeria and the wider African continent.",
    image: "/img/IMG_2102 2.PNG",
    imageAlt: "AKO Alliance climate-conscious community and educational pavilion featuring curved earth walls and shaded ramps",
    imageWidth: 3840,
    imageHeight: 2877,
    stats: { label: "Impact Target", value: "Children & Underserved Communities" },
    href: "#pathways",
    action: "Partner with AKO Alliance",
  },
  {
    id: "tea",
    name: "The Effective Architect (TEA)",
    category: "Learning & opportunity",
    tagline: "Architecture Education & Professional Media",
    label: "Platform · Masterclasses · Podcast",
    description: "Empowering architects and built-environment professionals to build thriving careers.",
    detail:
      "A media and professional development platform that deconstructs architectural business, climate adaptation, design systems, and career longevity through podcasts, workshops, and practitioner guides.",
    image: "/img/Crystal_s pictures/Cozy Architecture Podcast Workspace.png",
    imageAlt: "Crystal Kizor recording at The Effective Architect studio with microphone, architectural books, and design samples",
    imageWidth: 1374,
    imageHeight: 1145,
    stats: { label: "Community", value: "Built-Environment Professionals" },
    href: "#pathways",
    action: "Learn with TEA",
  },
  {
    id: "speaking",
    name: "Speaking Engagements",
    category: "Ideas & purpose",
    tagline: "Keynotes, Panels & Global Conversations",
    label: "Keynotes · Thought Leadership · Panels",
    description: "Thought-provoking talks on climate architecture, African cities, and purposeful enterprise.",
    detail:
      "Crystal shares keynote perspectives at industry summits, universities, and cultural forums on sustainable urbanism, climate resilience in the tropics, women in built leadership, and creative entrepreneurship.",
    image: "/img/Crystal_s pictures/Architectural Designer in Her Studio.png",
    imageAlt: "Crystal Kizor engaged in thoughtful dialogue at her studio desk with architectural plans",
    imageWidth: 1374,
    imageHeight: 1145,
    stats: { label: "Key Topics", value: "Tropical Architecture & African Urbanism" },
    href: "#contact",
    action: "Book a Speaking Engagement",
  },
  {
    id: "alive",
    name: "Alive and Free",
    category: "Ideas & purpose",
    tagline: "Christian Youth Movement",
    label: "Faith · Identity · Spiritual Purpose",
    description: "Guiding young people into truth, healing, identity, purpose, and vibrant life in Christ.",
    detail:
      "A faith-rooted youth community creating safe, intentional gatherings for young people to discover spiritual groundedness, emotional healing, and Christ-centered leadership in a complex modern world.",
    image: "/img/IMG_2105 2.JPG",
    imageAlt: "Alive and Free gathering courtyard under an oculus open to the heavens with circular mosaic and ancient tree",
    imageWidth: 2560,
    imageHeight: 3200,
    stats: { label: "Core Mission", value: "Identity, Healing & Spiritual Calling" },
    href: "#pathways",
    action: "Connect with Alive and Free",
  },
  {
    id: "research",
    name: "Research, Writing & Ideas",
    category: "Ideas & purpose",
    tagline: "Personal Essays, Urban Studies & Cultural Commentary",
    label: "Authorship · Spatial Theory · Research",
    description: "Probing questions on culture, material memory, and the future of African spaces.",
    detail:
      "Crystal's independent scholarship and published essays interrogating vernacular building technologies, passive cooling traditions, spatial politics, and how memory shapes contemporary African interior environments.",
    image: "/img/IMG_2103 2.PNG",
    imageAlt: "Light filtering through pierced terracotta screen wall in an exhibition gallery hall",
    imageWidth: 2244,
    imageHeight: 2804,
    stats: { label: "Inquiry", value: "Vernacular Memory & Contemporary Practice" },
    href: "#ideas",
    action: "Read Research & Essays",
  },
];

export interface PortfolioItem {
  id: string;
  title: string;
  initiative: string;
  category: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  location?: string;
  summary: string;
}

export const portfolioShowcase: PortfolioItem[] = [
  {
    id: "studio-hq",
    title: "Studio COKA Design Studio & Terraces",
    initiative: "Studio COKA",
    category: "Architecture & Landscape",
    image: "/img/Shade with Cantilevers.jpeg",
    imageAlt: "Studio COKA architectural exterior showing cantilevered roof canopy, tropical tree shade, and outdoor deck",
    imageWidth: 809,
    imageHeight: 1080,
    location: "Lagos, Nigeria",
    summary: "A climate-conscious workspace balancing deep cantilevered overhangs, natural cross-ventilation, and lush garden integration.",
  },
  {
    id: "community-pavilion",
    title: "The Earth Amphitheatre & Learning Shell",
    initiative: "AKO Alliance × Studio COKA",
    category: "Civic & Community Architecture",
    image: "/img/IMG_2041 2.PNG",
    imageAlt: "Rammed earth amphitheatre pavilion with ribbed timber ceiling and community stepped seating",
    imageWidth: 2326,
    imageHeight: 2326,
    location: "Educational Infrastructure",
    summary: "A thermal-mass earth pavilion providing natural cooling, community storytelling tiers, and sustainable local timber roofing.",
  },
  {
    id: "wood-slat-divider",
    title: "Vertical Louver Partition & Swivel Suite",
    initiative: "ELEvated",
    category: "Furniture & Product Design",
    image: "/img/Dividers.jpeg",
    imageAlt: "Warm wood slat architectural divider with bespoke earth-toned velvet armchairs and minimalist side table",
    imageWidth: 809,
    imageHeight: 1078,
    location: "Bespoke Interior Commission",
    summary: "Architectural wood screen partition paired with custom round lounge seats, embodying tactile warmth and functional proportion.",
  },
  {
    id: "executive-study",
    title: "The Mahogany Study & Reading Sanctuary",
    initiative: "Studio COKA",
    category: "Interior Architecture",
    image: "/img/27F5948D-36C1-4A55-84AA-0641349797D2_1_105_c.jpeg",
    imageAlt: "Executive study with vertical wood fluted wall panels, warm concealed LED cove lighting, and bespoke executive desk",
    imageWidth: 768,
    imageHeight: 1024,
    location: "Private Residence",
    summary: "An introspective private library and workspace wrapped in rich African hardwoods with integrated indirect cove illumination.",
  },
  {
    id: "craft-corridor",
    title: "Artisan Weaving & Timber Shutter Colonnade",
    initiative: "ELEvated × Cultural Research",
    category: "Material Craft & Space",
    image: "/img/IMG_2104 2.PNG",
    imageAlt: "Artisans weaving baskets along a warm earth-plastered gallery with full-height operable timber louver shutters",
    imageWidth: 2448,
    imageHeight: 3264,
    location: "Craft Collaboration",
    summary: "Deep earth-walled circulation passage with operable timber louvers that regulate tropical breeze and showcase craft traditions.",
  },
  {
    id: "atrium-void",
    title: "The Lightwell Atrium & Sculptural Railing",
    initiative: "Studio COKA",
    category: "Architectural Interior",
    image: "/img/78FFAF38-4097-40FA-93AB-CE632EFB666E_1_105_c.jpeg",
    imageAlt: "Vertical view of double-height white atrium with curved skylight opening and sunny yellow balustrade accent",
    imageWidth: 768,
    imageHeight: 1024,
    location: "Commercial Space",
    summary: "An expansive daylight shaft diffusing zenithal sunlight across multiple levels to reduce daytime artificial lighting demand.",
  },
];

export interface VisitorPathway {
  persona: string;
  question: string;
  title: string;
  description: string;
  destination: string;
  buttonLabel: string;
  isExternal?: boolean;
  subjectPreset?: string;
}

export const visitorPathways: VisitorPathway[] = [
  {
    persona: "Clients, Developers & Homeowners",
    question: "Looking to commission a project?",
    title: "Architecture, Interiors & Construction",
    description:
      "Partner with Studio COKA to design and build climate-responsive residential residences, boutique commercial spaces, or bespoke interiors.",
    destination: "https://studiocoka.com/",
    buttonLabel: "Explore Studio COKA & Inquire",
    isExternal: true,
  },
  {
    persona: "Event Curators & Conference Organizers",
    question: "Seeking a keynote speaker or panelist?",
    title: "Speaking, Lectures & Panels",
    description:
      "Invite Crystal to share keynotes on African architecture, climate adaptation, urban futures, design entrepreneurship, or creative leadership.",
    destination: "#contact",
    buttonLabel: "Book Crystal for a Talk",
    subjectPreset: "Speaking Engagement Invitation for Crystal Kizor",
  },
  {
    persona: "Architects & Built-Environment Practitioners",
    question: "Looking to scale your design practice?",
    title: "The Effective Architect (TEA)",
    description:
      "Access masterclasses, podcasts, business frameworks, and practical playbooks created to help African architects build sustainable careers.",
    destination: "#contact",
    buttonLabel: "Connect with TEA Platform",
    subjectPreset: "The Effective Architect (TEA) Inquiry",
  },
  {
    persona: "Patrons, NGOs & Philanthropists",
    question: "Passionate about youth educational equity?",
    title: "AKO Alliance Initiatives",
    description:
      "Collaborate with AKO Alliance on community learning spaces, educational access grants, and youth empowerment infrastructure.",
    destination: "#contact",
    buttonLabel: "Partner with AKO Alliance",
    subjectPreset: "AKO Alliance Partnership & Support",
  },
  {
    persona: "Interior Designers & Collectors",
    question: "Seeking bespoke African-rooted objects?",
    title: "ELEvated Furniture & Design",
    description:
      "Discover contemporary furniture collections and custom craft objects designed for soulful residential and hospitality spaces.",
    destination: "#contact",
    buttonLabel: "Inquire about ELEvated Collections",
    subjectPreset: "ELEvated Furniture & Product Inquiry",
  },
  {
    persona: "Young Seekers & Community Leaders",
    question: "Looking for spiritual community & purpose?",
    title: "Alive and Free Movement",
    description:
      "Join gatherings centered on truth, inner healing, spiritual freedom, and purposeful Christian leadership for the next generation.",
    destination: "#contact",
    buttonLabel: "Connect with Alive & Free",
    subjectPreset: "Alive and Free Youth Community Inquiry",
  },
];

export interface EssayTopic {
  number: string;
  title: string;
  excerpt: string;
  tag: string;
}

export const essaysAndIdeas: EssayTopic[] = [
  {
    number: "01",
    title: "Climate Memory: Why Passive African Architecture is the Future",
    excerpt:
      "Before energy-intensive mechanical cooling defined modern African skylines, indigenous builders sculpted microclimates with thick earth walls, courtyard pressure differentials, and porous timber screens. Recovering this wisdom is not nostalgic—it is our most sophisticated climate strategy.",
    tag: "Climate & Architecture",
  },
  {
    number: "02",
    title: "The Dignity of Public Space in African Cities",
    excerpt:
      "Our cities are alive with informal energy, yet starved of generous public realm. When we build civic shelters, shaded gathering trees, and communal amphitheaters, we affirm the dignity and citizenship of everyday people.",
    tag: "Urbanism & Society",
  },
  {
    number: "03",
    title: "Beyond the Drawing Board: The Business of Effective Architecture",
    excerpt:
      "Design brilliance without economic mastery leaves architects disenfranchised. To truly shape the built environment, architects must understand project finance, contract stewardship, client psychology, and systemic execution.",
    tag: "Professional Practice",
  },
  {
    number: "04",
    title: "Faith, Beauty, and the Courage to Build",
    excerpt:
      "To build is an act of hope. It declares that tomorrow deserves better spaces, stronger foundations, and freer minds than yesterday. Faith provides the bedrock that outlasts every aesthetic trend.",
    tag: "Faith & Purpose",
  },
];

export const contactEmail = "contact@studiocoka.com";
export function enquiryHref(subject: string) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject.slice(0, 180))}`;
}
