document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('gpt-content');
  try {
    const response = await fetch('/api/tax-planner');
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    container.innerHTML = DOMPurify.sanitize(marked.parse(data.content));
  } catch (error) {
    container.innerHTML = `<div class="error">Error loading tax plan: ${error.message}</div>`;
  }
});
