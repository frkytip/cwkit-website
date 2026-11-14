
const form = document.getElementById("contact-form");
const note = document.getElementById("form-note");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  const data = new FormData(form);

  const payload = {
    name: data.get("name"),
    email: data.get("email"),
    company: data.get("company") || "",
    service: data.get("service"),
    message: data.get("message")
  };

  note.textContent = "Sending your enquiry...";
  note.classList.remove("notice");

  try {
    const response = await fetch(
      "https://cwkit-email-api.kshitijrai302.workers.dev",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Unable to send enquiry.");
    }

    note.textContent = "Thank you! Your enquiry has been sent successfully.";
    form.reset();

  } catch (error) {
    console.error("Contact form error:", error);
    note.textContent = "Sorry, your enquiry could not be sent. Please try again later.";
    note.classList.add("notice");
  }
});
