export interface Project {
  id: string;
  title: string;
  description: string;
  fullDetails?: string;
  category: 'AI / ML' | 'Computer Vision' | 'Full-Stack Web' | 'Data Analytics';
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  caseStudy?: string;
  featured?: boolean;
}

export interface UIDesign {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  gradient: string;
  figmaUrl?: string;
  prototypeUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  status?: string;
  description: string[];
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "KIRUTHIKEYAN S",
  title: "AI Engineer | Frontend Developer | UI/UX Designer | Data Science Graduate",
  tagline: "Building Intelligent AI Solutions and Modern Digital Experiences.",
  heroDescription:
    "I am a B.Tech graduate in Artificial Intelligence and Data Science from Velammal Engineering College (2022–2026). I am passionate about Artificial Intelligence, Machine Learning, Computer Vision, Frontend Development, and UI/UX Design. I enjoy designing intuitive digital experiences while building AI-powered applications that solve real-world problems. My goal is to create intelligent, user-friendly software that combines innovation, functionality, and beautiful design.",
  aboutBio:
    "I graduated with a Bachelor of Technology in Artificial Intelligence and Data Science from Velammal Engineering College (2022–2026). My interests include Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, UI/UX Design, Frontend Development, and Data Analytics.\n\nI enjoy designing beautiful user experiences, developing intelligent software, and continuously learning modern technologies. I believe that great products combine strong engineering with thoughtful design.",
  education: {
    degree: "Bachelor of Technology",
    field: "Artificial Intelligence and Data Science",
    college: "Velammal Engineering College",
    period: "2022 – 2026",
    status: "Graduated",
  },
  contact: {
    email: "kiruthikeyangiri@gmail.com",
    phone: "9952181914",
    linkedin: "https://linkedin.com/in/s-kiruthikeyan",
    github: "https://github.com/Kiruthikeyan-S",
    location: "Tamil Nadu, India",
  },
};

export const ROTATING_TITLES = [
  "AI Engineer",
  "Frontend Developer",
  "UI/UX Designer",
  "Machine Learning Enthusiast",
  "Computer Vision Developer",
  "Data Science Graduate",
];

