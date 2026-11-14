// Set this to a real inbox before publishing. Example: "hello@yourdomain.com"
const CONTACT_EMAIL = "contact@cwkit.in";

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const service = document.getElementById("service");
    const value = link.dataset.service;
    [...service.options].forEach(option => {
      if (option.text.toLowerCase() === value.toLowerCase()) service.value = option.text;
    });
  });
});

const form = document.getElementById("contact-form");
const note = document.getElementById("form-note");
form.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  if (!CONTACT_EMAIL) {
    note.textContent = "The enquiry form is ready, but no receiving email is configured yet. Open script.js and set CONTACT_EMAIL to your business inbox before publishing.";
    note.classList.add("notice");
    return;
  }
  const data = new FormData(form);
  const subject = encodeURIComponent(`CWKIT enquiry — ${data.get("service")}`);
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nWork email: ${data.get("email")}\nCompany: ${data.get("company") || "Not provided"}\nService: ${data.get("service")}\n\nRequirement:\n${data.get("message")}`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  note.textContent = "Your email application should open with the enquiry details. Please send the email to complete your enquiry.";
});
