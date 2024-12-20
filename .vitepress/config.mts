import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    // Define the base path for Vercel deployment
  title: "LingoKen",
  description: "Discover, enjoy, and learn Kenya's diverse languages with our web and mobile platform, covering over 42 dialects for language enthusiasts and learners.",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    // Google tag (gtag.js)
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
    logo: '/lingoround1.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about'},
      { text: 'Languages', items : [
        { text: 'Borana', link: '/docs/borana/' },
        { text: 'Luhya', link: '/docs/luhya/' },
        { text: 'Meru', link: '/docs/meru/' },
        { text: 'Swahili', link: '/docs/swahili/' },
        { text: 'Kamba', link: '/docs/kamba/' },
        { text: 'Kalenjin', link: '/docs/kalenjin/' },
        { text: 'Turkana', link: '/docs/turkana/' },
        { text: 'Orma', link: '/docs/orma/' },
        { text: 'Luo', link: '/docs/luo/' },
        { text: 'Kikuyu', link: '/docs/kikuyu/' }

      ]},
      { text: 'About', items: [
        { text: 'About Us', link: '/about' },
        { text: 'Enrol to Learn', link: '/courses' },
        { text: 'Our Team', link: '/team' },
        { text: 'Blog', link: '/blog' },
        { text: 'Contact', link: '/contact' },
      ] }
    ],
    sidebar: [
      {
        text: 'Languages',
        items: [
          {
            text: 'Kikuyu',
            collapsed: false,
            items: [
              { text: 'About | History', link: '/docs/kikuyu/about' },
              { text: 'Grammar', link: '/docs/kikuyu/grammar' },
              { text: 'Vocabulary', link: '/docs/kikuyu/vocabulary' },
              { text: 'Culture Insights', link: '/docs/kikuyu/culture-insights' }
            ]
          },
          {
            text: 'Luhya',
            collapsed: false,
            items: [
              { text: 'Grammar', link: '/docs/luhya/grammar' },
              { text: 'Vocabulary', link: '/docs/luhya/vocabulary' },
              { text: 'Culture Insights', link: '/docs/luhya/culture-insights' }
            ]
          },
          {
            text: 'Borana',
            collapsed: false,
            items: [
              { text: 'Grammar', link: '/docs/borana/grammar' },
              { text: 'Vocabulary', link: '/docs/borana/vocabulary' },
              { text: 'Culture Insights', link: '/docs/borana/culture-insights' }
            ]
          },
          {
            text: 'Meru',
            collapsed: false,
            items: [
              { text: 'Grammar', link: '/docs/meru/grammar' },
              { text: 'Vocabulary', link: '/docs/meru/vocabulary' },
              { text: 'Culture Insights', link: '/docs/meru/culture-insights' }
            ]
          },
          {
            text: 'Enrol to Learn', link: '/courses'

          },
        ]
      }
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
      text: 'Fork & Edit on GitHub'
    },
    notFound: {
      // Custom 404 Page Configuration
      title: 'COMING SOON - WORKING TO BRING THIS PAGE TO LIFE!',
    },
  },
})