export const INTERESTS = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "UI/UX Design",
  "Frontend Development",
  "Data Analytics",
  "Power BI",
  "Responsive Web Design",
  "Problem Solving",
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 92 },
      { name: "HTML5", level: 96 },
      { name: "CSS3", level: 94 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "Vite", level: 90 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Flask", level: 88 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    title: "AI & ML Libraries",
    skills: [
      { name: "YOLO", level: 94 },
      { name: "EasyOCR", level: 92 },
      { name: "OpenCV", level: 90 },
      { name: "NumPy", level: 95 },
      { name: "Pandas", level: 96 },
      { name: "Scikit-learn", level: 88 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 94 },
      { name: "VS Code", level: 96 },
      { name: "Google Colab", level: 95 },
      { name: "Jupyter Notebook", level: 95 },
      { name: "Postman", level: 88 },
      { name: "Power BI", level: 90 },
      { name: "Figma", level: 94 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "SQLite", level: 92 },
      { name: "Firebase", level: 85 },
    ],
  },
  {
    title: "UI/UX Design",
    skills: [
      { name: "Wireframing", level: 94 },
      { name: "Prototyping", level: 96 },
      { name: "User Research", level: 88 },
      { name: "Responsive Design", level: 98 },
      { name: "Interaction Design", level: 92 },
      { name: "Design Systems", level: 94 },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Leadership", level: 92 },
      { name: "Communication", level: 94 },
      { name: "Problem Solving", level: 98 },
      { name: "Critical Thinking", level: 95 },
      { name: "Fast Learning", level: 98 },
      { name: "Team Collaboration", level: 95 },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "UI Developer Intern",
    company: "Duhzine IT Solutions Pvt. Ltd.",
    duration: "March 2026 – June 2026",
    description: [
      "Designed and developed modern user interfaces for web and mobile applications.",
      "Created low-fidelity wireframes, interactive prototypes, and high-fidelity UI designs using Figma.",
      "Worked closely with developers to ensure accurate implementation and responsive design across different devices.",
      "Maintained design consistency using reusable components and design systems.",
      "Conducted user research and applied UX principles to improve usability and user satisfaction.",
      "Quickly adapted to new UI patterns, solving interface challenges with an analytical and problem-solving approach.",
    ],
    skills: ["Figma", "Wireframing", "Prototyping", "Responsive Design", "User Research", "UI Design", "UX Design", "Design Systems"],
  },
  {
    role: "UI Developer Intern",
    company: "Amdox Technologies",
    duration: "November 2025 – February 2026",
    description: [
      "Designed wireframes, prototypes, and high-fidelity user interfaces for web and mobile applications.",
      "Collaborated directly with developers to ensure responsive implementation and design consistency.",
      "Created reusable UI components and optimized user flows.",
      "Improved user experience by applying modern UI/UX principles and responsive layouts.",
    ],
    skills: ["Figma", "Wireframing", "Prototyping", "Responsive Design", "UI Design", "UX Design"],
  },
  {
    role: "Robotics & Machine Learning Intern",
    company: "Atlanwa",
    duration: "November 2024 – December 2024",
    description: [
      "Helped integrate ML models into robotic systems and got real hands-on experience with computer vision pipelines and embedded AI deployments.",
      "Built a real-time OCR system with YOLOv11 that reliably detects and reads characters on the fly.",
      "Performed data preprocessing, model tuning, and hardware interface validation.",
    ],
    skills: ["Python", "Machine Learning", "Computer Vision", "YOLOv11", "Embedded AI", "Robotics"],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "p-1",
    title: "EasyOCR + YOLO",
    description: "An AI-powered OCR system combining YOLO object detection with EasyOCR for accurate text recognition from images under complex backgrounds.",
    fullDetails: "Combines YOLO object detection algorithms for initial text region localization with EasyOCR neural engine for multi-language character decoding.",
    category: "Computer Vision",
    image: "/project-1.jpg",
    tags: ["YOLO", "EasyOCR", "Python", "OpenCV", "Deep Learning"],
    github: "https://github.com/Kiruthikeyan-S/easyocr-yolo",
    demo: "https://github.com/Kiruthikeyan-S/easyocr-yolo",
    featured: true,
  },
  {
    id: "p-2",
    title: "Digital Character Recognition",
    description: "Deep Learning-based OCR system for recognizing characters displayed on a 16×2 LCD screen using YOLOv11 and OpenCV.",
    fullDetails: "Trained custom YOLOv11 model on segmented 16x2 dot-matrix LCD digits. Handles glare, angle distortions, and low light conditions.",
    category: "Computer Vision",
    image: "/project-1.jpg",
    tags: ["Python", "YOLOv11", "OpenCV", "Label Studio", "OCR"],
    github: "https://github.com/vlarjun20/-Digital-Character-Recognition-",
    demo: "https://github.com/vlarjun20/-Digital-Character-Recognition-",
    featured: true,
  },
  {
    id: "p-3",
    title: "AI Data Analytics Dashboard",
    description: "Interactive analytics dashboard supporting CSV upload, AI automated insights, data visualization, and ML trend forecasting.",
    fullDetails: "React + Flask web platform for exploratory data analysis. Automatically detects anomalies, computes correlation metrics, and renders Chart.js visual reports.",
    category: "AI / ML",
    image: "/project-2.jpg",
    tags: ["React", "Flask", "Python", "Chart.js", "Pandas", "Machine Learning"],
    github: "https://github.com/Kiruthikeyan-S/AI-Data-Analytics",
    demo: "https://github.com/Kiruthikeyan-S/AI-Data-Analytics",
    featured: true,
  },
  {
    id: "p-4",
    title: "Text Summarization NLP",
    description: "Natural Language Processing application for automatically generating concise, accurate summaries from lengthy text documents.",
    fullDetails: "Implements extractive and abstractive NLP algorithms to distill articles and research papers into bullet point executive summaries.",
    category: "AI / ML",
    image: "/project-2.jpg",
    tags: ["Python", "NLP", "Flask", "Scikit-Learn", "TextRank"],
    github: "https://github.com/Kiruthikeyan-S/Text-Summarization",
    demo: "https://github.com/Kiruthikeyan-S/Text-Summarization",
    featured: true,
  },
  {
    id: "p-5",
    title: "Red Line Project",
    description: "Computer vision spatial boundary tracking and automated traffic monitoring system detecting red line boundary violations.",
    fullDetails: "Uses OpenCV virtual line triggers and bounding box tracking algorithms for automated safety enforcement.",
    category: "Computer Vision",
    image: "public/project-3.jpg",
    tags: ["Python", "OpenCV", "Object Tracking", "Computer Vision"],
    github: "https://github.com/Kiruthikeyan-S/red-line-project",
    demo: "https://github.com/Kiruthikeyan-S/red-line-project",
  },
  {
    id: "p-6",
    title: "Movie Discover Website",
    description: "Modern, high-performance web platform featuring live movie discovery, trailer previews, genre filtering, and responsive UI.",
    fullDetails: "React web app leveraging movie REST APIs for real-time video previewing, responsive poster cards, and dark theme design.",
    category: "Full-Stack Web",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST API", "Vite"],
    github: "https://github.com/Kiruthikeyan-S/movie-website-",
    demo: "https://github.com/Kiruthikeyan-S/movie-website-",
  },
  {
    id: "p-7",
    title: "Luxury Car Showroom Web App",
    description: "Automotive digital showroom featuring interactive vehicle specifications, 3D model customization visualizer, and luxury design layout.",
    fullDetails: "Responsive web application designed with Apple & Vercel aesthetics for exploring high-performance supercars.",
    category: "Full-Stack Web",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    tags: ["HTML5", "CSS3", "JavaScript", "UI/UX Design", "Responsive"],
    github: "https://github.com/Kiruthikeyan-S/car-web",
    demo: "https://github.com/Kiruthikeyan-S/car-web",
  },
  {
    id: "p-8",
    title: "Olympic Medal Analysis",
    description: "Historical Olympic Games medal count trends, country ranking data analytics, and interactive timeline visualizations.",
    fullDetails: "Exploratory data analysis project inspecting 100+ years of Olympic data using Pandas, Seaborn, and Jupyter Notebook.",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analytics"],
    github: "https://github.com/Kiruthikeyan-S/Olympic-medal-counts-by-country-over-time",
    demo: "https://github.com/Kiruthikeyan-S/Olympic-medal-counts-by-country-over-time",
  },
  {
    id: "p-9",
    title: "Fake Social Media Detection",
    description: "Machine Learning model for classifying bot vs authentic profiles on social networks using feature engineering and Scikit-Learn.",
    fullDetails: "Analyzes profile metadata, post frequency, and user engagement ratios to predict fake accounts with high F1-score.",
    category: "AI / ML",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Scikit-Learn", "Machine Learning", "Data Mining"],
    github: "https://github.com/kanish777/fsm-pro",
    demo: "https://github.com/kanish777/fsm-pro",
  },
];

