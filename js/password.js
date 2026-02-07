function checkPassword() {
  const pass = document.getElementById("password").value.toLowerCase();
  const selectedDay = localStorage.getItem("selectedDay");

  if (pass === "blueberry" || pass === "watermelon") {

    if (selectedDay) {
      window.location.href = `days/${selectedDay}.html`;
    } else {
      alert("Something went wrong 😅");
    }

  } else {
    document.getElementById("error").style.display = "block";
  }
}
