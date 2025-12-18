// @ts-ignore
import heroImage from './assets/hero-real.jpg';

export const SITE = {
  website: 'https://cerulean-valkyrie-18a2b2.netlify.app/', // Replace with your actual deployed URL
  author: 'Sociedad de alumnos de la LiFTA',
  description: 'Una pagian web de Fisicos para Fisicos.',
  title: 'Licenciatura en Fisica y Tecnologia',
  ogImage: 'astropaper-og.jpg',
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  
  // Lab Info
  labName: 'Licenciatura en Fisica y Tecnologia',
  university: 'Univercidad Autonoma del Estado de Hidalgo (UAEH)',
  logo: '/assets/logo-real.svg', // Logo path
  avatar: '/assets/logo-real.svg', // Avatar for SEO/Schema
  email: 'contact@lab.edu', // Contact email for Join Us page

  // Hero Section (Home Page) - Main content does not need to be translated for 8 languages by default
  hero: {
    title: 'Advancing Computer Vision & Deep Learning Research.',
    subtitle: 'We are the Scholar-Lite Lab.',
    action: 'View Publications', // Optional call to action text
    image: heroImage, // Hero image path
  },

  // Navigation
  nav: [
    { text: 'Home', link: '/', key: 'home' },
    { text: 'Research', link: '/research', key: 'research' },
    { text: 'Achievements', link: '/achievements', key: 'achievements' },
    { text: 'Team', link: '/team', key: 'team' },
    { text: 'Activities', link: '/activities', key: 'activities' },
    { text: 'Join Us', link: '/join', key: 'join' },
    { text: 'Search', link: '/search', key: 'search' },
  ],

  // Custom Pages (Appended after 'Join Us')
  customPages: [
    // Example: { text: 'Alumni', link: '/alumni', key: 'alumni' }
  ],
  
  // i18n Config
  i18n: {
    enabled: false,
    defaultLocale: 'zh',
  }
};

export const LOCALE = {
  lang: 'es', // html lang code. Set this empty and default will be "en"
  langTag: ['es-ES'], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS = [
  {
    link: 'https://github.com/fjd2004711/scholar-lite',
    active: true,
  },
];

// Default language configuration
export const DEFAULT_LANG: 'zh' | 'en' | 'ja' | 'ko' | 'fr' | 'de' | 'es' | 'ru' = 'en'; 
