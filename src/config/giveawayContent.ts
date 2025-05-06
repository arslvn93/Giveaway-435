// This file centralizes all editable content for the giveaway page

// Prize section
export const prizeImages = [
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwyfHxjYWZlfGVufDB8fHx8MTc0NjU0ODY4MHww&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHw2fHxjYWZlfGVufDB8fHx8MTc0NjU0ODY4MHww&ixlib=rb-4.1.0", 
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwxMHx8Y2FmZXxlbnwwfHx8fDE3NDY1NDg2ODB8MA&ixlib=rb-4.1.0", 
];
export const prizeContent = {
  title: "Professional Spring Cleaning Makeover",
  description: "Refresh your home with our exclusive Professional Spring Cleaning Giveaway! Enjoy a thorough cleaning service valued at $300 that transforms your living space into a spotless haven—perfect for busy professionals ready to say goodbye to winter blues.",
  features: [
    "Comprehensive cleaning of all rooms including dusting, vacuuming, and mopping",
    "Pristine kitchen and bathroom detailing",
    "Elimination of cobwebs, dust bunnies, and clutter",
    "Free professional consultation for a personalized cleaning plan",
    "Ideal for busy young professionals seeking a refreshed space"
  ],
  value: "$300",
};

// Header section
export const headerContent = {
  title: "Win a $300 Professional Spring Cleaning Makeover!",
  description: "Tired of the winter mess? Enter now for a chance to reclaim your time and enjoy a sparkling, stress-free home with our exclusive spring cleaning giveaway.",
  ctaText: "Enter Now",
  heroImage: prizeImages[0],
  secondaryImage: prizeImages[1],
};

// Navigation section
export const navigationContent = {
  title: "Spring Cleaning Giveaway",
  links: [
    { name: 'Home', href: '#' },
    { name: 'Prize Details', href: '#prize' },
    { name: 'How to Enter', href: '#howToEnter' },
    { name: 'Rules', href: '#rules' },
    { name: 'Contact', href: '#contact' }
  ]
};

// How to Enter section
export const howToEnterContent = {
  title: "How to Enter",
  description: "Entering our Professional Spring Cleaning Giveaway is easy! Follow these simple steps for a chance to win a $300 cleaning service that will leave your home immaculate.",
  steps: [
    {
      icon: "Mail",
      title: "Fill Out the Form",
      description: "Provide your name and email address using the quick sign-up form."
    },
    {
      icon: "Share2",
      title: "Share with Friends",
      description: "Spread the word on social media for extra entries and a higher chance to win."
    },
    {
      icon: "Users",
      title: "Confirm Entry",
      description: "Keep an eye on your email to confirm your entry and secure your spot."
    }
  ],
  benefits: [
    { 
      icon: "Clock", 
      title: "Quick & Easy", 
      desc: "Entry takes less than a minute" 
    },
    { 
      icon: "Trophy", 
      title: "Extra Chances", 
      desc: "Earn additional entries by sharing"
    },
    { 
      icon: "Gift", 
      title: "Spotless Home", 
      desc: "Professional cleaning service valued at $300" 
    }
  ],
  formLabels: {
    nameLabel: "Your Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    submitButton: "Enter Giveaway",
    processingText: "Processing...",
    sharingPlatforms: ["Facebook", "Twitter", "Instagram"],
    sharingText: "Share for Extra Entries:",
    termsText: "By entering, you agree to our Terms & Conditions and Privacy Policy."
  },
  successMessage: {
    title: "Entry Submitted!",
    description: "Thank you for entering! Please check your email to confirm your entry."
  },
  currentEntries: 482
};

