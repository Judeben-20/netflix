document.addEventListener("DOMContentLoaded", () => {
  const profileIcon = document.getElementById("profileIcon");
  const profileDropdown = document.getElementById("profileDropdown");

  profileIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    profileDropdown.style.display =
      profileDropdown.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (
      !profileIcon.contains(e.target) &&
      !profileDropdown.contains(e.target)
    ) {
      profileDropdown.style.display = "none";
    }
  });
});
