---
layout: default
title: Michele Newman
---

<div class="hero">
  <img src="{{ '/assets/images/michele-photo.jpg' | relative_url }}" alt="Michele Newman" class="profile-pic" />
  <div class="bio">
    <h1>Hi, I'm Michele Newman 👩‍💻</h1>
    <p>I study how creative technologies mediate the way people construct, express, and preserve knowledge. My work bridges library and information science, human-computer interaction, and cultural studies to explore authorship, agency, and equity in digital environments.</p>
  </div>
</div>

<div class="research-section">
  <h2>🔍 Research Interests</h2>
  <ul>
    <li>Creative technologies and digital authorship</li>
    <li>Equity and agency in online environments</li>
    <li>Youth and community storytelling practices</li>
    <li>Human-computer interaction and cultural studies</li>
    <li>Library and information science in digital contexts</li>
  </ul>
</div>

<hr />

<div class="desktop-area">
  <h2>🖥️ Explore My Work</h2>
  <div class="desktop-icon" onclick="openPopup('popup1')" style="top: 60px; left: 40px;">
    <img src="{{ '/assets/images/folder-pink.png' | relative_url }}" alt="About Icon" />
    <span>About Michele</span>
  </div>

  <div class="desktop-icon" onclick="openPopup('popup2')" style="top: 160px; left: 40px;">
    <img src="{{ '/assets/images/folder-blue.png' | relative_url }}" alt="Research Icon" />
    <span>Research</span>
  </div>
</div>

{% include popup.html %}