// Rules section
export const rulesContent = {
  title: "Rules & Eligibility",
  description: "Before entering our giveaway, please review the rules and eligibility requirements. We want everyone to have a fair chance at winning our Professional Spring Cleaning Makeover.",
  rules: [
    {
      question: "Who is eligible to enter?",
      answer: "Anyone 18 years or older is welcome to enter this giveaway."
    },
    {
      question: "How long does the giveaway run?",
      answer: "The promotion kicks off on May 6, 2025, and runs until May 31, 2025."
    },
    {
      question: "How will the winner be selected?",
      answer: "A winner will be chosen at random from all valid entries using a certified random selection process."
    },
    {
      question: "When and how will the winner be notified?",
      answer: "The winner will be notified via email within 48 hours of the giveaway closing. They must respond within 72 hours to claim the prize."
    },
    {
      question: "Can I enter more than once?",
      answer: "Each individual may submit one entry. Additional entries can be earned by sharing the giveaway on social media (up to 3 extra entries)."
    },
    {
      question: "How is my personal information handled?",
      answer: "Your information is securely stored and will be used solely for the purposes of this giveaway. We do not share your data with third parties."
    }
  ],
  imageUrl: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800",
  tipsForEntering: [
    "Double-check your email address for accuracy before submitting",
    "Share the giveaway on your social media platforms for more chances to win",
    "Mark your calendar for the draw on May 31, 2025"
  ],
  importantNotice: "Winners will be contacted by email. Please ensure to check your inbox and spam folder regularly after the giveaway ends.",
  supportEmail: "support@giveaway.com",
  termsText: "By entering, you agree to all rules and guidelines of the giveaway.",
  downloadRulesText: "Download Full Rules PDF"
};

// Contact section
export const contactContent = {
  title: "Get In Touch",
  email: "daaron@property.ca",
  phone: "",
  brokerage: {
    name: "Toronto Sports Entertainment",
    address: "123 Arena Blvd, Toronto"
  },
  disclaimer: "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  privacyPolicyText: "Privacy Policy"
};

// Footer section
export const footerContent = {
  aboutText: "Our Professional Spring Cleaning Giveaway is designed to help busy professionals enjoy a spotless and stress-free living space without lifting a finger.",
  email: "daaron@property.ca",
  phone: "",
  quickLinks: ["Home", "About", "Listings", "Contact", "Privacy Policy"],
  newsletterText: "Subscribe to our newsletter for the latest updates on giveaways and exclusive offers.",
  brokerage: {
    name: "Toronto Sports Entertainment",
    address: "123 Arena Blvd, Toronto"
  },
  disclaimer: "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  company: "The Sky Group Real Estate",
  privacyPolicyText: "Privacy Policy"
};

// Countdown
export const countdownContent = {
  endDate: new Date("May 31, 2025") 
};

// Color scheme configuration for the entire giveaway
export const colorScheme = {
  primary: {
    main: 'amber-600',
    light: 'amber-400',
    dark: 'amber-800',
    gradient: 'from-amber-500 to-amber-700',
    text: 'amber-700',
    textLight: 'amber-500',
    textDark: 'amber-900',
    hover: 'amber-700',
    border: 'amber-200',
    background: 'amber-50',
    accent: 'amber-100',
    accentDark: 'amber-300',
  },
  secondary: {
    main: 'white',
    text: 'gray-700',
    textLight: 'gray-600',
    textDark: 'gray-800',
    border: 'gray-200',
    background: 'white',
    accent: 'gray-100',
  },
  utility: {
    success: 'green-600',
    successLight: 'green-100',
    error: 'red-600',
    errorLight: 'red-100',
    warning: 'yellow-600',
    warningLight: 'yellow-100',
    info: 'blue-600',
    infoLight: 'blue-100',
  },
  gradients: {
    header: 'from-amber-100/70 via-amber-50/40 to-transparent',
    countdownBg: 'from-amber-800 to-amber-950',
    countdownText: 'from-amber-200 to-amber-400',
    prizeTitle: 'from-amber-700 to-amber-500',
    button: 'from-amber-500 to-amber-600',
    buttonHover: 'from-amber-600 to-amber-700',
  },
  shadows: {
    small: 'shadow-md',
    medium: 'shadow-lg',
    large: 'shadow-xl',
    extraLarge: 'shadow-2xl',
    glow: 'shadow-[0_0_15px_rgba(251,191,36,0.3)]',
  },
  animations: {
    float: 'animate-float',
    pulseSlow: 'animate-pulse-slow',
    bounceSlow: 'animate-bounce-slow',
  }
};