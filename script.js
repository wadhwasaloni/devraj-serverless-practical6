
const button = document.getElementById("checkBtn");
const result = document.getElementById("result");

button.addEventListener("click", async () => {
  button.disabled = true;
  button.textContent = "Connecting...";
  result.textContent = "Contacting the serverless function...";

  try {
    const response = await fetch("/.netlify/functions/cafe-status");

    if (!response.ok) {
      throw new Error("Service request failed");
    }

    const data = await response.json();
    result.textContent = data.message;
  } catch (error) {
    result.textContent =
      "Unable to connect. Please check the deployment and try again.";
  } finally {
    button.disabled = false;
    button.textContent = "Check Café Service";
  }
});
