---
layout: default
title: Michele Newman
---

<main>
  <div class="box name-box">
    <h1>Michele Newman</h1>
    <p class="tagline">Ph.D. candidate at the University of Washington Information School</p>
  </div>

  <div class="box bio-box">
    <img src="{{ '/assets/images/bio.jpg' | relative_url }}" alt="Michele Newman">
    <p>I study how creative technologies mediate the way people construct, express, and preserve knowledge. My work bridges library and information science, human-computer interaction, and cultural studies to explore authorship, agency, and equity in digital environments.</p>
  </div>

  <div class="box research-box">
    <h2>Research Interests</h2>
    <p>I’m curious about how digital worlds—like video games, interactive tools, and multimedia platforms—become spaces where communities create, share, and preserve knowledge. I explore how we can design environments that spark creativity, support learning, and protect cultural heritage. Along the way, I’m especially interested in:</p>
    <ul>
      <li>Preserving digital stories, games, and cultural content before they disappear</li>
      <li>Co-creating tools and experiences that invite collaboration, creativity, and discovery</li>
      <li>Exploring how AI and new technologies change the way we imagine, create, and engage with information</li>
    </ul>
  </div>

  <div class="box work-box">
    <h2>My Work</h2>
    <button onclick="openPopup('publications-popup')">Publications</button>
    <button onclick="openPopup('projects-popup')">Projects</button>
    <button onclick="openPopup('teaching-popup')">Teaching</button>
  </div>

  <div class="box cv-box">
    <h2>CV</h2>
    <a href="{{ '/assets/cv.pdf' | relative_url }}" target="_blank"><button>Download CV</button></a>
    <a href="https://scholar.google.com/" target="_blank"><button>Google Scholar</button></a>
    <a href="https://orcid.org/" target="_blank"><button>ORCID</button></a>
  </div>

  <button id="close-all-btn">Close All Windows</button>

  <footer id="footer-easter-egg">
    <p>© 2025 Michele Newman</p>
  </footer>
</main>

<!-- Popups -->
<div id="publications-popup" class="popup">
  <div class="popup-header">Publications <button class="popup-close" onclick="closePopup('publications-popup')">X</button></div>
  <div class="popup-content" id="publications-list">
    <p>Coming soon: a list of peer-reviewed publications and conference papers.</p>
  </div>
</div>

<div id="projects-popup" class="popup">
  <div class="popup-header">Projects <button class="popup-close" onclick="closePopup('projects-popup')">X</button></div>
  <div class="popup-content" id="projects-list">
    <p>Explore collaborative digital storytelling and creative tech projects.</p>
  </div>
</div>

<div id="teaching-popup" class="popup">
  <div class="popup-header">Teaching <button class="popup-close" onclick="closePopup('teaching-popup')">X</button></div>
  <div class="popup-content" id="teaching-list">
    <p>Courses taught, syllabi, and student-led initiatives.</p>
  </div>
</div>

<!-- Easter egg popup -->
<div id="funfact-popup" class="popup fun-fact">
  <div class="popup-header">Fun Fact <button class="popup-close" onclick="closePopup('funfact-popup')">X</button></div>
  <div class="popup-content">
    <div class="marquee"><span>It’s dangerous to go alone! Take this 🎶</span></div>
  </div>
</div>
