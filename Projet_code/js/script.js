addEventListener("load", (event) => {
  document
    .getElementsByClassName("container")[0]
    .addEventListener("click", addpopup);

  function addpopup() {
    document.getElementsByClassName("popup-container")[0].innerHTML =
      document.getElementsByClassName("popup-container")[0].innerHTML +
      '<div class="popup"><div class="text">haha</div></div>';
  }
});
