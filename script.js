const mobileNavIconBtn = document.getElementById("mobile-nav-icon"),
  menu = document.getElementById("menu");

mobileNavIconBtn.addEventListener("click", () => {
  const data_value = mobileNavIconBtn.getAttribute("data-value");

  if (data_value === "opened") {
    mobileNavIconBtn.setAttribute("data-value", "closed");
    menu.setAttribute("data-toggle", "off");
    document.body.style.overflow = "auto";
  } else {
    mobileNavIconBtn.setAttribute("data-value", "opened");
    menu.setAttribute("data-toggle", "on");
    document.body.style.overflow = "hidden";
  }
});
