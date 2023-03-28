const editor = document.getElementById("editor");
const boldButton = document.getElementById("bold");
const italicButton = document.getElementById("italic");
const underlineButton = document.getElementById("underline");

boldButton.addEventListener("click", () => {
  document.execCommand("bold", false, null);
});

italicButton.addEventListener("click", () => {
  document.execCommand("italic", false, null);
});

underlineButton.addEventListener("click", () => {
  document.execCommand("underline", false, null);
});

