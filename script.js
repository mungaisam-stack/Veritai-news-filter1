const checkBtn = document.getElementById("checkBtn");
const claimInput = document.getElementById("claimInput");
const resultsDiv = document.getElementById("results");

// Replace 'YOUR_API_KEY' with the key you got from newsapi.org
const API_KEY = '1cb16df265684a67968710e318558cf4'; 

checkBtn.addEventListener("click", async () => {
  const claim = claimInput.value.trim();

  if (!claim) {
    alert("Please paste a claim first.");
    return;
  }

  resultsDiv.innerHTML = "<p class='loading'>Filtering verified sources...</p>";

  try {
    // 1. Construct the URL
    // 'q' is your search term, 'sources' limits it (e.g., bbc-news)
   // We are adding more sources and a proxy to make sure it works on mobile
// Cleanest, high-authority sources
const trustedSources = 'reuters,associated-press,bbc-news,axios';

// Update the URL line to focus on these
const url = `https://corsproxy.io/?https://newsapi.org/v2/everything?q=${encodeURIComponent(claim)}&sources=${trustedSources}&language=en&sortBy=relevancy&apiKey=${API_KEY}`;
   //making request 
    const response = await fetch(url);
    const data = await response.json();

    // 3. Handle the results
    resultsDiv.innerHTML = ""; // Clear loading text

    if (data.articles && data.articles.length > 0) {
      data.articles.forEach(article => {
        const articleEl = document.createElement("div");
        articleEl.className = "article-card";
        articleEl.innerHTML = `
  <div style="font-size: 0.8rem; color: #666; text-transform: uppercase; font-weight: bold; margin-bottom: 5px;">
    Verified Source: ${article.source.name}
  </div>
  <h3 style="margin-top: 0;">${article.title}</h3>
  <p>${article.description || "Click below to read the full context."}</p>
  <a href="${article.url}" target="_blank" style="color: #007bff; font-weight: bold;">View Evidence →</a>
  <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
`;
        resultsDiv.appendChild(articleEl);
      });
    } else {
      resultsDiv.innerHTML = "<p>No matching verified reports found for this claim.</p>";
    }

  } catch (error) {
    console.error("Error fetching news:", error);
    resultsDiv.innerHTML = "<p>Error connecting to the source. Please try again.</p>";
  }
});