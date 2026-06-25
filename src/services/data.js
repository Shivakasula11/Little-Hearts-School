import Review1 from "../assets/Review1.jpeg";
import Review2 from "../assets/Review2.jpg";
import Review3 from "../assets/Review3.jpg";
import Review4 from "../assets/Review4.jpeg";
import Review5 from "../assets/Review5.jpg";
import Review6 from "../assets/Review6.jpg";
import Review7 from "../assets/Review7.jpg";
import Review8 from "../assets/Review8.jpg";
import Program1 from "../assets/Program1.png";
import Nursery from "../assets/Nursery.png";
import LKG from "../assets/Lkg.jpg";
import Ukg from "../assets/Ukg.png";
import PrimarySchool from "../assets/PrimarySchool.jpg";
import Event1 from "../assets/Events1.png";
import Event3 from "../assets/Event3.png";
import Event4 from "../assets/Events4.png";
import Event5 from "../assets/Event5.png";
import Sankaranthi from "../assets/Sankaranthi.png";
import Sankaranthi1 from "../assets/Sankaranthi1.png";
import Sankaranthi2 from "../assets/Sankaranthi2.png";
import Sankaranthi3 from "../assets/Sankaranthi3.png";
import Diwali1 from "../assets/Diwali1.png";
import Diwali2 from "../assets/Diwali2.png";
import Diwali3 from "../assets/Diwali3.jpg";
import Diwali4 from "../assets/Diwali4.jpg";
import RepublicDay from "../assets/RepublicDay.png";
import Children2 from "../assets/children2.png";
import Children3 from "../assets/children3.png";
import Republic2 from "../assets/Republic2.png";
import Republic3 from "../assets/Republic3.png";
import Sports1 from "../assets/Sports1.png";
import Sports2 from "../assets/Sports2.png";
import Sports3 from "../assets/Sports3.png";
import Sports4 from "../assets/Sports4.png";
import Sports5 from "../assets/Sports5.png";
import Sports6 from "../assets/Sports6.png";
import Sports7 from "../assets/Sports7.png";
import Sports8 from "../assets/Sports8.png";
import Sports9 from "../assets/Sports9.png";
import Sports10 from "../assets/Sports10.png";
import Sports11 from "../assets/Sports11.jpg";
import Sports12 from "../assets/Sports12.jpg";
import Sports13 from "../assets/Sports13.png";
import Sports14 from "../assets/Sports14.png";
import Sports15 from "../assets/Sports15.png";
import Sports16 from "../assets/Sports16.png";
import Sports17 from "../assets/Sports17.png";
import Holi2 from "../assets/Holi2.png";
import Holi1 from "../assets/Holi1.png";
import Holi3 from "../assets/Holi3.png";
// ----------------classrooms----------------//
import Classroom1 from "../assets/Classrooms/Classroom1.png";
import Classroom2 from "../assets/Classrooms/Classroom2.png";
import Classroom3 from "../assets/Classrooms/Classroom3.png";
import Classroom4 from "../assets/Classrooms/Classroom4.png";
import Classroom5 from "../assets/Classrooms/Classroom5.png";
import Classroom6 from "../assets/Classrooms/Classroom6.png";
import Classroom7 from "../assets/Classrooms/Classroom7.png";
import Classroom8 from "../assets/Classrooms/Classroom8.png";
import Classroom9 from "../assets/Classrooms/Classroom9.png";
import Classroom10 from "../assets/Classrooms/Classroom10.png";
import Classroom11 from "../assets/Classrooms/Classroom11.png";
import Classroom12 from "../assets/Classrooms/Classroom12.png";
import Classroom13 from "../assets/Classrooms/Classroom13.png";

// -----Activites----------------------//
import Activites1 from "../assets/Activites/Activity1.png";
import Activites2 from "../assets/Activites/Activity2.png";
import Activites3 from "../assets/Activites/Activity3.png";
import Activites4 from "../assets/Activites/Activity4.png";
import Activites5 from "../assets/Activites/Activity5.png";
import Activites6 from "../assets/Activites/Activity6.png";
import Activites7 from "../assets/Activites/Activity7.png";
import Activites8 from "../assets/Activites/Activity8.png";
import Activites9 from "../assets/Activites/Activity9.png";
import Activites10 from "../assets/Activites/Activity10.png";
import Activites11 from "../assets/Activites/Activity11.png";
import Activites12 from "../assets/Activites/Activity12.png";
import Activites13 from "../assets/Activites/Activity13.png";
import Activites14 from "../assets/Activites/Activity14.png";
import Activites15 from "../assets/Activites/Activity15.png";




