// Copy buttons on code samples
document.querySelectorAll(".docs-code").forEach((block) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "docs-copy";
  button.textContent = "Copy";
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(block.querySelector("pre").innerText);
      button.textContent = "Copied";
    } catch {
      button.textContent = "Press Ctrl+C";
    }
    setTimeout(() => (button.textContent = "Copy"), 1600);
  });
  block.appendChild(button);
});

// Device width switcher on the Page Patterns preview
document.querySelectorAll("[data-device-width]").forEach((input) => {
  input.addEventListener("change", () => {
    const frame = document.getElementById(input.dataset.target);
    if (frame) frame.style.maxWidth = input.dataset.deviceWidth;
  });
});
