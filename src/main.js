import "./style.scss";
// import { Server } from "./common/callServer";
import {
  Global,
  data,
  buttonImages,
  country,
  screen_button,
} from "./common/global";

import { isMobile, isMobileOnly } from "mobile-device-detect";
let titlePostfix = 1;
let coinPostFix = 1;
let cookietwistPostfix = 1;
let congratsPostfix = 1;
let start_cookie_anim = false;

//DOM Elements
let languageToggle = document.getElementById("language");
let countryEle = document.getElementById("country-select");
let btnEle = document.querySelector(".button-section .button");
let screen_oneEle = document.querySelector(".screen_one");
let screen_twoEle = document.querySelector(".screen_two");
let screen_threeEle = document.querySelector(".screen_three");
let screen_fourEle = document.querySelector(".screen_four");
let screen_fiveEle = document.querySelector(".screen_five");
let screen_sixEle = document.querySelector(".screen_six");
let title_scr = document.querySelector(".title-scr");
let reveal_textEle = document.querySelector(".reveal_text");
//local language detect
let language = localStorage.getItem("language")
  ? localStorage.getItem("language")
  : "en";
data.language = language;

const setUID = (v) => {
  v = JSON.parse(v);
  Global.gameKey = v["game_key"];
  Global.U_ID = v["uid"];
};

window.onload = () => {
  // Global.serverObj = new Server();

  // const queryString = window.location.search;
  // console.log(queryString);
  // const urlParams = new URLSearchParams(queryString);
  // let utm_source = urlParams.get("utm_source");
  // Global.serverObj.send(Global.URL_CREATE, setUID.bind(this), null, {
  //   fresh: true,
  //   language: language,
  //   utm_source: utm_source,
  //   device: isMobile ? "mobile" : "web",
  // });

  activatePage();
};

const activatePage = () => {
  activateAnimation();
};

//DOM Elements Listener
//country selection listner
countryEle.addEventListener("change", (e) => {
  selectCountry(e);
});

// Bottom Btn click listner

btnEle.addEventListener("click", function () {
  btnclick(this);
});

//DOM Elements Functions
const selectCountry = (e) => {
  data.country = country[e.target.value];
};

//checks screen and decides to active the button for next screen
// and deactive current screen
function btnclick(ele) {
  switch (data.curr_screen) {
    case "screen_one":
      screen_oneEle.classList.remove("active");
      screen_twoEle.classList.add("active");
      data.curr_screen = "screen_two";
      data.prev_screen = "screen_one";
      screenbtnChange();
      break;

    case "screen_two":
      title_scr.classList.add("up");
      screen_twoEle.classList.remove("active");
      screen_threeEle.classList.add("active");
      data.curr_screen = "screen_three";
      data.prev_screen = "screen_two";
      screenbtnChange();
      break;

    case "screen_three":
      if (!data.iscookieanim) {
        start_cookie_anim = true;
        reveal_textEle.classList.remove("active");
        data.iscookieanim = true;
      } else {
        title_scr.classList.add("up");
        screen_threeEle.classList.remove("active");
        screen_fourEle.classList.add("active");
        data.curr_screen = "screen_four";
        data.prev_screen = "screen_three";
        screenbtnChange();
      }
      break;

    case "screen_four":
      if (data.issubmit) {
        title_scr.classList.add("up");
        screen_fourEle.classList.remove("active");
        screen_fiveEle.classList.add("active");
        data.curr_screen = "screen_five";
        data.prev_screen = "screen_four";
        data.prev_button = screen_button[data.prev_screen];
        document
          .querySelector(`.${data.prev_button}`)
          .classList.remove("active");
        document
          .querySelector(`.${screen_button[data.curr_screen][data.isupload]}`)
          .classList.add("active");
      }

      break;

    case "screen_five":
      if (data.isupload == "uploaded") {
        title_scr.classList.remove("up");
        screen_fiveEle.classList.remove("active");
        screen_sixEle.classList.add("active");
        data.curr_screen = "screen_six";
        data.prev_screen = "screen_five";
        data.prev_button = screen_button[data.prev_screen][data.isupload];
        document
          .querySelector(`.${data.prev_button}`)
          .classList.remove("active");
        document
          .querySelector(`.${screen_button[data.curr_screen]}`)
          .classList.add("active");
      }

      break;
  }
}

//common functions
const screenbtnChange = () => {
  data.prev_button = screen_button[data.prev_screen];
  document.querySelector(`.${data.prev_button}`).classList.remove("active");
  document
    .querySelector(`.${screen_button[data.curr_screen]}`)
    .classList.add("active");
};

//languagetoggle button click event
languageToggle.addEventListener("click", () => {
  framesupdate(false);
  languageToggleFunc();
});

//activateAnimation event
const activateAnimation = () => {
  setInterval(framesupdate.bind(this, true), 60);
};

