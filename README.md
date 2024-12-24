# LingoKen
<img src="/public/lingoken5.png" alt="LingoKen Logo" width="100%" height="350" style="display: block; margin: 16px auto; text-align: center; border-radius: 8px "/>  


**LingoKen** is a Kenyan web and mobile-based platform for exploring, enjoying, and learning the diverse languages across Kenya's 42+ dialects. Built with [VitePress](https://vitepress.vuejs.org/) for fast development and beautiful documentation.

## Key Languages

- Borana
- Luhya
- Meru
- Swahili
- Kamba
- Kalenjin
- Turkana
- Orma
- Dholuo
- Kikuyu
- Others coming soon

Each language has its dedicated page, with sub-pages covering key aspects like vocabulary, grammar, and cultural insights.

### General Structure

```txt

project-root/
│
├── .vitepress/
│   ├── config.ts                 # VitePress configuration file
│   └── languages.ts              # TypeScript file with language data
│
├── components/
│   ├── GrammarSection.vue        # Vue component for Grammar
│   ├── PhrasesSection.vue        # Vue component for Phrases
│   ├── AudioSection.vue          # Vue component for Audio
│   └── CulturalInsightsSection.vue # Vue component for Cultural Insights
│
└── languages/
    ├── [language].md             # Dynamic language Markdown files
    └── (e.g., kikuyu.md, swahili.md)
```


## Features

- **Language-Specific Pages:** Navigate to dedicated pages for each language and explore dialect-specific sub-sections.
- **Cultural Insights:** Learn not only the language but the cultural context, proverbs, and idioms unique to each dialect.
- **User-Friendly** Built with VitePress for a clean, responsive, and fast-loading experience.

## Installation

To run the project locally, ensure [Node.js](https://nodejs.org/) is installed, then run:

```bash
# Clone the repository
git clone https://github.com/your-username/lingoken.git
cd lingoken

# Install dependencies
npm install

# Start the development server
Original VitePress Script
npm run docs:dev

Changed for Vercel Deployment
npm run dev

