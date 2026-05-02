import type { Tile, SkillGroup, EducationItem, Award } from "./types";

export const BASE_PATH = "/personal-website";

// ─── SVG Icons ───────────────────────────────────────────────────────────────

const NEURAL_NET_SVG = `
<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <!-- Input nodes -->
  <circle cx="8" cy="12" r="3"/>
  <circle cx="8" cy="24" r="3"/>
  <circle cx="8" cy="36" r="3"/>
  <!-- Hidden nodes -->
  <circle cx="24" cy="8" r="3"/>
  <circle cx="24" cy="20" r="3"/>
  <circle cx="24" cy="32" r="3"/>
  <circle cx="24" cy="44" r="3" opacity="0.5"/>
  <!-- Output nodes -->
  <circle cx="40" cy="18" r="3"/>
  <circle cx="40" cy="30" r="3"/>
  <!-- Connections input->hidden -->
  <line x1="11" y1="12" x2="21" y2="8" opacity="0.6"/>
  <line x1="11" y1="12" x2="21" y2="20" opacity="0.6"/>
  <line x1="11" y1="24" x2="21" y2="20" opacity="0.6"/>
  <line x1="11" y1="24" x2="21" y2="32" opacity="0.6"/>
  <line x1="11" y1="36" x2="21" y2="32" opacity="0.6"/>
  <line x1="11" y1="36" x2="21" y2="44" opacity="0.4"/>
  <!-- Connections hidden->output -->
  <line x1="27" y1="8" x2="37" y2="18" opacity="0.6"/>
  <line x1="27" y1="20" x2="37" y2="18" opacity="0.6"/>
  <line x1="27" y1="20" x2="37" y2="30" opacity="0.6"/>
  <line x1="27" y1="32" x2="37" y2="30" opacity="0.6"/>
</svg>`;

const VR_HEADSET_SVG = `
<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <!-- Headset body -->
  <rect x="4" y="14" width="40" height="22" rx="6"/>
  <!-- Left lens -->
  <ellipse cx="15" cy="25" rx="7" ry="6"/>
  <!-- Right lens -->
  <ellipse cx="33" cy="25" rx="7" ry="6"/>
  <!-- Lens divider -->
  <line x1="22" y1="25" x2="26" y2="25"/>
  <!-- Strap left -->
  <path d="M4 20 Q2 20 2 25 Q2 30 4 30" stroke-width="1.5"/>
  <!-- Strap right -->
  <path d="M44 20 Q46 20 46 25 Q46 30 44 30" stroke-width="1.5"/>
  <!-- Shine on left lens -->
  <path d="M11 20 Q13 19 15 20" opacity="0.5"/>
  <!-- Shine on right lens -->
  <path d="M29 20 Q31 19 33 20" opacity="0.5"/>
</svg>`;

const GAME_CONTROLLER_SVG = `
<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <!-- Controller body -->
  <path d="M8 20 Q6 16 10 14 L16 13 Q18 8 24 8 Q30 8 32 13 L38 14 Q42 16 40 20 L37 34 Q36 38 32 38 L28 38 Q26 36 24 36 Q22 36 20 38 L16 38 Q12 38 11 34 Z"/>
  <!-- D-pad vertical -->
  <rect x="13" y="20" width="4" height="10" rx="1"/>
  <!-- D-pad horizontal -->
  <rect x="11" y="22" width="8" height="4" rx="1" opacity="0.5"/>
  <!-- Right buttons -->
  <circle cx="33" cy="21" r="2.5"/>
  <circle cx="36" cy="25" r="2.5" opacity="0.7"/>
  <circle cx="30" cy="25" r="2.5" opacity="0.7"/>
  <circle cx="33" cy="29" r="2.5" opacity="0.5"/>
  <!-- Center buttons -->
  <circle cx="20" cy="17" r="1.5" opacity="0.6"/>
  <circle cx="28" cy="17" r="1.5" opacity="0.6"/>
</svg>`;

const BLOCKCHAIN_SVG = `
<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <!-- Central hexagon -->
  <polygon points="24,6 36,13 36,27 24,34 12,27 12,13"/>
  <!-- Inner diamond -->
  <polygon points="24,13 30,20 24,27 18,20" opacity="0.7"/>
  <!-- Chain links -->
  <path d="M36 20 Q42 20 42 24 Q42 28 38 28 L36 27" opacity="0.6"/>
  <path d="M12 20 Q6 20 6 24 Q6 28 10 28 L12 27" opacity="0.6"/>
  <!-- NFT label dots -->
  <circle cx="24" cy="20" r="1.5"/>
  <circle cx="36" cy="38" r="3" opacity="0.4"/>
  <circle cx="12" cy="38" r="3" opacity="0.4"/>
  <line x1="36" y1="27" x2="36" y2="35" opacity="0.4"/>
  <line x1="12" y1="27" x2="12" y2="35" opacity="0.4"/>
</svg>`;

