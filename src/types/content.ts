/**
 * Navigation link interface
 */
export interface NavLink {
  name: string
  path: string
  target?: '_blank'
}

/**
 * Feature card interface
 */
export interface FeatureCard {
  title: string
  description: string
  icon?: string
}

/**
 * Quote interface
 */
export interface Quote {
  text: string
  author: string
}

/**
 * Hero section interface
 */
export interface Hero {
  title: string
  subtitle: string
}

/**
 * Call to action interface
 */
export interface CTA {
  title: string
  buttonText: string
  buttonLink: string
}

/**
 * Home page content interface
 */
export interface HomeContent {
  hero: Hero
  features: FeatureCard[]
  cta: CTA
}

/**
 * Pledge page content interface
 */
export interface PledgeContent {
  hero: Hero
  features: {
    title: string
    cards: FeatureCard[]
  }
  pledge: {
    title: string
    description: string
    buttonText: string
    buttonLink: string
  }
  quotes: Quote[]
  donate: {
    title: string
    description: string
    buttonText: string
    buttonLink: string
  }
}

/**
 * About page content interface
 */
export interface AboutContent {
  hero: Hero
  mission: {
    title: string
    description: string
  }
  members: {
    title: string
    description: string
    buttonText: string
    buttonLink: string
  }
  documentation: {
    title: string
    description: string
    buttonText: string
    buttonLink: string
  }
}

/**
 * Navigation content interface
 */
export interface NavigationContent {
  main: NavLink[]
  footer: {
    contact: {
      email: string
      twitter: string
    }
    social: {
      name: string
      url: string
      icon: string
    }[]
  }
}
