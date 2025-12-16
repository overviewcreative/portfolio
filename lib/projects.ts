export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  featured?: boolean;
  featuredImage: {
    url: string;
    alt: string;
  };
  challenge: string;
  approach: {
    action: string;
    details: string;
  }[];
  quickFacts: {
    label: string;
    value: string;
  }[];
  gallery: {
    url: string;
    caption: string;
    alt: string;
  }[];
  videoEmbed?: {
    url: string;
    title: string;
  };
  links: {
    label: string;
    url: string;
  }[];
  accentColor: 'orange' | 'blue' | 'green';
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'ELEVATE WELLNESS CO. BRAND IDENTITY',
    description: 'Complete visual rebrand for a rapidly growing holistic wellness company',
    category: 'BRANDING',
    tags: ['BRAND', 'DESIGN', 'STRATEGY'],
    featured: true,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=700&fit=crop',
      alt: 'Brand identity system for Elevate Wellness Co.'
    },
    challenge:
      'Elevate Wellness Co. had launched with a generic logo and color palette that could belong to any wellness brand. As they expanded from a local studio to a national presence, their visual identity felt amateur and didn\'t command the premium positioning they deserved. They needed a distinctive visual system that reflected their philosophy of modern science meeting ancient wisdom.',
    approach:
      [
        {
          action: 'Conducted intensive brand discovery sessions',
          details: 'Held stakeholder interviews with founders to uncover core values, differentiation points, and brand philosophy.'
        },
        {
          action: 'Developed sophisticated color palette',
          details: 'Created a cohesive palette inspired by botanical elements and minimalist design that reflected wellness positioning.'
        },
        {
          action: 'Created versatile logo system',
          details: 'Designed multiple logo variations and applications for use across digital, print, packaging, and environmental applications.'
        },
        {
          action: 'Built comprehensive brand guidelines',
          details: 'Documented typography, spacing, imagery, color usage, and brand voice for consistent implementation across all channels.'
        },
        {
          action: 'Designed templates and systems',
          details: 'Created reusable templates for social content, email marketing, retail applications, and web to ensure scalability.'
        }
      ],
    quickFacts: [
      { label: 'TIMELINE', value: '5 months' },
      { label: 'DELIVERABLES', value: '60+ assets' },
      { label: 'BRAND RECOGNITION', value: '+48%' },
      { label: 'PREMIUM PRICING', value: '+22%' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
        caption: 'Brand identity system showcasing logo variations and applications',
        alt: 'Brand identity system'
      },
      {
        url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        caption: 'Packaging design featuring the new botanical-inspired color palette',
        alt: 'Packaging design'
      },
      {
        url: 'https://images.unsplash.com/photo-1561419632-1f5533e17c0e?w=800&h=600&fit=crop',
        caption: 'Social media templates created for consistent brand presence',
        alt: 'Social media templates'
      },
      {
        url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        caption: 'Complete brand guidelines documentation',
        alt: 'Brand guidelines'
      },
    ],
    videoEmbed: {
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Brand Story - Elevate Wellness Co.'
    },
    links: [
      { label: 'BRAND GUIDE', url: '#' },
      { label: 'CASE STUDY', url: '#' },
    ],
    accentColor: 'green',
  },
  {
    id: 'project-2',
    title: 'COASTAL GEAR CO. ECOMMERCE TRANSFORMATION',
    description: 'Complete redesign and rebuild of e-commerce platform with focus on conversion',
    category: 'WEB & UX',
    tags: ['WEB', 'DESIGN', 'E-COMMERCE', 'UX'],
    featured: true,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&h=700&fit=crop',
      alt: 'E-commerce platform redesign for Coastal Gear Co.'
    },
    challenge:
      'Coastal Gear Co., an outdoor and lifestyle brand, was losing 68% of visitors during checkout. Their site was cluttered, slow, and customers couldn\'t find products easily. Mobile conversion was less than 2%, and cart abandonment was costing them over $80K monthly. The navigation confused users, product photography wasn\'t compelling, and there was no clear value proposition above the fold.',
    approach:
      [
        {
          action: 'Conducted extensive user testing and heatmap analysis',
          details: 'Identified friction points in the checkout flow and product discovery by analyzing user behavior and engagement patterns.'
        },
        {
          action: 'Redesigned information architecture',
          details: 'Reorganized product categories with clear filtering and improved navigation to help users find items faster and easier.'
        },
        {
          action: 'Streamlined checkout process',
          details: 'Reduced checkout from 8 steps to 4 with progressive disclosure and clearer CTAs, lowering friction and cart abandonment.'
        },
        {
          action: 'Optimized product pages',
          details: 'Enhanced with lifestyle photography, detailed descriptions, customer reviews, trust badges, and social proof elements.'
        },
        {
          action: 'Built mobile-first experience',
          details: 'Designed thumb-friendly navigation and responsive layouts to improve conversion on mobile devices (62% of traffic).'
        },
        {
          action: 'Created comprehensive design system',
          details: 'Developed cohesive component library with consistent patterns for maintainability and future scaling.'
        }
      ],
    quickFacts: [
      { label: 'CONVERSION RATE', value: '+156%' },
      { label: 'MOBILE CONVERSION', value: '7.8%' },
      { label: 'AVG ORDER VALUE', value: '+$34' },
      { label: 'PAGES REDESIGNED', value: '52' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop',
        caption: 'Homepage redesign with improved value proposition and clear CTA',
        alt: 'Homepage redesign'
      },
      {
        url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop',
        caption: 'Product page optimization with lifestyle photography',
        alt: 'Product page'
      },
      {
        url: 'https://images.unsplash.com/photo-1460925895917-adf4e565b900?w=800&h=600&fit=crop',
        caption: 'Streamlined checkout flow reducing steps from 8 to 4',
        alt: 'Checkout flow'
      },
      {
        url: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&h=600&fit=crop',
        caption: 'Mobile-first responsive design for improved conversion',
        alt: 'Mobile design'
      },
    ],
    videoEmbed: {
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'E-Commerce Redesign Walkthrough - Coastal Gear Co.'
    },
    links: [
      { label: 'LIVE SITE', url: '#' },
      { label: 'DESIGN SYSTEM', url: '#' },
    ],
    accentColor: 'blue',
  },
  {
    id: 'project-3',
    title: 'THE PARKER GROUP BUYER\'S GUIDE REDESIGN',
    description: 'Complete redesign of buyer\'s guide from text-heavy functional document to branded, client-focused marketing asset',
    category: 'DESIGN & MESSAGING',
    tags: ['DESIGN', 'BRANDING', 'CONTENT', 'MARKETING'],
    featured: true,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=700&fit=crop',
      alt: 'The Parker Group Buyer\'s Guide redesign'
    },
    challenge:
      'The Parker Group\'s original buyer guide was functional but lacked personality and visual polish. The layout was text-heavy with dense paragraphs, the branding felt generic, and the document didn\'t reflect the lifestyle-driven, community-focused experience the company wanted to deliver. Agents needed a tool that would educate clients while reinforcing the brand\'s approachable, modern identity. The outdated design undermined the company\'s positioning and failed to build confidence with first-time homebuyers.',
    approach:
      [
        {
          action: 'Reframed the narrative',
          details: 'Shifted from transactional language to warm, client-focused tone centered on "finding your happy place."'
        },
        {
          action: 'Established cohesive visual identity',
          details: 'Developed "Happy Place Handbook" concept with consistent typography, color palette, and branded imagery throughout.'
        },
        {
          action: 'Restructured content for clarity',
          details: 'Reorganized guide into clear step-by-step journey with visual milestones and improved scannability for better comprehension.'
        },
        {
          action: 'Elevated design standards',
          details: 'Collaborated with graphic designer to create polished, multi-page handbook with professional layouts and photography.'
        },
        {
          action: 'Integrated brand voice',
          details: 'Wrote all copy to reflect The Parker Group\'s personality—helpful, confident, and community-centered throughout.'
        }
      ],
    quickFacts: [
      { label: 'PAGES REDESIGNED', value: '28' },
      { label: 'TIMELINE', value: '3 months' },
      { label: 'AGENTS USING', value: '100%' },
      { label: 'CLIENT ENGAGEMENT', value: '+67%' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        caption: 'Cover design featuring the "Happy Place Handbook" branding',
        alt: 'Handbook cover design'
      },
      {
        url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        caption: 'Interior page layout with numbered steps and visual hierarchy',
        alt: 'Interior pages'
      },
      {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        caption: 'Before and after comparison showing transformation from dense text to visual design',
        alt: 'Before and after'
      },
      {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
        caption: 'Finished handbook in use with agents during client consultations',
        alt: 'Handbook in use'
      },
    ],
    links: [
      { label: 'CASE STUDY', url: '#' },
      { label: 'VIEW HANDBOOK', url: '#' },
    ],
    accentColor: 'blue',
  },
  {
    id: 'project-4',
    title: 'FINTECH STARTUP THOUGHT LEADERSHIP SERIES',
    description: 'Video production and content strategy for B2B market positioning',
    category: 'VIDEO & CONTENT',
    tags: ['VIDEO', 'CONTENT', 'STORYTELLING', 'B2B'],
    featured: false,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1200&h=700&fit=crop',
      alt: 'Video production for fintech startup'
    },
    challenge:
      'A Series A fintech startup needed to establish credibility in a crowded market and generate qualified B2B leads. Their founders had deep expertise but weren\'t being recognized as thought leaders. Sales materials were dry and technical. They needed to educate prospects about their unique approach while building founder visibility and brand authority.',
    approach:
      [
        {
          action: 'Scripted and produced thought leadership series',
          details: '10-video series featuring founders explaining industry challenges, solutions, and unique approach to market positioning.'
        },
        {
          action: 'Created product feature explainers',
          details: 'Developed animated and live-action videos breaking down complex features into digestible, benefit-focused messages.'
        },
        {
          action: 'Produced customer testimonial videos',
          details: 'Shot case study and testimonial videos featuring successful client implementations to build trust and credibility.'
        },
        {
          action: 'Developed short-form content',
          details: 'Created LinkedIn clips, conference highlights, and social-optimized snippets for multi-platform distribution.'
        },
        {
          action: 'Built content repurposing strategy',
          details: 'Converted videos into blog posts, infographics, social clips, and sales enablement materials for maximum ROI.'
        },
        {
          action: 'Optimized for sales funnel',
          details: 'Strategically placed videos across awareness, consideration, and decision stages to guide prospects through journey.'
        }
      ],
    quickFacts: [
      { label: 'VIDEOS PRODUCED', value: '14 total' },
      { label: 'TOTAL WATCH TIME', value: '8.2K hours' },
      { label: 'AVG COMPLETION', value: '82%' },
      { label: 'LEAD GENERATION', value: '+118 MQLs' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=600&fit=crop',
        caption: 'Thought leadership interview series with founders',
        alt: 'Interview series'
      },
      {
        url: 'https://images.unsplash.com/photo-1516321318423-f06f70e504b3?w=800&h=600&fit=crop',
        caption: 'Product feature explainer animation frames',
        alt: 'Explainer video'
      },
      {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        caption: 'Customer testimonial video production',
        alt: 'Testimonial video'
      },
      {
        url: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&h=600&fit=crop',
        caption: 'Short-form video content for social platforms',
        alt: 'Social video'
      },
    ],
    videoEmbed: {
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Thought Leadership Video Series - FinTech Startup'
    },
    links: [
      { label: 'WATCH SERIES', url: '#' },
      { label: 'PERFORMANCE REPORT', url: '#' },
    ],
    accentColor: 'blue',
  },
  {
    id: 'project-5',
    title: 'SUSTAINABLE FASHION BRAND LAUNCH',
    description: 'Full brand strategy and go-to-market launch for eco-conscious apparel brand',
    category: 'BRANDING & STRATEGY',
    tags: ['BRAND', 'STRATEGY', 'LAUNCH', 'POSITIONING'],
    featured: true,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=700&fit=crop',
      alt: 'Sustainable fashion brand launch'
    },
    challenge:
      'A new sustainable fashion startup needed to cut through the noise of greenwashing and establish genuine credibility in the eco-conscious apparel market. They had great product but no brand story, no visual identity, and no go-to-market strategy. They needed to differentiate from both fast fashion and premium sustainable competitors.',
    approach:
      [
        {
          action: 'Conducted competitive and customer research',
          details: 'Analyzed market landscape to identify white space and conducted interviews to understand sustainable fashion buyer motivations.'
        },
        {
          action: 'Developed authentic brand narrative',
          details: 'Created compelling story around sustainable practices, fair labor, and environmental responsibility that resonated with values-driven consumers.'
        },
        {
          action: 'Created distinctive visual identity',
          details: 'Designed earth-tone palette and modern typography that reflected sustainability without feeling preachy or cliché.'
        },
        {
          action: 'Built education-focused messaging',
          details: 'Developed framework that educated consumers about sustainable practices while emphasizing quality, style, and lifestyle fit.'
        },
        {
          action: 'Designed pre-launch strategy',
          details: 'Built waitlist campaign, influencer partnerships, and PR plan to generate buzz and credibility before official launch.'
        },
        {
          action: 'Created launch sequence',
          details: 'Orchestrated multi-touch launch with storytelling focus, product reveals, and community-building events to maximize momentum.'
        }
      ],
    quickFacts: [
      { label: 'PRE-LAUNCH WAITLIST', value: '8,200+' },
      { label: 'LAUNCH WEEK SALES', value: '$156K' },
      { label: 'REPEAT CUSTOMER RATE', value: '34%' },
      { label: 'PRESS MENTIONS', value: '23' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        caption: 'Sustainable fashion collection photography',
        alt: 'Collection photography'
      },
      {
        url: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=800&h=600&fit=crop',
        caption: 'Brand visual identity and packaging design',
        alt: 'Packaging design'
      },
      {
        url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop',
        caption: 'Product launch event and influencer collaboration',
        alt: 'Launch event'
      },
      {
        url: 'https://images.unsplash.com/photo-1595521624549-30340549da90?w=800&h=600&fit=crop',
        caption: 'Sustainability story content and educational materials',
        alt: 'Sustainability content'
      },
    ],
    videoEmbed: {
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Brand Story - Sustainable Fashion Launch'
    },
    links: [
      { label: 'BRAND GUIDE', url: '#' },
      { label: 'LAUNCH STRATEGY', url: '#' },
    ],
    accentColor: 'green',
  },
  {
    id: 'project-6',
    title: 'ENTERPRISE SOFTWARE REDESIGN',
    description: 'UX overhaul and design system for complex B2B SaaS platform',
    category: 'DESIGN SYSTEMS',
    tags: ['UX', 'DESIGN SYSTEM', 'ENTERPRISE', 'B2B'],
    featured: false,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1553531889-e6cf959d5a0b?w=1200&h=700&fit=crop',
      alt: 'Enterprise software redesign'
    },
    challenge:
      'A mature enterprise software platform had accumulated 10+ years of feature bloat and inconsistent UI patterns. New users had a steep learning curve, and support costs were climbing. The interface looked dated compared to modern SaaS competitors. They needed to modernize without disrupting existing power users, while making onboarding faster and reducing support tickets.',
    approach:
      [
        {
          action: 'Conducted extensive user interviews',
          details: 'Met with both power users and new users to understand pain points, workflows, and unmet needs in the current interface.'
        },
        {
          action: 'Mapped information architecture',
          details: 'Reorganized features to clarify core vs. advanced functionality, reducing cognitive load for new users.'
        },
        {
          action: 'Designed comprehensive design system',
          details: 'Created 120+ component library with clear patterns, guidelines, and documentation for consistency and developer productivity.'
        },
        {
          action: 'Implemented progressive disclosure',
          details: 'Surfaced essential features prominently while hiding advanced options, improving onboarding and reducing support tickets.'
        },
        {
          action: 'Created interactive onboarding flows',
          details: 'Designed guided tutorials and contextual help to reduce time to productivity for new users from days to hours.'
        },
        {
          action: 'Rolled out in phases',
          details: 'Implemented changes incrementally to maintain stability and allow power users to adapt at their own pace.'
        }
      ],
    quickFacts: [
      { label: 'ONBOARDING TIME', value: '-43%' },
      { label: 'SUPPORT TICKETS', value: '-38%' },
      { label: 'NPS IMPROVEMENT', value: '+18 points' },
      { label: 'COMPONENTS CREATED', value: '120+' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1553531889-e6cf959d5a0b?w=800&h=600&fit=crop',
        caption: 'New modern dashboard design with improved information hierarchy',
        alt: 'Dashboard design'
      },
      {
        url: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=600&fit=crop',
        caption: 'Design system component library showcasing 120+ elements',
        alt: 'Design system'
      },
      {
        url: 'https://images.unsplash.com/photo-1611432473558-e3b7cc1c5fb3?w=800&h=600&fit=crop',
        caption: 'Interactive onboarding flow for new users',
        alt: 'Onboarding flow'
      },
      {
        url: 'https://images.unsplash.com/photo-1575921920157-7e9c8b31d1e2?w=800&h=600&fit=crop',
        caption: 'Mobile-responsive interface for on-the-go access',
        alt: 'Mobile interface'
      },
    ],
    videoEmbed: {
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Enterprise Software Redesign Overview'
    },
    links: [
      { label: 'DESIGN SYSTEM', url: '#' },
      { label: 'CASE STUDY', url: '#' },
    ],
    accentColor: 'orange',
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
