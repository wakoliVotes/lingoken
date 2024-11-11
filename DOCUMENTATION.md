# LingoKen Documentation

Welcome to the LingoKen documentation. This guide covers setup, development, and usage for building, exploring, and expanding the language resources across Kenya's diverse dialects. Follow these instructions to get started and understand how to manage content across various language pages.

## Overview

LingoKen is a Kenyan language platform designed to provide resources for learning and enjoying the cultural richness of Kenya's 42+ languages. The primary languages available include **Borana**, **Luhya**, **Meru**, **Swahili**, **Kamba**, **Kalenjin**, **Turkana**, **Orma**, **Dholuo**, and **Kikuyu**. Each language has a dedicated page with sub-pages for more in-depth exploration of specific topics, like grammar, vocabulary, and pronunciation.

---

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Structure and Organization](#structure-and-organization)
- [Language Pages](#language-pages)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## Installation

To set up LingoKen locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/LingoKen.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd LingoKen
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

## Development

LingoKen uses **VitePress** as a static site generator to power the documentation.

### Start the Development Server

To preview changes locally:
```bash
npm run docs:dev
```

### Build the Site

To generate static files for deployment:
```bash
npm run build
```

### Preview the Build

To preview the site as it will appear after deployment:
```bash
npm run serve
```

---

## Structure and Organization

The content is organized into primary language directories. Each language will have its main page and corresponding sub-pages covering various aspects of learning the language.

### Directory Structure

Below is a sample folder structure to guide organization:

```plaintext
src/
├── .vitepress/
├── index.md          # Landing page for LingoKen
├── borana/
│   ├── index.md      # Main page for Borana language
│   ├── grammar.md
│   ├── vocabulary.md
│   └── pronunciation.md
├── luhya/
│   ├── index.md
│   ├── grammar.md
│   ├── vocabulary.md
│   └── pronunciation.md
└── ...
```

Each primary language page (`index.md`) serves as an introduction to the language, and the sub-pages (`grammar.md`, `vocabulary.md`, `pronunciation.md`) offer specific lessons and resources.

---

## Language Pages

### Creating a New Language Page

To add a new language:

1. Create a new directory in `src/` named after the language.
2. Within this directory, add an `index.md` file for the main page and additional markdown files (e.g., `grammar.md`, `vocabulary.md`) for sub-topics.

#### Example: Borana Language

**src/borana/index.md**
```markdown
# Borana Language

Welcome to the Borana language page. Explore the basics of grammar, vocabulary, pronunciation, and cultural insights.
```

**src/borana/grammar.md**
```markdown
# Borana Grammar

This section covers the fundamental grammar rules of the Borana language.
```

---

## Deployment

To deploy LingoKen:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the generated files in `docs/.vitepress/dist` to your hosting provider.

---

## Contributing

We welcome contributions to expand LingoKen! Whether it’s adding new languages or improving the content, your help is appreciated.

### Steps to Contribute

1. **Fork the repository** and create a new branch.
2. **Make your changes**, following the file structure guidelines above.
3. **Submit a pull request** with a description of your updates.