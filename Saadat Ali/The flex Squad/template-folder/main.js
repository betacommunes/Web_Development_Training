// main.js

// Load a single HTML file as string
async function loadHTML(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return await res.text();
}  

// Replace data-component tags with actual component content
async function injectComponents(container) {
  const componentHolders = container.querySelectorAll('[data-component]');

  for (const holder of componentHolders) {
    const path = holder.getAttribute('data-component');
    const html = await loadHTML(path);
    holder.outerHTML = html; // Replace placeholder with actual component
  }
}

// Load page (e.g., home.html) and render its components
async function renderPage(pagePath = './pages/home.html') {
  const app = document.getElementById('app');
  try {
    const pageHTML = await loadHTML(pagePath);
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = pageHTML;

    await injectComponents(tempDiv); // Inject all components
    app.innerHTML = tempDiv.innerHTML; // Render to the page
  } catch (err) {
    app.innerHTML = `<p>Error: ${err.message}</p>`;
  }
}

renderPage(); // By default, load home.html
