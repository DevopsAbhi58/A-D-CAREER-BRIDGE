// ----------------------
// Job Listings
// ----------------------
const jobs = [
  {
    role: "Frontend Developer",
    description: "Build user interfaces with HTML, CSS, JS.",
  },
  {
    role: "Backend Developer",
    description: "Manage databases and server logic.",
  },
  {
    role: "UI/UX Designer",
    description: "Design modern and user-friendly interfaces.",
  },
];

const jobList = document.getElementById("job-listings");
jobs.forEach((job) => {
  const card = document.createElement("div");
  card.className = "job-card";
  card.innerHTML = `
    <h3>${job.role}</h3>
    <p>${job.description}</p>
    <button class="apply-btn">Apply</button>
  `;
  jobList.appendChild(card);

  // Add event listener to button
  card
    .querySelector(".apply-btn")
    .addEventListener("click", () => selectJob(job.role));
});

// ----------------------
// Select Job
// ----------------------
function selectJob(role) {
  document.getElementById("jobRole").value = role;
  window.location.href = "#apply";
}

// ----------------------
// Handle Form Submission
// ----------------------
document.getElementById("applyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const jobRole = document.getElementById("jobRole").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const resume = document.getElementById("resume").files[0]?.name || "No file";

  // ----------------------
  // Save to Local Storage
  // ----------------------
  const application = { jobRole, name, email, phone, resume };
  let applications = JSON.parse(localStorage.getItem("applications") || "[]");
  applications.push(application);
  localStorage.setItem("applications", JSON.stringify(applications));

  // ----------------------
  // WhatsApp Notification
  // ----------------------
  const myNumber = "919131973508"; // Your number (without +)
  const message = `New Job Application:\nJob Role: ${jobRole}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nResume: ${resume}`;
  const whatsappURL = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");

  // ----------------------
  // User Feedback
  // ----------------------
  alert(
    "Application submitted! WhatsApp message prepared. Please send it via WhatsApp.",
  );

  this.reset();
});

// ----------------------
// Populate Admin Dashboard
// ----------------------
const adminList = document.getElementById("applications-list");
if (adminList) {
  const applications = JSON.parse(localStorage.getItem("applications") || "[]");
  applications.forEach((app) => {
    const div = document.createElement("div");
    div.className = "job-card";
    div.innerHTML = `
      <h3>${app.jobRole}</h3>
      <p><strong>Name:</strong> ${app.name}</p>
      <p><strong>Email:</strong> ${app.email}</p>
      <p><strong>Phone:</strong> ${app.phone}</p>
      <p><strong>Resume:</strong> ${app.resume}</p>
    `;
    adminList.appendChild(div);
  });
}

// ----------------------
// Animate Apply Form
// ----------------------
function animateOnScroll() {
  const form = document.querySelector(".animate");
  if (!form) return;
  const formTop = form.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (formTop < windowHeight - 100) {
    form.classList.add("active");
  }
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);
// Select all navbar links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // remove #
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // adjust for navbar height
        behavior: 'smooth'
      });
    }
  });
});
// Fade in body
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  // Animate sections
  const sections = document.querySelectorAll(".fade-up");
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("active");
    }, index * 300); // stagger each section by 300ms
  });
});
// ----------------------
// Floating Connect Bar Slide-in
// ----------------------
window.addEventListener('load', () => {
  const floatingBar = document.querySelector('.floating-connect');
  setTimeout(() => {
    floatingBar.classList.add('show');
  }, 500); // delay for smooth appearance
});

// ----------------------
// Fade-Up on Scroll
// ----------------------
const fadeUpElements = document.querySelectorAll('.fade-up');

function animateFadeUp() {
  fadeUpElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', animateFadeUp);
window.addEventListener('load', animateFadeUp);

