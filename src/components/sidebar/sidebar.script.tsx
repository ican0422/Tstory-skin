window.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("sidebar-toggle");
    const circle = toggleBtn?.querySelector("div");
  
    if (!toggleBtn || !circle) return;
  
    toggleBtn.addEventListener("click", () => {
      const isOn = circle.classList.contains("translate-x-6");
      circle.classList.toggle("translate-x-6", !isOn);
      circle.classList.toggle("translate-x-0", isOn);
    });
  });
  