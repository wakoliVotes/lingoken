import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    // Define the base path for Vercel deployment
  title: "LingoKen",
  description: "Discover, enjoy, and learn Kenya's diverse languages with our web and mobile platform, covering over 42 dialects for language enthusiasts and learners.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
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
      copyright: 'Copyright © 2024 LingoKen | All rights reserved.'
    },
  },
})
