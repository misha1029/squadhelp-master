const env = process.env.NODE_ENV || 'development';
const serverIP = 'localhost';
const serverPort = env === 'production' ? 3000 : 9632;
export default {
  CUSTOMER: 'customer',
  CREATOR: 'creator',
  CONTEST_STATUS_ACTIVE: 'active',
  CONTEST_STATUS_FINISHED: 'finished',
  CONTEST_STATUS_PENDING: 'pending',
  NAME_CONTEST: 'name',
  LOGO_CONTEST: 'logo',
  TAGLINE_CONTEST: 'tagline',
  OFFER_STATUS_REJECTED: 'rejected',
  OFFER_STATUS_WON: 'won',
  OFFER_STATUS_PENDING: 'pending',
  STATIC_IMAGES_PATH: '/staticImages/',
  ANONYM_IMAGE_PATH: '/staticImages/anonym.png',
  BASE_URL: `http://${ serverIP }:${ serverPort }/`,
  ACCESS_TOKEN: 'accessToken',
  publicURL: env === 'production'
    ? `http://${ serverIP }:80/images/`
    : `http://${ serverIP }:${ serverPort }/public/images/`,
  NORMAL_PREVIEW_CHAT_MODE: 'NORMAL_PREVIEW_CHAT_MODE',
  FAVORITE_PREVIEW_CHAT_MODE: 'FAVORITE_PREVIEW_CHAT_MODE',
  BLOCKED_PREVIEW_CHAT_MODE: 'BLOCKED_PREVIEW_CHAT_MODE',
  CATALOG_PREVIEW_CHAT_MODE: 'CATALOG_PREVIEW_CHAT_MODE',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS',
  ADD_CHAT_TO_OLD_CATALOG: 'ADD_CHAT_TO_OLD_CATALOG',
  CREATE_NEW_CATALOG_AND_ADD_CHAT: 'CREATE_NEW_CATALOG_AND_ADD_CHAT',
  USER_INFO_MODE: 'USER_INFO_MODE',
  CASHOUT_MODE: 'CASHOUT_MODE',
  HEADER_ANIMATION_TEXT: [
    'a Company',
    'a Brand',
    'a Website',
    'a Service',
    'a Book',
    'a Business',
    'an App',
    'a Product',
    'a Startup',
  ],
  FooterItems: [
    {
      title: 'SQUADHELP',
      items: [
        'About',
        'Contact',
        'How It Works?',
        'Testimonials',
        'Our Work',
      ],
    },
    {
      title: 'RESOURCES',
      items: [
        'How It Works',
        'Become a Creative',
        'Business Name Generator',
        'Discussion Forum',
        'Blog',
        'Download eBook',
        'Pricing',
        'Help & FAQs',
      ],
    },
    {
      title: 'OUR SERVICES',
      items: [
        'Naming',
        'Logo Design',
        'Taglines',
        'Premium Names For Sale',
        'Creative Owned Names For Sale',
        'Audience Testing',
        'Trademark Research & Filling',
        'Managed Agency Service',
      ],
    },
    {
      title: 'LEGAL',
      items: [
        'Terms of Service',
        'Privacy Policy',
        'Cookie Policy',
      ],
    },
  ],
  FooterItemsTop: [
    {
      titletop: 'SQUADHELP',
      itemstop: [
        'About',
        'Contact',
        'How It Works?',
        'Testimonials',
        'Our Work',
      ],
    },
    {
      titletop: 'RESOURCES',
      itemstop: [
        'How It Works',
        'Become a Creative',
        'Business Name Generator',
        'Discussion Forum',
        'Blog',
        'Download eBook',
        'Pricing',
        'Help & FAQs',
      ],
    },
    {
      titletop: 'OUR SERVICES',
      itemstop: [
        'Naming',
        'Logo Design',
        'Taglines',
        'Premium Names For Sale',
        'Creative Owned Names For Sale',
        'Audience Testing',
        'Trademark Research & Filling',
        'Managed Agency Service',
      ],
    },
    {
      titletop: 'LEGAL',
      itemstop: [
        'Terms of Service',
        'Privacy Policy',
        'Cookie Policy',
      ],
    },
  ],
  FooterItemsBottom: [
    {

      itemsBottom: [
        'Agency & Consulting',
        'Analytics',
        'Automotive',
        'Bar & Cosmetics',
        'Beauty & Cosmetics',
        'Beer ',
        'Beauty & Cosmetics',
        'Beer, Wine & Spirits',
        'Bikes Brand',
        'Biotech',
        'Bots & AI',
        'Cannabis & CBD',
        'Catering',
      ],
    },
    {

      itemsBottom: [
        'Cleaning',
        'Co-Working Space Names',
        'Coffee',
        'Construction & Architecture',
        'Crowdfunding',
        'Cryptocurrency, Blockchain',
        'Dating & Relationship',
        'Daycare',
        'Dental',
        'Drone',
        'E-Commerce & Retail',
      ],
    },
    {

      itemsBottom: [
        'Education & Training',
        'Entertainment & Arts',
        'Event Planning & Services',
        'Events & Conferences',
        'Fashion & Clothing',
        'Finance',
        'Fintech (Finance Technology)',
        'Fitness & Gym',
        'Food & Drink',
        'Food Delivery & Meal Kits',
        'Food Truck',
      ],
    },
    {
      itemsBottom: [
        'Footwear',
        'Furniture & Home Furnishings',
        'Games & Recreational',
        'Gaming',
        'Green & Organic',
        'Health & Wellness',
        'Home',
        'Home & Garden',
        'Insurance',
        'Interior Design',
        'Internet of Things (IOT)',
        'Jewelry',
        'Kids & Baby',
        'Landscaping',
        'Legal, Attorney, Law',
        'Manufacturing',
        'Marketing & Advertising',
        'Medical & Dental',
        'Mobile App',
        'Mortgage',
        'Movies & TV',
        'Music & Audio',
        'News & Media',
        'Non-Profit & Community',
        'Oil and Gas',
        'Outdoor & Adventure',
        'Payment',
        'Payroll',
        'Pets',
        'Pharma',
        'Photography',
        'Podcast',
        'Politics/Government',
        'Professional Services',
        'Real Estate',
      ],
    },
  ],
};