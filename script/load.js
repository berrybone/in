// JavaScript to show/hide the loading overlay
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      // Hide the loading overlay when the page is fully loaded
      document.getElementById("overlay").style.visibility = "hidden";
    } else {
      // Show the loading overlay while the page is loading
      document.getElementById("overlay").style.visibility = "visible";
    }
  };