const DRONE_SVG = `
<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <!-- Body cross -->
  <rect x="20" y="18" width="8" height="12" rx="2"/>
  <rect x="12" y="20" width="24" height="8" rx="2"/>
  <!-- Rotor arms -->
  <line x1="12" y1="20" x2="8" y2="16"/>
  <line x1="36" y1="20" x2="40" y2="16"/>
  <line x1="12" y1="28" x2="8" y2="32"/>
  <line x1="36" y1="28" x2="40" y2="32"/>
  <!-- Rotors -->
  <ellipse cx="7" cy="14" rx="5" ry="2" opacity="0.7"/>
  <ellipse cx="41" cy="14" rx="5" ry="2" opacity="0.7"/>
  <ellipse cx="7" cy="34" rx="5" ry="2" opacity="0.7"/>
  <ellipse cx="41" cy="34" rx="5" ry="2" opacity="0.7"/>
  <!-- Camera dome -->
  <circle cx="24" cy="24" r="3"/>
  <circle cx="24" cy="24" r="1.5" opacity="0.5"/>
  <!-- Signal lines -->
  <path d="M24 18 L24 10" opacity="0.4"/>
  <path d="M20 12 Q24 8 28 12" opacity="0.4"/>
</svg>`;

// ─── Experiences ─────────────────────────────────────────────────────────────

