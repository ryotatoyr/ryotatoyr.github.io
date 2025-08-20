# Portfolio Website - GitHub Copilot Instructions

This is Ryotaro Ota's personal portfolio website, a static HTML/CSS/JavaScript site hosted on GitHub Pages. The site showcases personal projects, skills, and contact information with interactive modal elements.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the information provided here.**

## Working Effectively

### Quick Start & Local Development
- Start local development server (takes <1 second):
  ```bash
  cd /home/runner/work/ryotatoyr.github.io/ryotatoyr.github.io
  python3 -m http.server 8000
  ```
- **IMMEDIATE VALIDATION**: Server starts instantly. Access at `http://localhost:8000`
- **Browser Testing**: Website loads immediately (<1 second) with full functionality

### Testing the Website
- **ALWAYS manually test after making changes** - this is critical since there are no automated tests
- **Complete User Scenario Validation**:
  1. Load `http://localhost:8000` - should display portfolio homepage
  2. Test navigation links (自己紹介, スキル, 開発経験, 連絡先) - should scroll to sections
  3. Click "詳細を見る" buttons - should open project modals with detailed information
  4. Test modal close functionality (× button) - should close modal and return to main page
  5. Test contact links (email, GitHub, LinkedIn) - should open appropriate applications/sites
  6. Test responsive design - resize browser window to verify mobile layout

### No Build Process Required
- **This is a static website** - no compilation, bundling, or build steps needed
- **Direct file editing** - make changes directly to `index.html` and refresh browser
- **Instant feedback** - changes appear immediately after browser refresh
- **No dependencies to install** - all external resources loaded via CDN

## Repository Structure

### Key Files and Directories
```
/home/runner/work/ryotatoyr.github.io/ryotatoyr.github.io/
├── index.html          # Main portfolio page (ALL content in this file)
├── README.md           # Basic repository description
├── media/              # Images and GIFs for portfolio content
│   ├── 6-4.gif
│   ├── 6-5_N5.gif
│   ├── 6-5_N8.gif
│   ├── one_point_correlation_map.png
│   └── zonal_wind_at_equator.png
└── .github/
    └── copilot-instructions.md  # This file
```

### Important File Details
- **`index.html`**: Contains ALL website code - HTML structure, embedded CSS styles, and JavaScript functionality
- **External Dependencies**: TailwindCSS (via CDN), Google Fonts (via CDN), all loaded from `<head>` section
- **JavaScript Features**: Modal system for project details, smooth scrolling navigation
- **Content Sections**: Hero, About (自己紹介), Skills (スキル), Projects (開発経験), Contact (連絡先)

## Technology Stack

### Frontend Technologies
- **HTML5**: Semantic markup with Japanese content
- **CSS3**: Embedded styles with TailwindCSS utility classes
- **Vanilla JavaScript**: Modal interactions, no frameworks or libraries
- **TailwindCSS**: Via CDN for responsive design and styling
- **Google Fonts**: Inter and Noto Sans JP for typography

