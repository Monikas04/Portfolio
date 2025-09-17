
 const coverBox = document.getElementById("coverLetterBox");
  const downloadOptions = document.getElementById("downloadOptions");

  // Position the popup below the box dynamically
  function positionPopup() {
    const rect = coverBox.getBoundingClientRect();
    downloadOptions.style.top = rect.bottom + window.scrollY + 10 + "px";
    downloadOptions.style.left = rect.left + rect.width/2 + window.scrollX - downloadOptions.offsetWidth/2 + "px";
  }

  // Toggle popup when box clicked
  coverBox.addEventListener("click", (e) => {
    e.stopPropagation();
    positionPopup();
    downloadOptions.style.display = downloadOptions.style.display === "block" ? "none" : "block";
  });

  // Click outside → hide popup
  document.addEventListener("click", () => {
    downloadOptions.style.display = "none";
  });

  // Reposition on window resize
  window.addEventListener("resize", () => {
    if(downloadOptions.style.display === "block") positionPopup();
  });





const projects = [
  {
    title: "Portfolio Website",
    image: "https://via.placeholder.com/300x180",
    description: "A responsive website showcasing my skills and projects.",
    tech: "Tech: HTML, CSS, JavaScript",
    links: [
      {name: "GitHub", url: "#"},
      {name: "Live Demo", url: "#"}
    ]
  },
  {
    title: "Todo App",
    image: "https://via.placeholder.com/300x180",
    description: "A simple Todo app with add, edit, delete features.",
    tech: "Tech: HTML, CSS, JavaScript",
    links: [
      {name: "GitHub", url: "#"},
      {name: "Live Demo", url: "#"}
    ]
  },
  {
    title: "Weather App",
    image: "https://via.placeholder.com/300x180",
    description: "Shows current weather using an API.",
    tech: "Tech: HTML, CSS, JavaScript, API",
    links: [
      {name: "GitHub", url: "#"},
      {name: "Live Demo", url: "#"}
    ]
  }
];

let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  updateModal();
  document.getElementById('projectModal').style.display = 'block';

  // Optional: animate card lift effect
  const card = document.querySelectorAll('.project-card')[index];
  card.style.transform = 'scale(1.07) translateY(-10px)';
  setTimeout(() => {
    card.style.transform = ''; // reset after animation
  }, 300);
}

function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
}

function updateModal() {
  const project = projects[currentIndex];
  document.getElementById('modalTitle').innerText = project.title;
  document.getElementById('modalImage').src = project.image;
  document.getElementById('modalDescription').innerText = project.description;
  document.getElementById('modalTech').innerText = project.tech;

  const linksDiv = document.getElementById('modalLinks');
  linksDiv.innerHTML = '';
  project.links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.innerText = link.name;
    a.target = '_blank';
    a.style.margin = '0 10px';
    linksDiv.appendChild(a);
  });
}

function nextProject() {
  currentIndex = (currentIndex + 1) % projects.length;
  updateModal();
}

function prevProject() {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  updateModal();
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  const content = document.querySelector('.modal-content');
  if (event.target === modal || !content.contains(event.target)) {
    closeModal();
  }
}