export const EXPERIENCES: Tile[] = [
  {
    id: "echostar-2025",
    type: "experience",
    title: "AI Engineering Intern",
    organization: "EchoStar Corporation (Dish Network)",
    location: "Denver, Colorado",
    dateRange: "June 2025 – August 2025",
    theme: {
      gradientFrom: "#e0f2fe",
      gradientTo: "#ede9fe",
      accentColor: "#3b82f6",
      svgIcon: NEURAL_NET_SVG,
    },
    bullets: [
      "Architected and built end-to-end proprietary advanced agentic AI Retrieval Augmented Generation (RAG) system that boosts team productivity by roughly 45% and increases document retrieval efficiency from 23% to 78%.",
      "Designed serverless Lambda orchestration architecture powered by Claude Sonnet 3.7 (custom metadata filtering, hybrid BM25 + text-embedding Amazon TTE over OSS vectorDB) serving 50+ daily engineers.",
      "Improved top-5 retrieval MRR 47% from initial 8% and cut p95 latency from 8s to 920ms via re-ranking & hierarchical chunking.",
      "Innovated adaptive, role-aware 'Core' (Developer) and 'Nexus' (Executive) personas using system prompting + inference tuning (temperature, top_p, top_k, max_tokens) to tailor grounded responses.",
    ],
    tags: ["Agentic AI", "AWS", "RAG", "LLM", "Claude Sonnet 3.7", "Python"],
  },
  {
    id: "huelearn-sda-2023",
    type: "experience",
    title: "Software Development Associate",
    organization: "Hue Learn",
    location: "Bengaluru, India",
    dateRange: "June 2023 – November 2023",
    theme: {
      gradientFrom: "#cffafe",
      gradientTo: "#d1fae5",
      accentColor: "#06b6d4",
      svgIcon: VR_HEADSET_SVG,
    },
    bullets: [
      "Led a team of 7 developing a VR educational platform, increasing user engagement by 70% over six months.",
      "Pioneered the multiplayer strategy for the platform using dedicated server technology and introduced 'crowd controlling' — endowing one or more players the ability to control and manipulate the actions of multiple characters within the game — doubling the user base.",
      "Automated the generation of course content in the metaverse through HTTP and REST API request handling and JSON decoding, to fetch relevant content from the database and realize them in the metaverse as interactive 3D screens, 3D models, and game worlds, with UI overlay from React.js.",
    ],
    tags: ["Unreal Engine", "Multiplayer", "REST API", "React.js", "VR", "Metaverse"],
  },
  {
    id: "huelearn-sdi-2023",
    type: "experience",
    title: "Software Development Intern",
    organization: "Hue Learn",
    location: "Bengaluru, India",
    dateRange: "April 2023 – May 2023",
    theme: {
      gradientFrom: "#f3e8ff",
      gradientTo: "#ede9fe",
      accentColor: "#8b5cf6",
      svgIcon: GAME_CONTROLLER_SVG,
    },
    bullets: [
      "Led a team of 3 in conceptualizing and fabricating character models to be more relatable — helping players connect with characters and evoke strong emotions.",
      "Designed and constructed immersive game worlds featuring higher geometric realism in the metaverse using Nanite technology, for the virtual reality educational platform — leading to a 40% uptick in user experience.",
    ],
    tags: ["Unreal Engine", "Nanite", "3D Design", "VR", "Character Design", "Game Dev"],
  },
  {
    id: "curl-2022",
    type: "experience",
    title: "AI Engineer",
    organization: "Curl",
    location: "Bengaluru, India",
    dateRange: "October 2021 – February 2022",
    theme: {
      gradientFrom: "#fef9c3",
      gradientTo: "#fce7f3",
      accentColor: "#f59e0b",
      svgIcon: BLOCKCHAIN_SVG,
    },
    bullets: [
      "Architected an end-to-end autonomous art pipeline converting park camera images into stylized artworks via a StyleGAN2-ADA + AdaIN model, minted them as NFTs and sold on OpenSea.",
      "Fine-tuned StyleGAN2-ADA from an FFHQ pretrained checkpoint on a curated 4,200-image nature corpus using a single Colab Pro A100 (40 GB), reaching FID ~22 in ~15 GPU hours.",
    ],
    tags: ["StyleGAN2-ADA", "AdaIN", "NFT", "Web3", "Generative AI", "AI Art"],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

const SECURITY_SVG = `
<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <!-- Shield -->
  <path d="M24 4 L40 10 L40 24 Q40 36 24 44 Q8 36 8 24 L8 10 Z"/>
  <!-- Eye inside shield -->
  <ellipse cx="24" cy="24" rx="7" ry="5"/>
  <circle cx="24" cy="24" r="2.5" fill="currentColor" stroke="none"/>
  <!-- Scan lines -->
  <line x1="14" y1="17" x2="34" y2="17" opacity="0.4"/>
  <line x1="14" y1="31" x2="34" y2="31" opacity="0.4"/>
</svg>`;

export const PROJECTS: Tile[] = [
  {
    id: "perimeter-intrusion-2023",
    type: "project",
    title: "Perimeter Intrusion Detection",
    organization: "A-1 Fence Products Company Pvt. Ltd.",
    location: "Bengaluru, India",
    dateRange: "March 2022 – April 2023",
    theme: {
      gradientFrom: "#fef2f2",
      gradientTo: "#fff7ed",
      accentColor: "#ef4444",
      svgIcon: SECURITY_SVG,
    },
    bullets: [
      "Led a team of 3 in designing and developing a video-based intrusion detection framework to identify unauthorized physical access with a classification accuracy of 94.74% through extensive model tuning and evaluation.",
      "Proposed and built two novel neural network models: (1) CNN + LSTM to extract spatial features from video frames and model temporal dependencies; (2) Long Term Recurrent Convolutional Network (LRCN) combining convolutional feature extraction with recurrent temporal learning for sequence classification.",
      "Applied optimization techniques including loss function tuning, learning rate scheduling, and regularization; deployed the trained model on NVIDIA Jetson Nano, optimizing inference for edge computing.",
    ],
    tags: ["CNN", "LSTM", "LRCN", "PyTorch", "Computer Vision", "Edge AI", "Jetson Nano"],
  },
  {
    id: "garuda-2022",
    type: "project",
    title: "GARUDA: End-to-End Drone Detection & Management System",
    organization: "Ramaiah Institute of Technology",
    location: "Bengaluru, India",
    dateRange: "October 2021 – June 2022",
    theme: {
      gradientFrom: "#f1f5f9",
      gradientTo: "#e2e8f0",
      accentColor: "#64748b",
      svgIcon: DRONE_SVG,
    },
    bullets: [
      "Winner at the (National) Smart India Hackathon 2022, Ministry of Education, Govt. of India — won a cash prize of $1,200.",
      'Published a peer-reviewed paper entitled "GARUDA: Third Eye for Detecting and Tracking Drones" at the 2023 IEEE 2nd International Conference on Data, Decision and Systems (ICDDS).',
      'Published a peer-reviewed paper entitled "A Deep Learning Approach to Classify Drones and Birds" at the 2022 IEEE 2nd Mysuru Sub Section International Conference.',
      "Employed a robust computer vision model capable of identifying small drones from long distances and low-resolution CCTV footage with an impressive precision of 90.1% and a recall of 92.9%.",
      "Designed to track the status of drones — inferring if a drone is approaching, receding, or moving laterally — draw bounding boxes around detected drones, update their status in a cloud database, and trigger real-time alerts to personnel via mobile devices, intended for deployment in defense establishments such as DRDO.",
    ],
    tags: ["YOLOv5", "Computer Vision", "PyTorch", "OpenCV", "Python", "Cloud DB"],
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C", "C++", "JavaScript", "SQL"],
  },
  {
    category: "AI / ML",
    skills: [
      "Agentic AI",
      "MLOps",
      "LLM",
      "RAG",
      "Machine Learning",
      "Artificial Intelligence",
      "CNN",
      "RNN",
      "LSTM",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS"],
  },
  {
    category: "Web & Mobile",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "REST API",
      "HTML5",
      "CSS",
      "React Native",
    ],
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools & Concepts",
    skills: [
      "Git",
      "Linux",
      "Agile",
      "OOP",
      "DSA",
      "Web3",
      "Unreal Engine",
    ],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Science, Computer Science",
    institution: "Arizona State University",
    location: "Tempe, Arizona",
    period: "December 2025",
    gpa: "3.93 / 4.00",
  },
  {
    degree: "Bachelor of Engineering, Electronics & Communication Engineering",
    institution: "Ramaiah Institute of Technology",
    location: "Bengaluru, India",
    period: "May 2023",
    gpa: "3.72 / 4.00",
  },
];

// ─── Awards & Publications ────────────────────────────────────────────────────

export const AWARDS: Award[] = [
  {
    title: '"Curiosity" CPAW Award',
    organization: "EchoStar Corporation (Dish Network)",
    date: "2025",
    type: "award",
  },
  {
    title: "New American University Scholarship Awardee",
    organization: "Arizona State University · $8,000 Merit-based Scholarship",
    date: "2024",
    type: "award",
    description:
      "Awarded the merit-based NaMU scholarship worth $8,000 towards my Master's degree. Receiving this award signifies ASU's investment in the scholar and their ability to tackle fresh academic challenges and contribute to the university community. It is a mark of distinction on a student's profile.",
  },
  {
    title: "Winner — Smart India Hackathon 2022",
    organization: "Ministry of Human Resource Development (MHRD) · AICTE · National Level Hackathon · INR 1,00,000 Prize",
    date: "August 2022",
    type: "award",
    description:
      "Winner of SIH 2022 out of 160,000+ competitors — built 'Garuda', an end-to-end drone detection system for a DRDO problem statement. Employs computer vision to identify small drones from low-resolution CCTV footage at 90.1% precision, drawing bounding boxes, updating a cloud database, and triggering real-time mobile alerts.",
  },
  {
    title: "Runner-up — Sovereign Nature Winter Hackathon 2022",
    organization: "Stichting Sovereign Nature Initiative · International Level Hackathon",
    date: "February 2022",
    type: "award",
    description:
      "Developed 'Sattva', a platform to empower ecosystems to represent non-human life, establish governance models, and capture value autonomously. Built on a Style GAN model (Neural Style Transfer) and a Human Detection Algorithm to generate value for the ecosystem.",
  },
  {
    title: "Runner-up — IEEE CCEM Student Project Showcase",
    organization: "11th International Conference on Cloud Computing in Emerging Markets 2022 · Virtual Pre-Conference Workshop",
    date: "April 2022",
    type: "award",
  },
  {
    title: "Quarter-Finalist — WeTech Afterschool Program",
    organization: "Goldman Sachs Group, Inc. · Issued by Institute of International Education",
    date: "2022",
    type: "award",
    description:
      "Built by a team of 4 with Goldman Sachs mentors, 'Drool Quotient' reached the Quarter Finals. A social-impact mobile app aimed at enhancing visibility for small-scale food companies, cottage industries, and street vendors — connecting them with a digital audience.",
  },
  {
    title: "GARUDA: Third Eye for Detecting and Tracking Drones",
    organization: "IEEE ICDDS 2023 — 2nd International Conference on Data, Decision and Systems",
    date: "2023",
    type: "publication",
    link: "https://ieeexplore.ieee.org/document/10434890",
    description:
      "Introduces a comprehensive drone detection and tracking system integrating deep learning with existing security camera networks. Using a YOLOv5-based architecture, GARUDA distinguishes drones from other aerial entities at 94.5% precision — even in low-light conditions at significant distances — with real-time tracking of direction and movement patterns. Scalable and designed for secure environments, it offers robust airspace surveillance and safety management.",
  },
  {
    title: "A Deep Learning Approach to Classify Drones and Birds",
    organization: "IEEE 2nd Mysuru Sub Section International Conference",
    date: "2022",
    type: "publication",
    link: "https://ieeexplore.ieee.org/document/9972589",
    description:
      "Proposes a deep learning solution to differentiate drones from birds using YOLOv4 and YOLOv5, trained on 900 images. YOLOv4 achieved 97.4% mAP (superior accuracy) while YOLOv5 reached 95% mAP with faster detection — suitable for real-time surveillance. Addresses false alarms from bird-like objects for a reliable drone security framework.",
  },
];
