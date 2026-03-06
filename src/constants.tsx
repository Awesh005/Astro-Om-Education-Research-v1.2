import { BookOpen, Users, Award, Star, CheckCircle, Clock, DollarSign, Zap, Target, Shield, Smile, TrendingUp, Book, Monitor, PenTool, Globe, Cpu, Layers, Lightbulb, UserCheck, Smartphone, Megaphone, Code, Briefcase } from 'lucide-react';

export const COURSES = [
  {
    id: 1,
    title: "Class 6th",
    description: "Strong foundation building in Mathematics, Science, and English to prepare for future academic challenges.",
    icon: <BookOpen />,
    level: "Foundation",
    duration: "1 Month",
    technologies: ["English", "Mathematics", "Science", "Social Science", "Computer + AI"],
    feeStructure: {
      cbse: "/price list/6 cbse.jpeg",
      state: "/price list/6 state.jpeg"
    },
    syllabus: [
      {
        subject: "English",
        topics: [
          "English Reader (Prose & Poems)",
          "Supplementary Reader",
          "Reading, Writing, Grammar, and Literature"
        ]
      },
      {
        subject: "Mathematics",
        topics: [
          "Mathematics Textbook",
          "Arithmetic",
          "Algebra",
          "Geometry",
          "Data Handling"
        ]
      },
      {
        subject: "Science",
        topics: [
          "Science Textbook",
          "Basic concepts of Physics, Chemistry, and Biology"
        ]
      },
      {
        subject: "Social Science",
        topics: [
          "History",
          "Geography",
          "Civics",
          "Social and Environmental Studies"
        ]
      },
      {
        subject: "Computer + IT ",
        subSections: [
          {
            title: "Theory",
            topics: [
              "Basics of Computer and its Parts",
              "Hardware and Software",
              "Operating System and Windows",
              "Keyboard and Mouse",
              "Memory and Storage",
              "Computer Safety"
            ]
          },
          {
            title: "Practical",
            topics: [
              "Starting and Shutting Down the Computer",
              "Mouse and Keyboard Practice",
              "Paint and Basic Typing",
              "File and Folder Management",
              "MS Word Basics"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Class 7th",
    description: "Concept strengthening and analytical skill development with focused curriculum.",
    icon: <BookOpen />,
    level: "Foundation",
    duration: "1 Month",
    technologies: ["English", "Mathematics", "Science", "Social Science", "Computer + AI"],
    feeStructure: {
      cbse: "/price list/7 cbse.jpeg",
      state: "/price list/7 state.jpeg"
    },
    syllabus: [
      {
        subject: "English",
        topics: [
          "English Reader (Prose & Poems)",
          "Supplementary Reader",
          "Reading, Writing, Grammar, Literature"
        ]
      },
      {
        subject: "Mathematics",
        topics: [
          "Mathematics Textbook",
          "Number System",
          "Algebra",
          "Geometry",
          "Mensuration"
        ]
      },
      {
        subject: "Science",
        topics: [
          "Science Textbook",
          "Physics",
          "Chemistry",
          "Biology"
        ]
      },
      {
        subject: "Social Science",
        topics: [
          "History",
          "Geography",
          "Civics",
          "Social Studies"
        ]
      },
      {
        subject: "Computer + IT",
        subSections: [
          {
            title: "Theory",
            topics: [
              "OS Review & Functions",
              "Windows Explorer",
              "MS Word Advanced",
              "MS PowerPoint",
              "Internet & Email",
              "Computer Networks",
              "Cyber Safety"
            ]
          },
          {
            title: "Practical",
            topics: [
              "File & Folder Operations",
              "MS Word Formatting",
              "PowerPoint Presentations",
              "Internet & Email Practice",
              "Small Projects"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Class 8th",
    description: "Comprehensive foundation course covering all major subjects including Mathematics, Science, and English.",
    icon: <BookOpen />,
    level: "Foundation",
    duration: "1 Month",
    technologies: ["English", "Mathematics", "Science", "Social Science", "Computer + AI"],
    feeStructure: {
      cbse: "/price list/8 cbse.jpeg",
      state: "/price list/8 state.jpeg"
    },
    syllabus: [
      {
        subject: "English",
        topics: [
          "Honeydew (Prose & Poems)",
          "It So Happened (Supplementary Reader)",
          "Reading, Writing, Grammar, Literature"
        ]
      },
      {
        subject: "Mathematics",
        topics: [
          "Algebraic Expressions & Identities",
          "Visualising Solid Shapes",
          "Mensuration",
          "Exponents & Powers",
          "Direct & Inverse Proportion",
          "Factorisation",
          "Introduction to Graphs",
          "Playing with Numbers",
          "Rational Numbers",
          "Linear Equations in One Variable",
          "Understanding Quadrilaterals",
          "Practical Geometry",
          "Data Handling",
          "Squares & Square Roots",
          "Cubes & Cube Roots",
          "Comparing Quantities"
        ]
      },
      {
        subject: "Science",
        subSections: [
          {
            title: "Chemistry",
            topics: [
              "Synthetic Fibres & Plastics",
              "Materials: Metals & Non-Metals",
              "Coal & Petroleum",
              "Combustion & Flame"
            ]
          },
          {
            title: "Physics",
            topics: [
              "Force & Pressure",
              "Friction",
              "Sound",
              "Light"
            ]
          },
          {
            title: "Biology",
            topics: [
              "Crop Production & Management",
              "Microorganisms",
              "Conservation of Plants & Animals",
              "Cell – Structure & Functions",
              "Reproduction in Animals",
              "Reaching the Age of Adolescence"
            ]
          }
        ]
      },
      {
        subject: "Social Science)",
        subSections: [
          {
            title: "Geography",
            topics: [
              "Resources",
              "Land, Soil, Water, Natural Vegetation & Wildlife",
              "Minerals & Power Resources",
              "Agriculture",
              "Industries",
              "Human Resources"
            ]
          },
          {
            title: "History",
            topics: [
              "How, When & Where",
              "From Trade to Territory",
              "Ruling the Countryside",
              "Tribals, Dikus & Vision of a Golden Age",
              "When People Rebel (1857)",
              "Colonialism & the City",
              "Weavers, Iron Smelters & Factory Owners",
              "Civilising the “Native”, Educating the Nation"
            ]
          },
          {
            title: "Civics (Political Science)",
            topics: [
              "Indian Constitution",
              "Secularism",
              "Parliament",
              "Judiciary",
              "Understanding Marginalisation",
              "Public Facilities",
              "Law & Social Justice"
            ]
          }
        ]
      },
      {
        subject: "IT & Programming",
        topics: [
          "Computer Basics",
          "MS Word / Excel / PowerPoint",
          "Introduction to Scratch / Python",
          "Internet & Cyber Safety"
        ]
      },
      {
        subject: "Practical",
        topics: [
          "Create PPT & Documents",
          "Simple Scratch Projects",
          "Excel Data Sheet",
          "Keyboard & Typing Practice"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Class 9th",
    description: "Advanced foundation course preparing students for board exams with focus on conceptual clarity.",
    icon: <BookOpen />,
    level: "Intermediate",
    duration: "1 Month",
    technologies: ["English", "Mathematics", "Science", "Social Science", "Computer + AI"],
    feeStructure: {
      cbse: "/price list/9 cbse.jpeg",
      state: "/price list/9 state.jpeg"
    },
    syllabus: [
      {
        subject: "English",
        topics: [
          "Beehive (Prose & Poems)",
          "Moments (Supplementary Reader)",
          "Reading, Writing, Grammar, Literature"
        ]
      },
      {
        subject: "Mathematics",
        topics: [
          "Quadrilaterals",
          "Areas of Parallelograms & Triangles",
          "Circles",
          "Constructions",
          "Heron’s Formula",
          "Surface Areas & Volumes",
          "Statistics",
          "Probability",
          "Number Systems",
          "Polynomials",
          "Coordinate Geometry",
          "Linear Equations in Two Variables",
          "Introduction to Euclid’s Geometry",
          "Lines & Angles",
          "Triangles"
        ]
      },
      {
        subject: "Science",
        subSections: [
          {
            title: "Chemistry",
            topics: [
              "Matter in Our Surroundings",
              "Is Matter Around Us Pure?",
              "Atoms & Molecules",
              "Structure of the Atom"
            ]
          },
          {
            title: "Physics",
            topics: [
              "Motion",
              "Force & Laws of Motion",
              "Gravitation",
              "Work, Energy & Power",
              "Sound"
            ]
          },
          {
            title: "Biology",
            topics: [
              "The Fundamental Unit of Life",
              "Tissues",
              "Diversity in Living Organisms",
              "Why Do We Fall Ill",
              "Natural Resources",
              "Improvement in Food Resources"
            ]
          }
        ]
      },
      {
        subject: "Social Science",
        subSections: [
          {
            title: "Geography",
            topics: [
              "India – Size & Location",
              "Physical Features of India",
              "Drainage",
              "Climate",
              "Natural Vegetation & Wildlife",
              "Population"
            ]
          },
          {
            title: "History",
            topics: [
              "The French Revolution",
              "Socialism in Europe & the Russian Revolution",
              "Nazism & the Rise of Hitler",
              "Forest Society & Colonialism",
              "Pastoralists in the Modern World"
            ]
          },
          {
            title: "Political Science (Civics)",
            topics: [
              "What is Democracy? Why Democracy?",
              "Constitutional Design",
              "Electoral Politics",
              "Working of Institutions",
              "Democratic Rights"
            ]
          },
          {
            title: "Economics",
            topics: [
              "The Story of Village Palampur",
              "People as Resource",
              "Poverty as a Challenge",
              "Food Security in India"
            ]
          }
        ]
      },
      {
        subject: "IT & Programming",
        topics: [
          "Basics of Python",
          "Flowcharts & Algorithms",
          "MS Excel (Functions)",
          "HTML Basics",
          "IT & ITeS Industry overview",
          "Data Entry & Keyboarding Skills",
          "Digital Documentation (Writer)",
          "Electronic Spreadsheet (Calc)",
          "Digital Presentation (Impress)",
          "Employability Skills"
        ]
      },
      {
        subject: "Practical",
        topics: [
          "Python Programs",
          "HTML Web Page",
          "Excel Formulas",
          "Project File",
          "Typing practice (Rapid Typing)",
          "Create document with formatting",
          "Table creation in Writer",
          "Excel formulas: SUM, AVERAGE",
          "Simple presentation with animation"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Class 10th",
    description: "Board exam preparation with rigorous practice, mock tests, and doubt clearing sessions. Supports CBSE, JAC, and State Boards.",
    icon: <BookOpen />,
    level: "Board Exam",
    duration: "1 Month",
    technologies: ["English", "Mathematics", "Science", "Social Science", "Computer + AI"],
    feeStructure: {
      cbse: "/price list/10 cbse.jpeg",
      state: "/price list/10 state.jpeg"
    },
    syllabus: [
      {
        subject: "English",
        topics: [
          "First Flight (Prose & Poems)",
          "Footprints Without Feet (Supplementary Reader)",
          "Reading, Writing, Grammar, Literature"
        ]
      },
      {
        subject: "Mathematics",
        subSections: [
          {
            title: "Trigonometry",
            topics: [
              "Introduction to Trigonometry",
              "Trigonometric Identities",
              "Heights & Distances"
            ]
          },
          {
            title: "Geometry & Mensuration",
            topics: [
              "Circles",
              "Constructions",
              "Areas Related to Circles",
              "Surface Areas & Volumes"
            ]
          },
          {
            title: "Statistics & Probability",
            topics: [
              "Statistics",
              "Probability"
            ]
          },
          {
            title: "Algebra & Number Systems",
            topics: [
              "Real Numbers",
              "Polynomials",
              "Pair of Linear Equations in Two Variables",
              "Quadratic Equations",
              "Arithmetic Progressions",
              "Triangles",
              "Coordinate Geometry"
            ]
          }
        ]
      },
      {
        subject: "Science",
        subSections: [
          {
            title: "Chemistry",
            topics: [
              "Chemical Reactions & Equations",
              "Acids, Bases & Salts",
              "Metals & Non-Metals",
              "Carbon & its Compounds",
              "Sources of Energy"
            ]
          },
          {
            title: "Physics",
            topics: [
              "Light – Reflection & Refraction",
              "Human Eye & the Colourful World",
              "Electricity",
              "Magnetic Effects of Electric Current"
            ]
          },
          {
            title: "Biology",
            topics: [
              "Life Processes",
              "Control & Coordination",
              "How do Organisms Reproduce",
              "Heredity & Evolution",
              "Environment",
              "Resources & their Management"
            ]
          }
        ]
      },
      {
        subject: "Social Science",
        subSections: [
          {
            title: "Geography",
            topics: [
              "Resources & Development",
              "Forest & Wildlife Resources",
              "Water Resources",
              "Agriculture",
              "Minerals & Energy Resources",
              "Manufacturing Industries",
              "Lifelines of National Economy"
            ]
          },
          {
            title: "History",
            topics: [
              "The Rise of Nationalism in Europe",
              "Nationalism in India",
              "The Making of a Global World",
              "The Age of Industrialisation",
              "Print Culture & the Modern World"
            ]
          },
          {
            title: "Political Science (Civics)",
            topics: [
              "Power Sharing",
              "Federalism",
              "Democracy & Diversity",
              "Gender, Religion & Caste",
              "Political Parties",
              "Outcomes of Democracy"
            ]
          },
          {
            title: "Economics",
            topics: [
              "Development",
              "Sectors of the Indian Economy",
              "Money & Credit",
              "Globalisation & the Indian Economy",
              "Consumer Rights"
            ]
          }
        ]
      },
      {
        subject: "IT & Programming",
        topics: [
          "Python Programming",
          "Database Basics (SQL)",
          "Web Development Basics",
          "Writer: Styles & Templates",
          "Calc: Goal Seek, Charts",
          "Base: Table, Query, Form, Report",
          "Mini Database Project",
          "Viva & Practical File",
          "Advanced Digital Documentation",
          "Advanced Spreadsheet (What-if, Goal Seek)",
          "Workplace Safety & Cyber Security",
          "Employability Skills – II"
        ]
      },
      {
        subject: "Exam & Project Focus",
        topics: [
          "Python Project",
          "Database Queries",
          "Viva & Practical File",
          "Final IT Project",
          "Theory + Practical (50 + 50)",
          "Python / IT Practical File",
          "Project-based Learning",
          "Board Exam Oriented"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Extra Skills (Astro)",
    description: "Skill development courses including IT, Computer Science, and Personality Development.",
    icon: <Zap />,
    level: "Skill Dev",
    duration: "Flexible",
    technologies: ["Extra Skill Development", "Computer + AI"],
    syllabus: [
      {
        subject: "Extra Skill Development",
        topics: [
          "Image Editing (Canva / Basic Photoshop tools)",
          "Video Editing (Basic mobile & PC tools)",
          "GitHub Basics (Project upload & version control)",
          "AI Tools Usage",
          "AI for learning & projects",
          "AI-based content & productivity tools"
        ]
      },
      {
        subject: "Student-Centric Benefits",
        topics: [
          "Doubt-clearing sessions",
          "Project & practical support",
          "Career guidance (IT & future skills)",
          "Smart learning with pocket-friendly fees"
        ]
      }
    ]
  }
];

export const FOCUS_AREAS = [
  {
    id: 1,
    title: "Academic Excellence",
    description: "We provide world-class curriculum and modern teaching methodologies to ensure top-notch academic performance.",
    icon: <Award />
  },
  {
    id: 2,
    title: "Clarity of Thought",
    description: "Our teaching focuses on building strong concepts and critical thinking skills in students.",
    icon: <Lightbulb />
  },
  {
    id: 3,
    title: "Personality Development",
    description: "Holistic development including confidence building, communication skills, and leadership qualities.",
    icon: <UserCheck />
  },
  {
    id: 4,
    title: "Discipline & Values",
    description: "Inculcating ethical values and discipline to prepare students for life's challenges.",
    icon: <Shield />
  }
];

export const IT_SERVICES = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom website development using modern technologies like React, Next.js, and Node.js to build responsive and scalable web applications.",
    icon: <Globe />
  },
  {
    id: 2,
    title: "App Development",
    description: "Native and cross-platform mobile app development for Android and iOS using Flutter and React Native.",
    icon: <Smartphone />
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies including SEO, social media marketing, and content marketing to grow your brand.",
    icon: <Megaphone />
  },
  {
    id: 4,
    title: "Software Development",
    description: "End-to-end software development services tailored to your business needs, from requirement analysis to deployment.",
    icon: <Code />
  },
  {
    id: 5,
    title: "IT Consulting",
    description: "Expert IT consulting to help you make informed decisions about technology adoption and digital transformation.",
    icon: <Briefcase />
  },
  {
    id: 6,
    title: "Graphic Design",
    description: "Creative graphic design services for branding, marketing materials, and user interface design.",
    icon: <PenTool />
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 1,
    title: "Low Fees",
    description: "High-quality education at affordable rates. 'Tea ke kharch mein padhe'.",
    icon: <DollarSign />
  },
  {
    id: 2,
    title: "High Quality Content",
    description: "Exam-oriented preparation with strong theoretical concepts and practical learning.",
    icon: <Star />
  },
  {
    id: 3,
    title: "For Every Student",
    description: "Education accessible to everyone, from Class 6 to Class 10.",
    icon: <Users />
  },
  {
    id: 4,
    title: "Modern Methodology",
    description: "Scientific teaching methods integrated with practical knowledge.",
    icon: <Cpu />
  }
];


export const TESTIMONIALS = [
  {
    id: 1,
    name: "Aditya Kumar",
    role: "Class 10 Student",
    content: "Astro Om Education has completely changed my approach to learning. The teachers don't just make you memorize; they ensure you understand the core concepts. My grades have improved significantly, and I feel much more confident for my board exams.",
    avatar: "https://picsum.photos/seed/student_boy_1/100/100"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Class 8 Student",
    content: "The personalized attention I received here is unmatched. The 'Extra Skills' sessions on personality development gave me the confidence to speak in public. It's not just about marks here; it's about overall growth.",
    avatar: "https://picsum.photos/seed/student_girl_1/100/100"
  },
  {
    id: 3,
    name: "Rajesh Singh",
    role: "Parent of Class 6 Student",
    content: "Finding quality education at an affordable price is rare. Astro Om lives up to its promise of 'Tea ke kharch mein padhe'. My son is learning practical skills alongside his regular studies. Highly recommended!",
    avatar: "https://picsum.photos/seed/parent_father_1/100/100"
  }
];