import { SESSION_YEAR } from "../config/academicYear";

export const ACADEMIC_PROGRAMS = [
  {
    id: "playgroup",
    level: "Playgroup",
    ageGroup: "2.0 - 3.0 Years",
    description:
      "A cheerful transition from home, focusing on sensory exploration, social interaction, active play, and building preliminary communication habits.",
    features: [
      "Sensory & tactile play",
      "Basic motor skills development",
      "Social interaction & sharing",
      "Storytelling & music integration",
    ],
    image: Program1,
  },
  {
    id: "nursery",
    level: "Nursery",
    ageGroup: "3.0 - 4.0 Years",
    description:
      "A theme-based conceptual syllabus focusing on alphabets, numbers, primary colors, shapes, and early self-help habits within an interactive environment.",
    features: [
      "Early language exploration",
      "Creative coloring and painting",
      "Physical and social coordination",
      "Nursery rhymes & rhythm play",
    ],
    image: Nursery,
  },
  {
    id: "lkg",
    level: "LKG (Lower Kindergarten)",
    ageGroup: "4.0 - 5.0 Years",
    description:
      "Structured phonics reading, preliminary hands-on calculations, tracing, writing, and logical categorization tasks that nurture cognitive foundations.",
    features: [
      "Phonics reading & vocabulary",
      "Number concepts and basic addition",
      "Environmental studies integration",
      "Bilingual speech confidence",
    ],
    image: LKG,
  },
  {
    id: "ukg",
    level: "UKG (Upper Kindergarten)",
    ageGroup: "5.0 - 6.0 Years",
    description:
      "Advanced kindergarten grooming that secures cursive writing, foundational arithmetic operations, bilingual public speaking, and preparatory cognitive grooming for primary schooling.",
    features: [
      "Advanced phonic reading & spelling",
      "Basic subtraction & analytical math",
      "Creative journaling & tracing",
      "Cultural and stage performance",
    ],
    image: Ukg,
  },
  {
    id: "primary",
    level: "Primary School (Class 1 to 5)",
    ageGroup: "6.0 - 10.0+ Years",
    description:
      "Academic Excellence combining State Board frameworks with modern activity-based systems. We prioritize logical reasoning, Spoken English command, technology familiarity, and values.",
    features: [
      "Advanced Science, Math & Languages",
      "Spoken English & Debate mastery",
      "Digital computing foundations",
      "Leadership & sports involvement",
    ],
    image: PrimarySchool,
  },
];

export const STUDENT_DEVELOPMENT_PROGRAMS = [
  {
    id: "spoken-english",
    title: "Spoken English & Phonetics",
    description:
      "Immersive auditory learning, phonics drills, and regular direct communication loops ensuring natural accent construction and zero public-speaking fear.",
    muiIcon: "RecordVoiceOver",
  },
  {
    id: "reading-story",
    title: "Reading & Storytelling",
    description:
      "An interactive reading library encouraging children to craft and share their stories, sharpening memory, imagination, and sentence framing.",
    muiIcon: "AutoStories",
  },
  {
    id: "art-craft",
    title: "Art, Craft & Sensory Play",
    description:
      "Fingertip motor control development through custom clay molding, origami, canvas painting, and collaborative building projects.",
    muiIcon: "Brush",
  },
  {
    id: "music-dance",
    title: "Music & Dance Expression",
    description:
      "Rhythm exploration, traditional and folk performance sequences, and energetic movement therapies supporting joyful physical expression.",
    muiIcon: "MusicNote",
  },
  {
    id: "creative-thinking",
    title: "Creative Problem Solving",
    description:
      "Fun puzzles, building blocks challenges, simple experiments, and matching games that engage core curiosity and systematic reasoning.",
    muiIcon: "Lightbulb",
  },
  {
    id: "leadership",
    title: "Leadership & Social Empathy",
    description:
      "Class monitor roles, assembly leadership, team sportsmanship, and civic awareness that prepare students to lead with a kind and open heart.",
    muiIcon: "EmojiEvents",
  },
  {
    id: "sports-events",
    title: "Active Physical Education",
    description:
      "Yoga routines, agility drill circuits, and standard school track races promoting heart fitness, flexibility, and collective sportsmanship.",
    muiIcon: "FitnessCenter",
  },
  {
    id: "cultural-celebration",
    title: "Cultural Festivals & Events",
    description:
      "Celebrations of national festivals, annual function plays, and science exhibition days that bring pride and deep communal bonds.",
    muiIcon: "Celebration",
  },
];

