# Technical Documentation

## Project Info
- **Name**: Personal Portfolio Website
- **Technologies**: HTML, CSS, JavaScript
- **Features**: Dark/Light mode toggle, greeting feature, localStorage, responsive design
- **Design Inspiration**: Apple.com - minimal, elegant, premium feel

---

## File Structure
- `index.html` - Main page
- `css/styles.css` - All styling with theme support and animations
- `js/script.js` - Theme toggle, greeting logic, and localStorage
- `assets/images/` - Project screenshots
- `docs/` - Documentation files

---

## Core Features

### 1. Theme Switching System
**HTML:** Button with `id="theme-toggle"`
**JavaScript:** Adds/removes `dark-mode` class and saves preference using localStorage
**CSS:** Applies different styles using `.dark-mode` class

---

### 2. Greeting Feature (Dynamic Content)
**HTML:** Input field, button, and message display area
**JavaScript:**
- Reads user input (name)
- Validates input (checks if empty)
- Displays a personalized greeting message
- Changes greeting based on time (morning/afternoon/evening)
- Saves user name using localStorage
- Loads saved name when page reloads

**User Interaction:**
- User enters name → clicks button → greeting updates dynamically

---

### 3. User Feedback System
- Shows error message if input is empty
- Displays greeting message when input is valid
- Shows saved greeting when returning user visits again

---

### 4. Page Sections
- Header with name (Hero Header: Gradient background, large title)
- Sticky Navigation: Glass morphism effect, animated underline hover
- About Me section: Centered content layout
- Projects section: Table with images and hover effects
- Contact Form: Styled inputs with focus states

---

### 5. Animation & Transitions
- Smooth transition for dark/light mode
- Hover effects on navigation links and buttons
- Image zoom effect on hover
- Fade-in animation for greeting message

---

### 6. Data Handling
- **localStorage used for:**
  - Saving user name (greeting feature)
  - Saving theme preference (dark/light mode)

---

## Color Themes

### Light Mode
- Background: #ffffff
- Text: #1d1d1f
- Header Gradient: #f5f5f7 → #ffffff
- Accent: Purple (#8100cc, #a310f8)
- Navigation: White with blur effect

### Dark Mode
- Background: #000000
- Text: #f5f5f7
- Header Gradient: #1a1a1a → #000000
- Accent: Light purple (#a310f8)
- Navigation: Black with blur effect

---

## Setup Instructions
1. Clone or download the project files
2. Keep the folder structure unchanged
3. Ensure image paths are correct (`assets/images/`)
4. Open `index.html` in any modern browser
5. Test features:
   - Click "🌙 Dark Mode" button
   - Enter name in greeting section
   - Check saved greeting after reload
6. Resize browser to test responsiveness

---

## Known Issues
- Inline styles may not fully adapt in dark mode
- Contact form does not send real data (frontend only)

---

## Browser Support
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari (requires `-webkit-backdrop-filter`)
- Requires JavaScript enabled

---

## Personal Reflection
"I learned how to make my website more interactive by adding a greeting feature and saving user preferences. I improved my understanding of JavaScript, especially working with user input and localStorage. My portfolio now feels more dynamic and professional, and I am proud of how the design and functionality work together."
— Zahraa AL-Ahmed, CS Student at KFUPM