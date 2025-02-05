import "./style.scss";
let titlePostfix = 1;
let language = "en";
document
  .querySelector(".header .left .language")
  .addEventListener("click", () => {
    document
      .querySelector(".Home-scr .title")
      .classList.remove(
        `title-${language}-${titlePostfix < 10 ? "0" : ""}${titlePostfix}`
      );
    document.querySelector(".Home-scr .title").classList.remove(language);
    document
      .querySelector(".header .left .language img.ar")
      .classList.toggle("active");
    language = language == "en" ? "ar" : "en";
    titlePostfix = 1;
    document.querySelector(".Home-scr .title").classList.add(language);
  });
setInterval(framesupdate.bind(this), 60);
function framesupdate() {
  document
    .querySelector(".Home-scr .title")
    .classList.remove(
      `title-${language}-${titlePostfix < 10 ? "0" : ""}${titlePostfix}`
    );

  titlePostfix += 1;
  if (titlePostfix > 40 && language == "en") {
    titlePostfix = 40;
  }
  if (titlePostfix > 39 && language == "ar") {
    titlePostfix = 39;
  }
  document
    .querySelector(".Home-scr  .title")
    .classList.add(
      `title-${language}-${titlePostfix < 10 ? "0" : ""}${titlePostfix}`
    );
}