//languagetoggle event
const languageToggleFunc = () => {
  //remove image before adding to title
  document
    .querySelector(".title-scr .title")
    .classList.remove(
      `title-${language}-${titlePostfix < 10 ? "0" : ""}${titlePostfix}`
    );
  document.querySelector(".title-scr .title").classList.remove(language);

  //remove image before adding to coin
  document
    .querySelector(".screen_two .coin")
    .classList.remove(
      `coin-${language}-${coinPostFix < 10 ? "0" : ""}${coinPostFix}`
    );
  document.querySelector(".screen_two .coin").classList.remove(language);

  //remove image before adding to cookietwist
  document
    .querySelector(".screen_three .cookie-twist")
    .classList.remove(
      `cookie-twist-${cookietwistPostfix < 10 ? "0" : ""}${cookietwistPostfix}`
    );

  //remove image before adding to congrats
  document
    .querySelector(".screen_six .congrats")
    .classList.remove(
      `congrats-${language}-${
        congratsPostfix < 10 ? "0" : ""
      }${congratsPostfix}`
    );
  document.querySelector(".screen_six .congrats").classList.remove(language);

  //toggle language selection image
  document
    .querySelector(".header .left #language img.ar")
    .classList.toggle("active");
  language = language == "en" ? "ar" : "en";

  //reset on changing language
  titlePostfix = 1;
  coinPostFix = 1;

  //add sprite image class  based on langauge
  document.querySelector(".title-scr .title").classList.add(language);
  document.querySelector(".screen_two .coin").classList.add(language);
  document.querySelector(".screen_six .congrats").classList.add(language);
};

//frames update event
function framesupdate(addframes) {
  //title-add sprite image class  based on langauge for first time load
  document.querySelector(".title-scr .title").classList.remove(language);
  document.querySelector(".title-scr .title").classList.add(language);

  //coin-add sprite image class  based on langauge for first time load title
  document.querySelector(".screen_two .coin").classList.remove(language);
  document.querySelector(".screen_two .coin").classList.add(language);

  // congrats-add sprite image class  based on langauge for first time load title
  document.querySelector(".screen_six .congrats").classList.remove(language);
  document.querySelector(".screen_six .congrats").classList.add(language);

  //remove image on title
  document
    .querySelector(".title-scr .title")
    .classList.remove(
      `title-${language}-${titlePostfix < 10 ? "0" : ""}${titlePostfix}`
    );

  //remove image on coin
  document
    .querySelector(".screen_two .coin")
    .classList.remove(
      `coin-${language}-${coinPostFix < 10 ? "0" : ""}${coinPostFix}`
    );
  //remove image on cookie-twist
  document
    .querySelector(".screen_three .cookie-twist")
    .classList.remove(
      `cookie-twist-${cookietwistPostfix < 10 ? "0" : ""}${cookietwistPostfix}`
    );
  //remove image on congrats
  document
    .querySelector(".screen_six .congrats")
    .classList.remove(
      `congrats-${language}-${
        congratsPostfix < 10 ? "0" : ""
      }${congratsPostfix}`
    );

  if (addframes) {
    titlePostfix += 1;
    coinPostFix += 1;
    congratsPostfix += 1;
    //reset-title
    if (titlePostfix > 40 && language == "en") {
      titlePostfix = 40;
    }
    if (titlePostfix > 39 && language == "ar") {
      titlePostfix = 39;
    }
    //reset-coin
    if (coinPostFix > 20 && language == "en") {
      coinPostFix = 1;
    }
    if (coinPostFix > 20 && language == "ar") {
      coinPostFix = 1;
    }
    //reset-congrats
    if (congratsPostfix > 20 && language == "en") {
      congratsPostfix = 1;
    }
    if (congratsPostfix > 20 && language == "ar") {
      congratsPostfix = 1;
    }

    //add new image on title
    document
      .querySelector(".title-scr  .title")
      .classList.add(
        `title-${language}-${titlePostfix < 10 ? "0" : ""}${titlePostfix}`
      );
    //add new image on coin
    document
      .querySelector(".screen_two .coin")
      .classList.add(
        `coin-${language}-${coinPostFix < 10 ? "0" : ""}${coinPostFix}`
      );
    //add new image on congrats
    document
      .querySelector(".screen_six .congrats")
      .classList.add(
        `congrats-${language}-${
          congratsPostfix < 10 ? "0" : ""
        }${congratsPostfix}`
      );
  }

  if (start_cookie_anim) {
    cookietwistPostfix += 1;
    if (cookietwistPostfix > 50) {
      cookietwistPostfix = 50;
    }
    //add new image on coin

    document
      .querySelector(".screen_three .cookie-twist")
      .classList.add(
        `cookie-twist-${
          cookietwistPostfix < 10 ? "0" : ""
        }${cookietwistPostfix}`
      );
  }
}
