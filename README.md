# andripurnomo.com

Personal portfolio and blog website showcasing my work as a Frontend Engineer. This site features a modern, brutalist design aesthetic with a focus on performance and developer experience.

## 📋 Project Overview

This is a personal portfolio website built with modern web technologies, featuring:

- **Portfolio Showcase** - Highlighting selected projects and work
- **Technical Blog** - Articles about frontend development, performance optimization, and modern web technologies
- **MDX Content** - Rich content authoring with MDX support
- **Syntax Highlighting** - Code blocks with Shiki for beautiful syntax highlighting
- **SEO Optimized** - Structured data, meta tags, and sitemap generation
- **Responsive Design** - Mobile-first, brutalist design system

## 🛠️ Tech Stack

### Core Framework

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** - Beautiful typographic defaults
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Utility for merging Tailwind classes
- **[classnames](https://github.com/JedWatson/classnames)** - Conditional class name utility

### Content & Markdown

- **[next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)** - MDX rendering for Next.js
- **[Shiki](https://shiki.style/)** - Syntax highlighter with beautiful themes
- **[@shikijs/rehype](https://shiki.style/)** - Rehype plugin for Shiki
- **[remark-gfm](https://github.com/remarkjs/remark-gfm)** - GitHub Flavored Markdown support
- **[rehype-slug](https://github.com/rehypejs/rehype-slug)** - Add IDs to headings
- **[rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings)** - Add links to headings
- **[vfile](https://github.com/vfile/vfile)** & **[vfile-matter](https://github.com/vfile/vfile-matter)** - Virtual file format and frontmatter parsing

### UI Components & Utilities

- **[react-icons](https://react-icons.github.io/react-icons/)** - Icon library
- **[react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed)** - Twitter embed components
- **[nuqs](https://nuqs.47ng.com/)** - Type-safe URL search params state management

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)** - Auto-sort imports
- **[PostCSS](https://postcss.org/)** - CSS transformations
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixing

## 🚀 Development

### Prerequisites

- **Node.js** 20 or later
- **pnpm** (recommended package manager)

### Installation

```bash
# Install dependencies
pnpm install
```

### Available Scripts

```bash
# Start development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

### Project Structure

```
andripurnomo.com/
├── app/                    # Next.js App Router
│   ├── (site)/            # Main site pages
│   │   ├── page.tsx       # Homepage
│   │   ├── blog/          # Blog pages
│   │   └── about/         # About page
│   ├── api/               # API routes
│   ├── lib/               # Utilities and helpers
│   └── ui/                # UI components
├── content/               # MDX content files
│   └── blogs/             # Blog posts
├── public/                # Static assets
├── styles/                # Global styles
└── prototypes/            # Design prototypes
```

## 📝 License

This project is personal portfolio code. Feel free to reference for learning purposes.
