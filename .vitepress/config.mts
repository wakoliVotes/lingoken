import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    // Define the base path for Vercel deployment
  title: "LingoKen",
  description: "Discover, enjoy, and learn Kenya's diverse languages with our web and mobile platform, covering over 42 dialects for language enthusiasts and learners.",
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon/favicon.ico', type: 'image/x-icon' }],
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
    logo: '/assets/favlogo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about'},
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Languages', items : [
        { text: 'Borana', link: '/borana/' },
        { text: 'Luhya', link: '/luhya/' },
        { text: 'Meru', link: '/meru/' },
        { text: 'Swahili', link: '/swahili/' },
        { text: 'Kamba', link: '/kamba/' },
        { text: 'Kalenjin', link: '/kalenjin/' },
        { text: 'Turkana', link: '/turkana/' },
        { text: 'Orma', link: '/orma/' },
        { text: 'Dholuo', link: '/dholuo/' },
        { text: 'Kikuyu', link: '/kikuyu/' }

      ]}
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown ExamplesQQQQ', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
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
      text: 'Fork & Edit Page on GitHub'
    },
    notFound: {
      // Custom 404 Page Configuration
      title: 'COMING SOON - WORKING TO BRING THIS PAGE TO LIFE!',
    }
  },
})