export const SERVICES = [
  {
    icon: "Brain",
    title: "AI Application Development",
    description: "Designing & deploying end-to-end intelligent software solutions powered by LLMs, machine learning, and custom APIs.",
  },
  {
    icon: "Code",
    title: "Frontend Development",
    description: "Building ultra-fast, responsive web interfaces using React 19, TypeScript, Tailwind CSS, Vite, and Framer Motion.",
  },
  {
    icon: "Layout",
    title: "UI/UX Design",
    description: "Crafting wireframes, high-fidelity prototypes, user flows, and scalable design systems in Figma.",
  },
  {
    icon: "Smartphone",
    title: "Responsive Website Design",
    description: "Ensuring pixel-perfect layouts optimized across desktop, tablet, and mobile devices for maximum engagement.",
  },
  {
    icon: "Cpu",
    title: "Machine Learning Solutions",
    description: "Developing predictive algorithms, classification models, and data pipelines using Scikit-Learn and Python.",
  },
  {
    icon: "Eye",
    title: "Computer Vision & OCR",
    description: "Building image recognition, object detection, and document text extraction systems using YOLO, OpenCV & EasyOCR.",
  },
  {
    icon: "BarChart3",
    title: "Dashboard & Power BI Reports",
    description: "Transforming raw data into interactive executive dashboards with real-time charts and data visualizations.",
  },
  {
    icon: "Database",
    title: "Data Analytics",
    description: "Performing data wrangling, exploratory analysis, and trend forecasting with Pandas, NumPy, and SQL.",
  },
];

