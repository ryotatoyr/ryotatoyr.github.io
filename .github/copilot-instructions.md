# Portfolio Website - Development Instructions

This is a static HTML portfolio website for Ryotaro Ota, hosted on GitHub Pages at https://ryotatoyr.github.io. The site is a single-page application written in Japanese, using Tailwind CSS for styling and vanilla JavaScript for interactivity.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Bootstrap and Setup
- No build process required - this is a static HTML website
- All dependencies are loaded via CDN (Tailwind CSS, Google Fonts)
- NEVER CANCEL: Initial setup takes 5-10 seconds maximum

### Local Development Server
Choose one of these methods to run the site locally:

**Method 1: Python HTTP Server (Recommended)**
```bash
cd /home/runner/work/ryotatoyr.github.io/ryotatoyr.github.io
python3 -m http.server 8000 --bind 127.0.0.1
```
- Starts in 2-3 seconds
- Access at http://127.0.0.1:8000
- Press Ctrl+C to stop

**Method 2: Node.js HTTP Server**
```bash
cd /home/runner/work/ryotatoyr.github.io/ryotatoyr.github.io
npx http-server -p 8000 -a 127.0.0.1
```
- NEVER CANCEL: First run takes 3-5 seconds (downloads package)
- Subsequent runs take 2 seconds
- Access at http://127.0.0.1:8000
- Press Ctrl+C to stop

### Code Quality and Validation
**HTML Validation:**
```bash
npx html-validate index.html
```
- NEVER CANCEL: Takes 1-2 seconds, may download package on first run
- Currently reports 17 validation errors (expected - see Common Issues section)
- Exit code 1 is expected due to validation errors

**Code Formatting:**
```bash
npx prettier --check index.html
```
- NEVER CANCEL: Takes 1-2 seconds, may download package on first run  
- Use `npx prettier --write index.html` to auto-fix formatting
- Exit code 1 indicates formatting issues exist

**CSS Validation:**
```bash
npx stylelint --version
```
- Stylelint v16.23.1 is available for CSS validation if needed

## Validation Scenarios

### Manual Testing Requirements
**ALWAYS run these validation steps after making changes:**

1. **Start Local Server and Verify Loading:**
   ```bash
   cd /home/runner/work/ryotatoyr.github.io/ryotatoyr.github.io
   python3 -m http.server 8000 --bind 127.0.0.1 &
   sleep 2
   curl -I http://127.0.0.1:8000/
   # Should return HTTP/1.0 200 OK
   killall python3
   ```

2. **Content Validation:**
   ```bash
   # Verify Japanese portfolio content loads
   curl -s http://127.0.0.1:8000/ | grep "大田 凌太郎"
   # Should return the page title
   
   # Verify Tailwind CSS loads from CDN
   curl -s http://127.0.0.1:8000/ | grep "tailwindcss.com"
   # Should return the CDN script tag
   ```

3. **Complete Validation Script:**
   Run the comprehensive validation script:
   ```bash
   ./.github/validate-portfolio.sh
   ```
   - Tests server startup, HTTP responses, content validation, and cleanup
   - Takes 2-3 seconds to complete
   - Should output 7 checkmarks if everything works correctly

### Browser Testing (If UI Changes Made)
When making visual changes, ALWAYS test these user scenarios:
- Navigate between sections using the header navigation
- Test mobile menu toggle functionality 
- Open and close project modals by clicking project buttons
- Verify smooth scrolling between sections works
- Check responsive layout on different viewport sizes

## File Structure and Important Locations

```
/home/runner/work/ryotatoyr.github.io/ryotatoyr.github.io/
├── index.html          # Main portfolio page (564 lines)
├── README.md           # Simple project description
├── media/              # Image assets for portfolio
│   ├── *.gif          # Project demonstration GIFs
│   └── *.png          # Project screenshots
└── .github/           # GitHub configuration
    ├── copilot-instructions.md  # This file
    └── validate-portfolio.sh    # Comprehensive validation script
```

### Key Code Sections in index.html:
- **Lines 1-37:** Document head, meta tags, CDN imports, CSS styles
- **Lines 38-85:** Header navigation and mobile menu
- **Lines 86-133:** Hero section with introduction
- **Lines 134-261:** Skills section with technology tags
- **Lines 262-441:** Projects section with modal functionality  
- **Lines 442-490:** Contact section
- **Lines 491-564:** JavaScript for modal and mobile menu functionality

### Dependencies (All via CDN):
- Tailwind CSS: `https://cdn.tailwindcss.com`
- Google Fonts: Inter and Noto Sans JP fonts
- No build dependencies or package.json needed

## Common Issues and Expected Behavior

### HTML Validation Errors (Expected)
The `npx html-validate index.html` command reports 17 errors including:
- Self-closing tag formatting warnings (5 errors)
- Missing button type attributes (5 errors)  
- Raw "&" characters that should be "&amp;" (2 errors)
- Empty heading and accessibility issues (5 errors)

These are existing issues in the codebase and should NOT be fixed unless specifically requested.

### GitHub Pages Deployment
- Site automatically deploys from main branch to https://ryotatoyr.github.io
- No build process required - direct HTML serving
- Changes to main branch trigger automatic deployment via GitHub Pages

### Performance Characteristics
- Local server startup: 2-3 seconds
- HTML validation: 1-2 seconds
- Code formatting check: 1-2 seconds  
- Full validation script: 2-3 seconds
- Site loads instantly (static HTML + CDN resources)

## Common Development Tasks

### Making Content Changes
1. Edit `index.html` directly
2. Run local server to preview changes
3. Run validation script to ensure functionality
4. Use HTML validator to check for new errors
5. Test navigation and modal functionality manually

### Adding New Images
1. Add image files to the `media/` directory
2. Reference them in HTML as `media/filename.ext`
3. Test image loading via local server

### Modifying Styles
- Styles are handled via Tailwind CSS classes in HTML
- Custom CSS is in the `<style>` block in document head (lines 14-32)
- No separate CSS files exist

### Testing Changes
- ALWAYS run the validation script after changes
- NEVER skip manual browser testing for UI changes
- Use code formatting tools to maintain consistency
- Verify all navigation and interactive elements work

## Tool Availability

Available in this environment:
- Node.js v20.19.4 (for npm packages)
- npm v10.8.2 (for package management) 
- Python 3.12.3 (for local server)
- Git 2.50.1 (for version control)
- curl (for HTTP testing)
- Firefox browser (for manual testing if needed)

### Installing Additional Tools
Most web development tools can be installed via npm using `npx` command:
```bash
npx [tool-name] [arguments]
```

Example tools that work:
- `npx html-validate` - HTML validation
- `npx prettier` - Code formatting  
- `npx stylelint` - CSS linting
- `npx http-server` - Development server

## Troubleshooting

### Port Already in Use
If you get "Address already in use" error:
```bash
# Kill existing servers
killall python3
# Or use a different port
python3 -m http.server 8001 --bind 127.0.0.1
```

### Server Won't Start
- Check you're in the correct directory: `/home/runner/work/ryotatoyr.github.io/ryotatoyr.github.io`
- Verify Python is available: `python3 --version`
- Try alternative Node.js server: `npx http-server -p 8000 -a 127.0.0.1`

### Validation Script Fails
- Ensure script is executable: `chmod +x ./.github/validate-portfolio.sh`  
- Check for port conflicts by trying different port in script
- Verify curl is available: `curl --version`

### HTML Validation Errors
- 17 validation errors are expected in the current codebase
- Only fix validation errors if specifically requested  
- New validation errors indicate potential issues with changes