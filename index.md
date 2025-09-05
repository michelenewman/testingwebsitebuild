---
layout: default
title: Michele Newman
---

<div class="desktop-icon" onclick="openPopup('popup1')" style="top: 50px; left: 50px;">
  <img src="{{ '/assets/images/folder-pink.png' | relative_url }}" alt="About Icon" />
  <span>About Michele</span>
</div>

<div class="desktop-icon" onclick="openPopup('popup2')" style="top: 150px; left: 50px;">
  <img src="{{ '/assets/images/folder-blue.png' | relative_url }}" alt="Research Icon" />
  <span>Research</span>
</div>

{% include popup.html %}