const now = new Date();

const currentYear =
  now.getMonth() >= 5 ? now.getFullYear() : now.getFullYear() - 1;

export const LATEST_UPDATES = [
  {
    id: "1",
    tag: "Admission",
    title: `Admissions Open for Year ${SESSION_YEAR}`,
    date: `June 18, ${currentYear}`,
    content:
      "Enrollment is active from Playgroup to 5th Class. Register online or visit campus between 9:00 AM & 4:00 PM.",
  },
  {
    id: "2",
    tag: "Notice",
    title: "School Reopening Date Announced",
    date: `June 15, ${currentYear}`,
    content: `We are thrilled to welcome our small stars back! Classes will officially commence on modern, theme-based tracks on July 1st, ${currentYear}.`,
  },
  {
    id: "3",
    tag: "Event",
    title: "Upcoming Healthy Food Day Activity",
    date: `July 10, ${currentYear}`,
    content:
      "A school-wide celebration where students present colorful fruit platters and simple salads to model nutrition and sustainable diet choices.",
  },
  {
    id: "4",
    tag: "Activity",
    title: "One-on-One Meetings with Parents",
    date: "Monthly Feature",
    content:
      "Individual meetings with parents every 4th Saturday to track student progress, exchange feedback, and support overall academic and personal development.",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    parentName: "Ravi Kumar Kasula",
    occupation: "Software Engineer",
    childName: "Anshul Kasula",
    childClass: "UKG",
    content:
      "The personal focus on Spoken English and basic computer logic at Little Hearts is unbelievable. My child communicates fluently in English now, and absolutely looks forward to going to school every morning!",
    rating: 5,
    image: Review6,
  },
  {
    id: "t2",
    parentName: "Saritha G.",
    occupation: "Government Teacher",
    childName: "Sahasra G.",
    childClass: "1st Class",
    content:
      "As an educator myself, I am very critical of teaching standards. Little Hearts stands out completely. Their interactive activities, digital-equipped classroom lessons, and compassionate faculty are exceptional.",
    rating: 5,
    image: Review1,
  },
  {
    id: "t3",
    parentName: "M. Venkat Reddy",
    occupation: "Agriculturist & Business Owner",
    childName: "Karthik Reddy",
    childClass: "2nd Class",
    content:
      "In Devarakonda, we always wanted a premium, safe, and modern educational option for our young kids. Little Hearts delivers just that. The teachers are incredibly warm and the management communication is clear and parent-friendly.",
    rating: 5,
    image: Review2,
  },
  {
    id: "t4",
    parentName: "Priya Sharma",
    occupation: "Bank Manager",
    childName: "Aanya Sharma",
    childClass: "LKG",
    content:
      "My daughter has developed incredible confidence since joining Little Hearts. The phonics program is outstanding and her English pronunciation has improved tremendously within just three months of joining.",
    rating: 5,
    image: Review4,
  },
  {
    id: "t5",
    parentName: "Srinivas Reddy",
    occupation: "Medical Doctor",
    childName: "Aadhya Reddy",
    childClass: "Nursery",
    content:
      "The hygiene standards and CCTV monitoring give us complete peace of mind. The teachers treat every child like their own. The activity-based learning approach keeps my daughter excited about school every single day.",
    rating: 5,
    image: Review3,
  },
  {
    id: "t6",
    parentName: "Ammulya N.",
    occupation: "Homemaker",
    childName: "Harsha Vardhan",
    childClass: "3rd Class",
    content:
      "Little Hearts transformed my son from a shy child to a confident speaker. The cultural programs and stage events have removed his stage fear completely. The monthly PTM keeps us well informed about his progress.",
    rating: 4,
    image: Review5,
  },
  {
    id: "t7",
    parentName: "Rajesh Goud",
    occupation: "Business Owner",
    childName: "Tanvi Goud",
    childClass: "UKG",
    content:
      "The school bus service is very punctual and safe. My daughter loves the art and craft sessions. The digital classroom setup is something we never expected in Devarakonda. Truly a world-class experience for our town.",
    rating: 5,
    image: Review8,
  },
  {
    id: "t8",
    parentName: "Swathi K.",
    occupation: "Software Developer",
    childName: "Reyansh K.",
    childClass: "Playgroup",
    content:
      "Starting playgroup was emotional for us, but the teachers made the transition so smooth. My son stopped crying from the second day itself. The sensory play activities and caring environment are beyond our expectations.",
    rating: 5,
    image: Review7,
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: "Activity-Based Learning",
    description:
      "We move beyond standard textbooks. Focus is on practical engagement, puzzles, and sensory tasks.",
    muiIcon: "AutoAwesome",
    color: "#10b981",
  },
  {
    title: "Spoken English Boost",
    description:
      "Strict, supportive conversational norms, phonetics drills, and vocabulary builders from playgroup forward.",
    muiIcon: "RecordVoiceOver",
    color: "#6366f1",
  },
  {
    title: "Digital Classrooms",
    description:
      "Interactive smart boards, tablets integration, and colorful animated presentations to clarify complex lessons.",
    muiIcon: "Laptop",
    color: "#0ea5e9",
  },
  {
    title: "Individual Focus",
    description:
      "Maintained low teacher-to-student ratios, tracking individual mental milestones and progress trends.",
    muiIcon: "Handshake",
    color: "#f43f5e",
  },
  {
    title: "Extremely Safe Space",
    description:
      "CCTV-monitored facilities, vetted security, high sanitization routines, and first-aid response systems.",
    muiIcon: "VerifiedUser",
    color: "#14b8a6",
  },
  {
    title: "Experienced Faculty",
    description:
      "Warm, certified and highly trained early-childhood educators representing unparalleled child psychology expertise.",
    muiIcon: "School",
    color: "#f59e0b",
  },
  {
    title: "Parent Collaboration",
    description:
      "Instant mobile updates, monthly progress folders, and collaborative parent counseling tracks.",
    muiIcon: "Groups",
    color: "#8b5cf6",
  },
  {
    title: "Personality Development",
    description:
      "Public stage assemblies, confidence drills, moral education guides, and cultural events to conquer stage fear.",
    muiIcon: "SentimentVerySatisfied",
    color: "#f97316",
  },
];