### External Dependencies (CDN)
- TailwindCSS: `https://cdn.tailwindcss.com`
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700`

### Hosting & Deployment
- **GitHub Pages**: Automatic deployment from main branch
- **Domain**: `ryotatoyr.github.io` (GitHub Pages user site)
- **Deployment**: Push to main branch automatically deploys to production

## Common Development Tasks

### Making Content Changes
1. **Edit `index.html` directly** - all content is in this single file
2. **Test changes immediately**: Refresh browser to see updates
3. **Content areas to modify**:
   - Personal information in hero section
   - Skills and technologies in スキル section  
   - Project details in JavaScript `projectsData` array (lines ~400-500)
   - Contact information in 連絡先 section

### Adding New Projects
1. **Locate the `projectsData` array** in the `<script>` section of `index.html`
2. **Add new project object** with title and content following existing pattern
3. **Update project cards HTML** in the 開発経験 section to match array length
4. **Test modal functionality** - ensure new project opens correctly

### Styling Changes
1. **Use TailwindCSS classes** - modify existing class attributes in HTML
2. **Custom CSS modifications** - edit `<style>` section in `<head>`
3. **Color palette**: Stone grays with indigo accents (#4338ca primary)
4. **Test responsive design** - verify mobile and desktop layouts

### Media Management
1. **Add images/media** to `/media` directory
2. **Reference in HTML** using relative paths: `./media/filename.ext`
3. **Supported formats**: PNG, GIF, JPG for portfolio content

## Validation & Quality Assurance

### Manual Testing Requirements
- **ALWAYS test full user scenarios** after any changes
- **Required validation steps**:
  1. Homepage loads correctly
  2. All navigation links work (smooth scrolling)
  3. All three project modals open and display content
  4. Modal close buttons work
  5. External links open correctly
  6. Responsive design works on mobile viewport
  7. No JavaScript console errors

### Browser Compatibility Testing
- **Test in multiple browsers** when making significant changes
- **Primary targets**: Chrome, Firefox, Safari, Edge
- **Mobile testing**: Use browser dev tools to test mobile viewport

### Performance Validation
- **Page load time**: Should be <1 second (static files only)
- **External dependency loading**: TailwindCSS and Google Fonts via CDN
- **Image optimization**: Ensure media files are appropriately sized

## Deployment & Production

### GitHub Pages Deployment
- **Automatic deployment**: Push to main branch triggers GitHub Pages build
- **No build process**: GitHub Pages serves static files directly
- **Custom domain**: Not configured, uses default ryotatoyr.github.io
- **HTTPS**: Automatically enabled by GitHub Pages

### Pre-deployment Checklist
1. **Test all functionality locally** using HTTP server
2. **Validate all links and modal interactions**
3. **Check for JavaScript console errors**
4. **Verify responsive design**
5. **Confirm all media files are accessible**

### Production Validation
- **After deployment**: Visit `https://ryotatoyr.github.io` to verify changes
- **Test full user workflow** on production site
- **Verify external CDN resources load correctly**

## Troubleshooting Common Issues

### CDN Resource Loading
- **External resources may be blocked** in some environments (corporate firewalls)
- **Fallback**: If TailwindCSS doesn't load, basic HTML structure remains functional
- **Testing**: Use browser dev tools to check for blocked resources

### Modal Functionality
- **JavaScript errors**: Check browser console for syntax errors
- **Modal not opening**: Verify button onclick handlers and projectsData array
- **Modal not closing**: Ensure close button event listeners are properly attached

### Local Development Issues
- **CORS errors**: Always use HTTP server (python3 -m http.server), never open file:// directly
- **Port conflicts**: If port 8000 is busy, use different port: `python3 -m http.server 8080`
- **Cache issues**: Hard refresh browser (Ctrl+F5) to clear cached resources

## Content Guidelines

### Text Content
- **Language**: Primarily Japanese with some English technical terms
- **Professional tone**: Formal Japanese appropriate for job applications
- **Technical accuracy**: Ensure all listed technologies and skills are accurate

### Project Descriptions
- **Structure**: Each project has title, overview, tech stack, and detailed breakdown
- **Consistency**: Follow existing format for new projects
- **Evidence**: Include links to live projects where available

### Contact Information
- **Current contacts**: Email, GitHub, LinkedIn profiles
- **Verification**: Ensure all contact links work and point to correct profiles
- **Privacy**: Personal information appropriate for public portfolio site

## Performance & Best Practices

### Code Organization
- **Single file architecture**: All code in index.html for simplicity
- **Separation of concerns**: HTML structure, CSS in `<style>`, JS in `<script>`
- **Maintainability**: Comments in code explain complex sections
- **Readability**: Consistent indentation and formatting

### Accessibility
- **Semantic HTML**: Proper heading hierarchy (h1, h2, h3)
- **Alt text**: Images should have descriptive alt attributes
- **Keyboard navigation**: Ensure modals can be closed with keyboard
- **Color contrast**: Sufficient contrast for text readability

### SEO Considerations
- **Page title**: Descriptive and includes name
- **Meta tags**: Basic viewport and charset configuration
- **Semantic structure**: Proper use of header, main, section elements
- **Content hierarchy**: Clear heading structure for search engines