export const CERTIFICATIONS = [
  { title: "Introduction to HTML, CSS & JavaScript", issuer: "Coursera", date: "Verified" },
  { title: "Foundations: Data, Data, Everywhere", issuer: "Coursera (Google Data Analytics)", date: "Verified" },
  { title: "Power BI Essential Training", issuer: "LinkedIn Learning", date: "Verified" },
  { title: "Databases and SQL for Data Science with Python", issuer: "Coursera", date: "Verified" },
  { title: "MongoDB Certified Developer, Associate", issuer: "MongoDB", date: "Certified" },
];

export const ACHIEVEMENTS = [
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "", label: "Internships" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 25, suffix: "+", label: "GitHub Repositories" },
  { value: 30, suffix: "+", label: "UI Designs" },
];

export const ACTIVITIES = [
  {
    title: "Finalist - Smart India Hackathon 2023",
    organization: "Velammal Engineering College",
    description: "Reached the Final Round of the prestigious Smart India Hackathon 2023 for developing innovative AI software solutions.",
    type: "Hackathon",
  },
  {
    title: "Mini Project Expo 'TECH GENESIS 25'",
    organization: "Velammal Engineering College",
    description: "Participated and showcased AI & Machine Learning projects at the annual TECH GENESIS 25 innovation expo.",
    type: "Project Expo",
  },
];

export const UI_UX_PROJECTS: UIDesign[] = [
  {
    id: "ui-1",
    title: "Tourist App",
    description: "Immersive travel discovery app with augmented reality destination previews & smart itinerary planner.",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    gradient: "from-blue-600 to-cyan-500",
    figmaUrl: "https://figma.com",
    prototypeUrl: "https://figma.com",
  },
  {
    id: "ui-2",
    title: "Cupcake Shop",
    description: "Vibrant e-commerce experience for custom bakery orders with interactive cake customizer.",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    gradient: "from-pink-500 to-rose-400",
    figmaUrl: "https://figma.com",
    prototypeUrl: "https://figma.com",
  },
  {
    id: "ui-3",
    title: "Water Bottle Website",
    description: "Minimalist landing page design for eco-friendly reusable water bottles with 3D product showcase.",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    gradient: "from-cyan-500 to-teal-400",
    figmaUrl: "https://figma.com",
    prototypeUrl: "https://figma.com",
  },
  {
    id: "ui-4",
    title: "Juice Website",
    description: "Fresh organic beverage brand design with vibrant fruit micro-interactions and smooth subscription flow.",
    category: "Branding & Web",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
    gradient: "from-amber-400 to-orange-500",
    figmaUrl: "https://figma.com",
    prototypeUrl: "https://figma.com",
  },
  {
    id: "ui-5",
    title: "Music Streaming App",
    description: "Sleek dark-mode audio platform with spatial audio visualization and personalized AI mix generator.",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    gradient: "from-purple-600 to-indigo-600",
    figmaUrl: "https://figma.com",
    prototypeUrl: "https://figma.com",
  },
  {
    id: "ui-6",
    title: "Healthcare Dashboard",
    description: "Clinical patient telemetry portal featuring real-time vitals monitoring & EHR data visualization.",
    category: "SaaS Dashboard",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    gradient: "from-emerald-500 to-teal-600",
    figmaUrl: "https://figma.com",
    prototypeUrl: "https://figma.com",
  },
  {
    id: "ui-7",
    title: "Restaurant Website",
    description: "Luxury dining online experience with table reservation engine and interactive visual menu.",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    gradient: "from-red-600 to-amber-600",
    figmaUrl: "https://figma.com",
    prototypeUrl: "https://figma.com",
  },
  {
    id: "ui-8",
    title: "Finance Dashboard",
    description: "Next-gen crypto & stock portfolio tracking suite with risk assessment metrics and dark glass UI.",
    category: "Fintech App",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    gradient: "from-emerald-400 to-cyan-500",
    figmaUrl: "https://figma.com",
    prototypeUrl: "https://figma.com",
  },
  {
    id: "ui-9",
    title: "Travel Booking App",
    description: "Flight, hotel & activity mobile booking ecosystem with dynamic price alert triggers.",
    category: "Mobile UX",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    gradient: "from-violet-500 to-purple-600",
    figmaUrl: "https://figma.com",
    prototypeUrl: "https://figma.com",
  },
];