export const SPECIAL_FEATURES_STRIP = [
  "🎙️ Regular Phonics & Accent Lab",
  "💻 Smart Digital Screening Program",
  "🚌 Safe & Supervised School Bus Services",
  "🥗 Planned Healthy Snack Days",
  "🎭 Periodic Stage Performing Art Assemblies",
  "🍼 Safe Play Pen with Quality Toys",
  "🏥 Emergency Healthcare Cover & First-Aid",
  "🗣️ Interactive Daily Spoken Drills",
];

export const MISSION_POINTS = [
  "To deliver the highest tier of comprehensive early childhood primary tutoring, keeping education accessible, active, and joyful.",
  "To inspire native-level Spoken English mastery, vocabulary construction, and natural child public expression in regular activities.",
  "To leverage immersive interactive displays, digital classrooms, and hands-on scientific kits alongside textbook structures.",
  "To design a protective, loving, and supportive space where parent collaboration keeps the growth journey transparent and safe.",
  "To instill strong leadership instincts, empathy, global values, and civic duty within playful everyday frameworks.",
  "To encourage creative questioning, individual decision making, and open problem-solving pathways across all levels.",
  "To nurture sensory, physical, artistic, and athletic habits, molding highly balanced, confident, and empathetic young leaders.",
];

export const GALLERY_ITEMS = [
  // ── Classrooms ──
  {
    id: "g1",
    category: "Classrooms",
    title: "Smart Digital Classroom Integration",
    description:
      "Equipped with smart digital screens to render concepts transparent and exciting.",
    image: Classroom1,
    images: [Classroom1, Classroom3, Classroom4, Classroom2],
  },
  {
    id: "g7",
    category: "Classrooms",
    title: "Safe Play Area",
    description: "Equipped with child-safe toys and climbing setups.",
    image: Classroom5,
    images: [Classroom6, Classroom7, Classroom8, Classroom5],
  },
  {
    id: "g18",
    category: "Classrooms",
    title: "Vibrant Learning Corners",
    description:
      "Theme-decorated corners for reading, math, and science sparking curiosity at every glance.",
    image: Classroom9,
    images: [Classroom9, Classroom10, Classroom2, Classroom5],
  },
  {
    id: "g19",
    category: "Classrooms",
    title: "Interactive Whiteboard Sessions",
    description:
      "Teachers using smart boards for animated lessons that make complex concepts simple and fun.",
    image: Classroom11,
    images: [Classroom12, Classroom11, Classroom13],
  },
  {
    id: "g20",
    category: "Classrooms",
    title: "Library & Reading Nook",
    description:
      "A cozy, well-stocked reading space where children explore picture books and early readers independently.",
    image: Classroom2,
    images: [Classroom4, Classroom8, Classroom3, Classroom2],
  },

  // ── Activities ──
  {
    id: "g2",
    category: "Activities",
    title: "Interactive Art & Clay Modeling",
    description:
      "Sharpening fine motor control and giving form to bold creations and drawings.",
    image: Activites1,
    images: [Activites2, Activites3, Activites4, Activites1],
  },
  {
    id: "g3",
    category: "Activities",
    title: "Sensory Blocks and Analytical Builders",
    description:
      "Playgroup kids cooperating to build modern towers, learning mechanics naturally.",
    image: Activites5,
    images: [Activites5, Activites6, Activites7, Activites4],
  },
  {
    id: "g4",
    category: "Activities",
    title: "Storytelling Reading Circles",
    description:
      "Highly engaging phonic reading hours fostering an unbreakable love for literature.",
    image: Activites8,
    images: [Activites9, Activites3, Activites8, Activites1],
  },
  {
    id: "g16",
    category: "Activities",
    title: "Music & Rhythm Exploration",
    description:
      "Hands-on musical instrument play nurturing auditory skills and rhythmic expression in every child.",
    image:
     Activites10,
    images: [
             Activites11,
       Activites12,
       Activites9,
      Activites10,

    ],
  },
  {
    id: "g17",
    category: "Activities",
    title: "Outdoor Nature Walk & Discovery",
    description:
      "Guided nature exploration helping children observe plants, insects, and seasonal changes firsthand.",
    image:
    Activites15,
    images: [
        Activites15,
        Activites14,
        Activites13,
        Activites15,

     
    ],
  },

  // ── Events ──
  {
    id: "g5",
    category: "Events",
    title: "Republic Day Celebrations",
    description:
      "Patriotic flag hoisting, march-past parades, national anthem singing, and tiny tots dressed as freedom fighters honoring our Constitution.",
    image: Event1,
    images: [Event1, RepublicDay, Republic2, Republic3],
  },
  {
    id: "g8",
    category: "Events",
    title: "Diwali Festival Celebrations",
    description:
      "Sparkling diya decorations, rangoli art, traditional sweets sharing, and cultural performances celebrating the festival of lights.",
    image: Diwali1,
    images: [Diwali1, Diwali2, Diwali3, Diwali4],
  },
  {
    id: "g13",
    category: "Events",
    title: "Holi Festival Celebrations",
    description:
      "Joyful color splashing, gulal play, traditional folk dances, and vibrant themed dress-up bringing the spirit of spring alive.",
    image: Event4,
    images: [Event4, Holi2, Holi1, Holi3],
  },
  {
    id: "g14",
    category: "Events",
    title: "Children's Day Special Program",
    description:
      "Children performing colorful dances and cultural activities, building confidence and stage presence.",
    image: Event5,
    images: [Event5, Event3, Children2, Children3],
  },
  {
    id: "g15",
    category: "Events",
    title: "Sankranti Festival Celebrations",
    description:
      "Colorful rangoli competitions, kite flying, traditional dress parades, and Pongal pot decorating with festive cheer.",

    image: Sankaranthi1,
    images: [Sankaranthi1, Sankaranthi, Sankaranthi2, Sankaranthi3],
  },

  // ── Sports ──
  {
    id: "g6",
    category: "Sports",
    title: "Mind Games & Strategy Play",
    description:
      "Chess, puzzles, and focus-building games that sharpen young minds and patience.",
    image: Sports1,
    images: [Sports2, Sports3, Sports4, Sports1],
  },
  {
    id: "g9",
    category: "Sports",
    title: "Football Fun on the Ground",
    description:
      "Friendly football matches building stamina, teamwork, and a healthy competitive spirit.",
    image: Sports5,
    images: [Sports6, Sports7, Sports8, Sports5],
  },
  {
    id: "g10",
    category: "Sports",
    title: "Bat, Ball & Team Spirit",
    description:
      "Cricket sessions and team games teaching coordination, sportsmanship, and joyful collaboration.",
    image: Sports9,
    images: [Sports2, Sports5, Sports10, Sports9],
  },
  {
    id: "g11",
    category: "Sports",
    title: "Morning Exercise Assembly",
    description:
      "Energetic stretching routines and warm-up drills that kickstart every school day with vitality.",
    image: Sports12,
    images: [Sports13, Sports12, Sports8, Sports9],
  },
  {
    id: "g12",
    category: "Sports",
    title: "Sports Day Champions",
    description:
      "Annual sports day cheers, victory moments, and the joy of celebrating every little winner.",
    image: Sports14,
    images: [Sports15, Sports16, Sports17, Sports14],
  },
];
