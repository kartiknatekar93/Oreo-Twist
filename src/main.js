import "./style.scss";
// import { Server } from "./common/callServer";
import {
  Global,
  data,
  buttonImages,
  country,
  screen_button,
  countryCodes,
} from "./common/global";

import { isMobile, isMobileOnly } from "mobile-device-detect";
let titlePostfix = 1;
let coinPostFix = 1;
let cookietwistPostfix = 1;
let congratsPostfix = 1;
let start_cookie_anim = false;
let errorTO = null;
const imageCount = 7;
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
let register_textEle = document.querySelector(".register");
let discover_textEle = document.querySelector(".discover");
let title_bgEle = document.querySelector(".title-bg");
let privacy_Ele = document.querySelectorAll(".privacy_trigger");
let tc_Ele = document.querySelectorAll(".tc_trigger");
let tc_closeEle = document.querySelector(".termsClose");
let errorInfo_Ele = document.querySelector(".errorInfo");
const container = document.getElementById("imageContainer");
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
  animatebgEle();
  privacy_Ele.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      location.href = `./privacy-policy/${language}`;
    });
  });
  tc_Ele.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      document.querySelector("#terms_sec").classList.add("active");
    });
  });
  tc_closeEle.addEventListener("click", () => {
    document.querySelector("#terms_sec").classList.remove("active");
  });
};

//it fetches html based on country and language
const setTerms = () => {
  if (data.language == "ar") {
    document.querySelector("#terms_sec").classList.add("ar");
  } else {
    document.querySelector("#terms_sec").classList.remove("ar");
  }
  fetch(`/images/common/${data.country}_${data.language}.html`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((html) => {
      document.querySelector("#terms_sec .content").innerHTML = html;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
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

//register click listner
register_textEle.addEventListener("click", function () {
  registerclick();
});
//discover recipe click listner
discover_textEle.addEventListener("click", function () {
  discoverclick();
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
      if (proceedFromCountrySelection()) {
        setTerms();
        screen_oneEle.classList.remove("active");
        screen_twoEle.classList.add("active");
        data.curr_screen = "screen_two";
        data.prev_screen = "screen_one";
        screenbtnChange();
      }

      break;

    case "screen_two":
      title_scr.classList.add("up");
      title_bgEle.classList.remove("active");
      screen_twoEle.classList.remove("active");
      screen_threeEle.classList.add("active");
      data.curr_screen = "screen_three";
      data.prev_screen = "screen_two";
      screenbtnChange();
      break;

    case "screen_three":
      if (!data.iscookieanim) {
        title_bgEle.classList.remove("active");
        start_cookie_anim = true;
        reveal_textEle.classList.remove("active");
        data.iscookieanim = true;
        setTimeout(() => {
          register_textEle.classList.add("active");
          discover_textEle.classList.add("active");
        }, 3000);
        document
          .querySelector(`.${screen_button[data.curr_screen]}`)
          .classList.remove("active");
      }
      break;

    case "screen_four":
      if (data.issubmit) {
        title_scr.classList.add("up");
        title_bgEle.classList.remove("active");
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
        title_bgEle.classList.add("active");
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
const registerclick = () => {
  title_scr.classList.add("up");
  title_bgEle.classList.remove("active");
  screen_threeEle.classList.remove("active");
  screen_fourEle.classList.add("active");
  data.curr_screen = "screen_four";
  data.prev_screen = "screen_three";
  screenbtnChange();
};
const discoverclick = () => {};
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
  data.language = language;

  //reset on changing language
  titlePostfix = 1;
  coinPostFix = 1;
  congratsPostfix = 1;
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

const proceedFromCountrySelection = () => {
  if (data.country === "" || data.country.length === 0) {
    countryEle.parentElement.classList.add("error");
    showError(
      data.language == "en"
        ? "Please select your country"
        : "الرجاء اختيار بلدك"
    );
    return false;
  } else {
    return true;
  }
};

const showError = (errorInfo) => {
  errorInfo_Ele.innerHTML = errorInfo;
  errorInfo_Ele.classList.add("active");
  errorTO && clearTimeout(errorTO);
  errorTO = setTimeout(() => {
    errorInfo_Ele.classList.remove("active");
    const ele = document.querySelector(".error");
    console.log(ele);
    ele?.classList.remove("error");
  }, 1000);
};

const animatebgEle = () => {
  for (let i = 0; i < imageCount; i++) {
    let img = document.createElement("img");
    img.src = `images/common/BG-element_0${i + 1}.png`;
    img.classList.add("image");
    let startX = Math.random() * 90; // Random between 30vw and 70vw
    img.style.left = `${startX}vw`;
    img.style.bottom = "-100px";

    // Assign small random X variations
    img.style.setProperty("--x1", `${Math.random() * 6 - 2}vw`); // Small left/right shift
    img.style.setProperty("--x2", `${Math.random() * 6 - 2}vw`);
    img.style.setProperty("--x3", `${Math.random() * 6 - 2}vw`);
    img.style.setProperty("--x4", `${Math.random() * 6 - 2}vw`);
    img.style.setProperty("--x5", `${Math.random() * 6 - 2}vw`);

    // Apply animation with random duration and delay
    img.style.animation = `moveUp ${10 + Math.random() * 2}s linear infinite`;
    img.style.animationDelay = `${Math.random() * 5}s`; // Random delay
    container.appendChild(img);
  }
};
