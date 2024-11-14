import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    // Define the base path for Vercel deployment
  title: "LingoKen",
  description: "Discover, enjoy, and learn Kenya's diverse languages with our web and mobile platform, covering over 42 dialects for language enthusiasts and learners.",
  head: [
    ['link', { rel: 'icon', href: '.vitepress/favicon.ico', type: 'image/x-icon' }],
    [
      'script',
      {
        async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-GCPSMKWM3V' },
    ],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-GCPSMKWM3V');
      `,
    ],
  ],
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '.vitepress/favlogo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about'},
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Languages', items : [
        { text: 'Borana', link: '/docs/borana/' },
        { text: 'Luhya', link: '/docs/luhya/' },
        { text: 'Meru', link: '/docs/meru/' },
        { text: 'Swahili', link: '/docs/swahili/' },
        { text: 'Kamba', link: '/docs/kamba/' },
        { text: 'Kalenjin', link: '/docs/kalenjin/' },
        { text: 'Turkana', link: '/docs/turkana/' },
        { text: 'Orma', link: '/docs/orma/' },
        { text: 'Dholuo', link: '/docs/dholuo/' },
        { text: 'Kikuyu', link: '/docs/kikuyu/' }

      ]}
    ],

    sidebar: [
      {
        text: 'Languages',
        items: [
          { text: 'Kikuyu', link: '/docs/kikuyu' },
          { text: 'Borana', link: '/docs/borana' },
          { text: 'Meru', link: '/docs/meru' }
        ]
      },
      
    ],
    search: {
      provider: 'local'

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wakoliVotes/lingoken' },
      { icon: 'twitter', link: '' },
      { icon: 'youtube', link: '' },
      { icon: 'medium', link: '' },
      { icon: 'instagram', link: ''},
      { icon: 'tiktok', link: ''}

    ],
    footer: {
      message: 'Developed by <a href="https://anchormiles.vercel.app" target="_blank" rel="noopener noreferrer" >AnchorMiles</a>',      
      copyright: 'Copyright © 2024 LingoKen | All rights reserved. | Powered by VitePress & Vercel'
    },
    editLink: {
      pattern: 'wakoliVotes/lingoken',
      text: 'Fork & Edit Page on GitHub'
    },
    notFound: {
      // Custom 404 Page Configuration
      title: 'COMING SOON - WORKING TO BRING THIS PAGE TO LIFE!',
    },
  },
})
