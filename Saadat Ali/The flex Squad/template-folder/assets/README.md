# Frontend Theme Starter

## 📁 Structure
- `index.html`: Main HTML file
- `css/style.css`: CSS styles using variables
- `js/script.js`: JavaScript logic
- `assets/`: Images and fonts
- `components/`: Optional HTML parts
- `deploy/screenshot.png`: Preview screenshot

## 🛠 Technologies
- HTML5
- CSS3 with Variables
- JavaScript (ES6+)

## 📄 License
This project is licensed under the MIT License.


Absolutely! Here is a **professional "Coding Guidelines & Tips" section** you can directly copy-paste into the `README.md` file of each project. This helps set a clear standard and educates your students while they build the frontend theme.

---

### ✅ **Coding Guidelines & Best Practices**

Follow these tips to write clean, professional frontend code:

---

### 🧱 HTML Best Practices

* ✅ Use **semantic HTML5 tags** (`<header>`, `<section>`, `<footer>`, etc.)
* ✅ Always add **`alt` attributes** for images
* ✅ Use proper **heading order** (`<h1>` to `<h6>`) for structure
* ✅ Avoid inline styles or scripts — keep code in separate CSS and JS files
* ✅ Use **labels** for all form inputs (if forms are used)
* ✅ Indent properly and keep your HTML readable
* ✅ Add `<meta name="viewport" content="width=device-width, initial-scale=1.0">` for responsiveness

---

### 🎨 CSS Best Practices

* ✅ Use **CSS Variables** for colors, font sizes, spacing, etc.

  ```css
  :root {
    --primary-color: #4e54c8;
    --secondary-color: #8f94fb;
    --text-color: #333;
    --spacing: 1rem;
  }

  body {
    color: var(--text-color);
    padding: var(--spacing);
  }
  ```

* ✅ Use **Flexbox** or **Grid** for layout

* ✅ Make your design **responsive** with media queries

  ```css
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
  }
  ```

* ✅ Reuse classes — avoid repeating styles

* ✅ Add simple **hover transitions** for buttons or links

* ✅ Group your styles by section: `/* Header Styles */`, `/* Footer */`, etc.

* ✅ Use relative units like `rem`, `%`, and `em` (avoid `px` everywhere)

* ❌ Don't use inline styles or duplicate IDs

---

### 💡 JavaScript Best Practices

* ✅ Use **modern ES6+ syntax**: `const`, `let`, arrow functions, etc.

* ✅ Wrap code inside `DOMContentLoaded` to ensure the DOM is loaded

  ```js
  document.addEventListener('DOMContentLoaded', () => {
    // JS code here
  });
  ```

* ✅ Use **`forEach`** or `for` loops to handle repeated actions

* ✅ Avoid code duplication — use reusable **functions**

* ✅ Add **comments** to explain key parts of your JS logic

* ✅ Use **event listeners** for interactive components (like toggles, menus, sliders)

* ❌ Don't use jQuery or external JS libraries unless allowed

---

### 📁 File & Folder Rules

* ✅ All images must go inside `/assets/images`
* ✅ Fonts should be inside `/assets/fonts`
* ✅ Final preview image must be saved as `deploy/screenshot.png`
* ✅ All styles in `/css/style.css`, all JS in `/js/script.js`
* ✅ All files must be named in **lowercase-with-dashes** or **camelCase**
* ✅ No unnecessary folders, duplicate images, or unused files

---

### 📐 UI & UX Requirements

* ✅ Must be responsive on desktop, tablet, and mobile
* ✅ Use clear color contrast for text readability
* ✅ Add hover or click feedback (like button animations)
* ✅ Try to use **Google Fonts** or system fonts for consistency
* ✅ Maintain visual hierarchy: Headings, subheadings, body text

---

### 📝 Submission Checklist

* [ ] Project folder is clean and structured
* [ ] Used CSS variables and Flexbox/Grid
* [ ] Avoided repeated code in all files
* [ ] Code is responsive and accessible
* [ ] Added screenshot in `/deploy/`
* [ ] Project deployed and GitHub link shared
* [ ] README.md is complete

---

You can paste this entire block in the bottom section of your starter `README.md`, or you can distribute it as a `CODING_GUIDELINES.md` file separately.

Let me know if you'd like me to attach a ready `.md` file with this content so you can include it directly in the starter zip.
