import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Rings',
      links: [
        {
          text: 'Latest Rings',
          href: getPermalink('/homes/personal'),
        },
        {
          text: 'Gold Rings',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Silver Rings',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Diamond Rings',
          href: getPermalink('/homes/mobile-app'),
        },
      ],
    },
    {
      text: 'Necklaces',
      links: [
        {
          text: 'Latest Necklaces',
          href: getPermalink('/homes/personal'),
        },
        {
          text: 'Gold Necklaces',
          href: getPermalink('/homes/saas'),
        },
      ],
    },
    {
      text: 'Repairs',
      links: [
        {
          text: 'Ring Repair',
          href: getPermalink('/#features'),
        },
        {
          text: 'Necklace Repair',
          href: getPermalink('/#features'),
        },
        {
          text: 'Jewelry Cleaning',
          href: getPermalink('/services'),
        },
        {
          text: 'Resizing',
          href: getPermalink('/about'),
        },
      ],
    },
    {
      text: 'Blog',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact Us', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Help', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
