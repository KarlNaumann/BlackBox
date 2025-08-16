# Blackbox Hugo Theme

A modern, minimalist Hugo theme designed for personal websites, portfolios, and blogs. Features a clean, dark design with excellent typography and responsive layout.

## Features

- 🎨 **Dark Theme**: Elegant dark color scheme with accent colors
- 📱 **Responsive Design**: Mobile-first responsive layout
- ✨ **Modern Typography**: Clean, readable fonts with proper spacing
- 📝 **Blog Support**: Full blog functionality with pagination
- 👤 **Portfolio Sections**: Dedicated layouts for projects, publications, and about pages
- 🌐 **Multi-language Ready**: Built-in internationalization support
- ⚡ **Fast Performance**: Optimized CSS and minimal JavaScript

## Installation

### Option 1: Git Clone
```bash
cd themes
git clone https://github.com/karlnaumann/blackbox.git
```

### Option 2: Git Submodule
```bash
git submodule add https://github.com/karlnaumann/blackbox.git themes/blackbox
```

### Option 3: Download
Download the latest release from [GitHub releases](https://github.com/karlnaumann/blackbox/releases) and extract to your `themes` folder.

## Configuration

### Basic Setup
Add the theme to your `hugo.toml`:

```toml
theme = ["blackbox"]
```

### Theme Parameters
The theme supports various configuration options. See `exampleSite/hugo.toml` for a complete example:

```toml
[params]
contentTypeName = "posts"
showMenuItems = 5
showLanguageSelector = false
fullWidthTheme = false
centerTheme = true
autoCover = true
showLastUpdated = false
updatedDatePrefix = "Updated"

[languages.en.params]
subtitle = "Your site subtitle"
owner = "Your Name"
copyright = "2025 Your Name"
menuMore = "Show more"
readMore = "Read more"
readOtherPosts = "Read other posts"
newerPosts = "Newer posts"
olderPosts = "Older posts"
```

### Menu Configuration
```toml
[languages.en.menu]
  [[languages.en.menu.main]]
    identifier = "about"
    name = "/ about"
    url = "/about"
    weight = 1
  [[languages.en.menu.main]]
    identifier = "projects"
    name = "/ projects"
    url = "/projects"
    weight = 2
  [[languages.en.menu.main]]
    identifier = "publications"
    name = "/ publications"
    url = "/publications"
    weight = 3
  [[languages.en.menu.main]]
    identifier = "posts"
    name = "/ posts"
    url = "/posts"
    weight = 4
  [[languages.en.menu.main]]
    identifier = "contact"
    name = "/ contact"
    url = "/contact"
    weight = 5
```

## Content Structure

### Posts
Create posts in `content/posts/`:

```markdown
---
title: "Your Post Title"
date: 2025-01-01
description: "Post description"
tags: ["tag1", "tag2"]
cover: "cover-image.jpg"
---

Your post content here...
```

### Projects
Create projects in `content/projects/`:

```markdown
---
title: "Project Name"
date: 2025-01-01
description: "Project description"
status: "Completed"
role: "Developer"
---

Project details...
```

### Publications
Create publications in `content/publications/`:

```markdown
---
title: "Publication Title"
date: 2025-01-01
authors: ["Author 1", "Author 2"]
publication_types: ["article-journal"]
publication: "Journal Name"
---

Publication abstract...
```

## Customization

### CSS Variables
The theme uses CSS custom properties for easy customization. Override these in your own CSS:

```css
:root {
  --background: #111111;
  --foreground: #ffffff;
  --accent: #CC66FF;
  --font-size: 1rem;
  --line-height: 1.54em;
}
```

### Layouts
The theme provides several layout options:
- `layouts/_default/` - Default layouts
- `layouts/about/` - About page layouts
- `layouts/projects/` - Project page layouts
- `layouts/publications/` - Publication page layouts
- `layouts/posts/` - Blog post layouts
- `layouts/contact/` - Contact page layouts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Requirements

- Hugo Extended version 0.80.0 or higher
- Modern web browser with CSS Grid and Flexbox support

## License

This theme is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Credits

- **Original Theme**: Based on [Terminal](https://github.com/panr/hugo-theme-terminal) by [panr](https://github.com/panr)
- **Design & Development**: [Karl Naumann-Woleske](https://karlnaumann.com)

## Support

If you have questions or need help:
1. Search [existing issues](https://github.com/karlnaumann/blackbox/issues)
2. Create a [new issue](https://github.com/karlnaumann/blackbox/issues/new)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history. 