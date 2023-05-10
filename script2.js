const ehteshamCheckbox = document.getElementById("ehtesham-checkbox");
  const toushifCheckbox = document.getElementById("toushif-checkbox");
  const othersCheckbox = document.getElementById("others-checkbox");
  const ehteshamSection = document.getElementById("ehtesham-section");
  const toushifSection = document.getElementById("toushif-section");
  const othersSection = document.getElementById("others-section");

  function handleCheckboxChange() {
    // Hide all sections
    ehteshamSection.style.display = "none";
    toushifSection.style.display = "none";
    othersSection.style.display = "none";

    // Uncheck all other checkboxes
    if (this === ehteshamCheckbox) {
      toushifCheckbox.checked = false;
      othersCheckbox.checked = false;
    } else if (this === toushifCheckbox) {
      ehteshamCheckbox.checked = false;
      othersCheckbox.checked = false;
    } else if (this === othersCheckbox) {
      ehteshamCheckbox.checked = false;
      toushifCheckbox.checked = false;
    }

    // Show the section corresponding to the selected checkbox
    if (ehteshamCheckbox.checked) {
      ehteshamSection.style.display = "block";
    } else if (toushifCheckbox.checked) {
      toushifSection.style.display = "block";
    } else if (othersCheckbox.checked) {
      othersSection.style.display = "block";
    }
  }

  // Add event listeners to the checkboxes
  ehteshamCheckbox.addEventListener("change", handleCheckboxChange);
  toushifCheckbox.addEventListener("change", handleCheckboxChange);
  othersCheckbox.addEventListener("change", handleCheckboxChange);
