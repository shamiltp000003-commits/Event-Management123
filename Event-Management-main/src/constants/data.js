//data.js

import { TbBuildingBank } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";
import { BiSolidMagicWand } from "react-icons/bi";
import { IoCameraOutline } from "react-icons/io5";
import Mainbg from "../assets/mainbg2.jpg";
import Mainbg2 from "../assets/mainbg3.jpg";
import decor from "../assets/decoration1.jpg";
import photogrpher from "../assets/photogrpher.jpg";

export const adminDashboard_data = {
  "Totalusers": 12,
  "Totalproviders": 3,
  "Totalbookings": 9,
  "registrations": 240,
  "feedbackReceived": 95
};

export const providerDashboard_data = {
  "BookingsRecieved": 55,
     "PaymentHistory": 55,
     "FeedbackReceived": 15
};

export const testimonials = [
    { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides." },
    { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!" },
    { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!" }
];

//////////////////////////////////////


export const categories = [
  {
    name: "Auditorium",
    icon: TbBuildingBank,
    slug: "auditorium",
    image: Mainbg,
  },
  {
    name: "Catering",
    icon: GiKnifeFork,
    slug: "catering",
    image: Mainbg2,
  },
  {
    name: "Decoration",
    icon: BiSolidMagicWand,
    slug: "stage-decoration",
    image: decor,
  },
  {
    name: "Photography",
    icon: IoCameraOutline,
    slug: "photography",
    image: photogrpher,
  },
];


///////////////////////////////////////////////////////////
export const auditoriumServices = [
  {
    id: "aud1",
    auditoriumName: "Green Valley Convention Center",
    location: "Calicut",
    ownerContact: "9998887776",
    capacity: 700,

    pricePerDay: 60000,
    pricePerHour: 8000,
    overtimePrice: 10000,
    acType: "AC",

    description:
      "Spacious hall ideal for receptions, engagements and exhibitions.",

    openingTime: "07:00",
    closingTime: "23:30",

    cancellationPolicy:
      "Cancellation allowed up to 10 days before the event with 70% refund. No refund within 72 hours.",

    category: "auditorium",
    providerId: "p101",

   images: [
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
]
  },

  {
    id: "aud2",
    auditoriumName: "Royal Pearl Auditorium",
    location: "Kochi",
    ownerContact: "9876543210",
    capacity: 500,

    pricePerDay: 45000,
    pricePerHour: 6500,
    overtimePrice: 9000,
    acType: "AC",

    description:
      "Premium AC auditorium suitable for weddings and corporate events.",

    openingTime: "08:00",
    closingTime: "22:00",

    cancellationPolicy:
      "Free cancellation up to 7 days before event. 50% refund within 3 days.",

    category: "auditorium",
    providerId: "p102",

    images: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&auto=format",
    "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=900&auto=format"
  ]
  },

  {
    id: "aud3",
    auditoriumName: "Silver Oak Community Hall",
    location: "Trivandrum",
    ownerContact: "9123456780",
    capacity: 350,

    pricePerDay: 30000,
    pricePerHour: 4500,
    overtimePrice: 6000,
    acType: "Non-AC",

    description:
      "Affordable community hall ideal for birthday parties and engagements.",

    openingTime: "06:00",
    closingTime: "23:00",

    cancellationPolicy:
      "Cancellation allowed up to 5 days before event with 50% refund.",

    category: "auditorium",
    providerId: "p103",

    images: [
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900&auto=format",
  "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=900&auto=format"
    ]
  },

  {
    id: "aud4",
    auditoriumName: "Emerald Grand Hall",
    location: "Thrissur",
    ownerContact: "9988776655",
    capacity: 900,

    pricePerDay: 85000,
    pricePerHour: 11000,
    overtimePrice: 14000,
    acType: "AC",

    description:
      "Luxury grand hall with modern interiors and large parking space.",

    openingTime: "07:00",
    closingTime: "23:59",

    cancellationPolicy:
      "Cancellation allowed up to 14 days before event with 80% refund.",

    category: "auditorium",
    providerId: "p104",

    images: [
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=900&auto=format",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=900&auto=format",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format",
  "https://images.unsplash.com/photo-1597047084897-51e81819a499?w=900&auto=format"
    ]
  },

  {
    id: "aud5",
    auditoriumName: "Lotus Mini Convention Hall",
    location: "Kannur",
    ownerContact: "9012345678",
    capacity: 200,

    pricePerDay: 18000,
    pricePerHour: 3000,
    overtimePrice: 4000,
    acType: "Non-AC",

    description:
      "Compact hall suitable for meetings, small functions and workshops.",

    openingTime: "08:00",
    closingTime: "21:00",

    cancellationPolicy:
      "No refund within 48 hours of the event.",

    category: "auditorium",
    providerId: "p105",

    images: [
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900&auto=format",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format"
  ]
  }
];

//////////////////////////////////////////////////////////////////////////

export const cateringServices = [
  {
    id: "cat1",
    companyName: "Royal Feast Caterers",
    ownerName: "Suresh Kumar",
    contactNumber: "9876543210",
    location: "Kochi",

    packages: [
      {
        id: "pkg1",
        packageName: "Wedding Veg Package",
        foodType: "veg",
        pricePerPerson: 450,
        description: "Traditional Kerala sadya with desserts"
      },
      {
        id: "pkg2",
        packageName: "Wedding Non-Veg Package",
        foodType: "non-veg",
        pricePerPerson: 750,
        description: "Chicken, mutton, fish, starters & desserts"
      }
    ],

    category: "catering",
    providerId: "p201",

    images: [
  "https://images.unsplash.com/photo-1555243896-c709bfa0b564?w=900&auto=format",
  "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=900&auto=format",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900&auto=format"
  ]
  },

  {
    id: "cat2",
    companyName: "Spice Route Caterers",
    ownerName: "Anil Varma",
    contactNumber: "9123456789",
    location: "Calicut",

    packages: [
      {
        id: "pkg3",
        packageName: "Engagement Veg Package",
        foodType: "veg",
        pricePerPerson: 350,
        description: "Light meals with sweets and snacks"
      },
      {
        id: "pkg4",
        packageName: "Engagement Combo Package",
        foodType: "both",
        pricePerPerson: 550,
        description: "Veg & non-veg combo with live counters"
      }
    ],

    category: "catering",
    providerId: "p202",

    images: [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&auto=format",
  "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=900&auto=format"
  ]
  },

  {
    id: "cat3",
    companyName: "Golden Spoon Catering",
    ownerName: "Rahul Menon",
    contactNumber: "9988776655",
    location: "Trivandrum",

    packages: [
      {
        id: "pkg5",
        packageName: "Birthday Party Package",
        foodType: "both",
        pricePerPerson: 400,
        description: "Kids & adult menu with cakes and snacks"
      }
    ],

    category: "catering",
    providerId: "p203",

    images: [
    "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=900&auto=format",
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=900&auto=format"
  ]
  },

  {
    id: "cat4",
    companyName: "Elite Banquet Caterers",
    ownerName: "Mohammed Shafi",
    contactNumber: "9012345678",
    location: "Thrissur",

    packages: [
      {
        id: "pkg6",
        packageName: "Corporate Lunch Package",
        foodType: "veg",
        pricePerPerson: 300,
        description: "Healthy corporate meals with beverages"
      },
      {
        id: "pkg7",
        packageName: "Corporate Premium Package",
        foodType: "both",
        pricePerPerson: 650,
        description: "Multi-cuisine menu with desserts"
      }
    ],

    category: "catering",
    providerId: "p204",

    images: [
  "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=900&auto=format",
  "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=900&auto=format",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&auto=format"
  ]
  },

  {
    id: "cat5",
    companyName: "HomeStyle Caterers",
    ownerName: "Lakshmi Nair",
    contactNumber: "8899776655",
    location: "Kannur",

    packages: [
      {
        id: "pkg8",
        packageName: "Home Event Veg Package",
        foodType: "veg",
        pricePerPerson: 250,
        description: "Simple home-style veg meals"
      }
    ],

    category: "catering",
    providerId: "p205",

    images: [
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=900&auto=format",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&auto=format"
]
  }
];

/////////////////////////////////////////////////////////////////////////////////////

export const photographyServices = [
  {
    id: "photo1",
    studioName: "LensCraft Studio",
    photographerName: "Arjun Menon",
    phone: "9876543210",
    email: "lenscraft@gmail.com",
    location: "Kochi",

    description:
      "Professional wedding and candid photography with cinematic storytelling.",

    serviceTypes: [
      "Wedding",
      "Candid",
      "Pre-Wedding",
      "Video Coverage"
    ],

    packages: [
      {
        id: "pkg1",
        name: "Wedding Basic",
        description: "Full day wedding coverage with 1 photographer",
        pricePerHour: 2500
      },
      {
        id: "pkg2",
        name: "Wedding Premium",
        description: "2 photographers + candid + highlights video",
        pricePerHour: 4500
      }
    ],

    category: "photography",
    providerId: "p401",

    images: [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&auto=format",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&auto=format"
]
  },

  {
    id: "photo2",
    studioName: "Moments Capture",
    photographerName: "Rahul Krishnan",
    phone: "9123456789",
    email: "momentscapture@gmail.com",
    location: "Trivandrum",

    description:
      "Creative photography for weddings, engagements and baby shoots.",

    serviceTypes: [
      "Wedding",
      "Engagement",
      "Baby Shoot",
      "Maternity"
    ],

    packages: [
      {
        id: "pkg3",
        name: "Engagement Package",
        description: "4-hour engagement coverage",
        pricePerHour: 2000
      }
    ],

    category: "photography",
    providerId: "p402",

    images: [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format"
]
  },

  {
    id: "photo3",
    studioName: "FrameStory Photography",
    photographerName: "Nikhil Das",
    phone: "9988776655",
    email: "framestory@gmail.com",
    location: "Calicut",

    description:
      "Modern candid photography with drone and cinematic video coverage.",

    serviceTypes: [
      "Candid",
      "Drone",
      "Video Coverage",
      "Corporate"
    ],

    packages: [
      {
        id: "pkg4",
        name: "Corporate Event Package",
        description: "Photography + short promotional video",
        pricePerHour: 3000
      }
    ],

    category: "photography",
    providerId: "p403",

    images: [
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format"
]

  },

  {
    id: "photo4",
    studioName: "DreamShot Studio",
    photographerName: "Sanjay Pillai",
    phone: "9012345678",
    email: "dreamshot@gmail.com",
    location: "Thrissur",

    description:
      "Affordable photography services for birthdays and family events.",

    serviceTypes: [
      "Birthday",
      "Traditional",
      "Family"
    ],

    packages: [
      {
        id: "pkg5",
        name: "Birthday Party Package",
        description: "3-hour event coverage with edited photos",
        pricePerHour: 1800
      }
    ],

    category: "photography",
    providerId: "p404",

    images: [
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format"
]

  },

  {
    id: "photo5",
    studioName: "Elite Wedding Stories",
    photographerName: "Faizal Ahmed",
    phone: "8899776655",
    email: "elitewedding@gmail.com",
    location: "Kannur",

    description:
      "Luxury wedding photography with international quality standards.",

    serviceTypes: [
      "Wedding",
      "Candid",
      "Pre-Wedding",
      "Drone",
      "Video Coverage"
    ],

    packages: [
      {
        id: "pkg6",
        name: "Luxury Wedding Package",
        description: "Full team, drone shots & cinematic wedding film",
        pricePerHour: 6000
      }
    ],

    category: "photography",
    providerId: "p405",

    images: [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&auto=format",
  "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=900&auto=format",
  "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?w=900&auto=format"
]

  }
];

//////////////////////////////////////////////////////////////////////////

export const decorationServices = [
  {
    id: "dec1",
    companyName: "Royal Stage Decorators",
    address: "MG Road, Kochi",
    location: "Kochi",
    phone: "9876543210",
    description:
      "Professional stage decoration services for weddings, receptions and events.",

    category: "stage-decoration",
    providerId: "p301",

    packages: [
      {
        title: "Classic Wedding Stage",
        description: "Floral backdrop with traditional lighting",
        category: "Affordable",
        pricePerDay: 25000
      },
      {
        title: "Premium Floral Stage",
        description: "Fresh flowers, premium drapes and LED lighting",
        category: "Premium",
        pricePerDay: 45000
      }
    ],

    images: [
  "https://images.unsplash.com/photo-1526045478516-99145907023c?w=900&auto=format",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&auto=format"
  ]

  },

  {
    id: "dec2",
    companyName: "Elegant Moments Decor",
    address: "Vyttila",
    location: "Kochi",
    phone: "9988776655",
    description:
      "Luxury and premium stage decorations with customized themes.",

    category: "stage-decoration",
    providerId: "p302",

    packages: [
      {
        title: "Engagement Elegant Stage",
        description: "Soft pastel theme with floral arches",
        category: "Premium",
        pricePerDay: 35000
      },
      {
        title: "Luxury Crystal Stage",
        description: "Crystal props, imported flowers and premium lighting",
        category: "Luxury",
        pricePerDay: 70000
      }
    ],

    images: [
  "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=900&auto=format",
  "https://images.unsplash.com/photo-1521334884684-d80222895322?w=900&auto=format"
]

  },

  {
    id: "dec3",
    companyName: "Dream Day Stage Designers",
    address: "Palayam",
    location: "Trivandrum",
    phone: "9123456789",
    description:
      "Affordable yet elegant stage decorations for small and medium events.",

    category: "stage-decoration",
    providerId: "p303",

    packages: [
      {
        title: "Birthday Party Stage",
        description: "Balloon decor with cartoon themes",
        category: "Affordable",
        pricePerDay: 12000
      }
    ],

    images: [
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&auto=format"
]

  },

  {
    id: "dec4",
    companyName: "Golden Petals Decoration",
    address: "Round North",
    location: "Thrissur",
    phone: "9012345678",
    description:
      "Specialized in traditional and modern wedding stage decorations.",

    category: "stage-decoration",
    providerId: "p304",

    packages: [
      {
        title: "Traditional Kerala Stage",
        description: "Banana stem, lamps and marigold flowers",
        category: "Affordable",
        pricePerDay: 18000
      },
      {
        title: "Royal Wedding Stage",
        description: "Grand royal setup with premium props and lighting",
        category: "Luxury",
        pricePerDay: 65000
      }
    ],

    images: [
  "https://images.unsplash.com/photo-1503424886307-b090341d25d1?w=900&auto=format",
  "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=900&auto=format",
  "https://images.unsplash.com/photo-1519160558534-579f51052e1a?w=900&auto=format"
]

  },

  {
    id: "dec5",
    companyName: "Blossom Event Decorators",
    address: "Civil Station Road",
    location: "Calicut",
    phone: "8899776655",
    description:
      "Creative and modern stage decorations for all types of events.",

    category: "stage-decoration",
    providerId: "p305",

    packages: [
      {
        title: "Minimal Theme Stage",
        description: "Simple backdrop with elegant lighting",
        category: "Affordable",
        pricePerDay: 15000
      },
      {
        title: "Premium Reception Stage",
        description: "Designer backdrop with LED panels and florals",
        category: "Premium",
        pricePerDay: 40000
      }
    ],

    images: [
  "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?w=900&auto=format",
  "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?w=900&auto=format"
]

  }
];

//////////////////////////////////////////////