# Veritai-news-filter1
# Veritai | News Filter & Claim Verifier

**Veritai** is a lightweight web application designed to help users filter through online noise. By pasting a claim or keyword, users can instantly retrieve related reports from highly-vetted, professional news sources.

## 🚀 Features
- **Verified Filtering:** Limits searches to "Gold Standard" sources like Reuters, Associated Press, and BBC News.
- **Clean UI:** Minimalist, mobile-friendly design for quick fact-checking on the go.
- **Real-time Context:** Powered by the NewsAPI to bring in the latest global reports.

## 🛠️ Built With
- **HTML5 & CSS3:** Semantic structure and responsive design.
- **JavaScript (ES6+):** Fetch API for asynchronous data handling.
- **NewsAPI:** The engine providing the verified news database.

## 📖 How it Works
1. User enters a claim or topic in the text area.
2. The app cleans the input and sends a request to the NewsAPI `everything` endpoint.
3. The results are filtered by specific `source` IDs to ensure high credibility.
4. Verified articles are rendered as cards with links to the full evidence.

---
*Created as a learning project to combat misinformation.*
