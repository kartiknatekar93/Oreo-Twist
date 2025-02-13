import "./style.scss";
import { Server } from "./common/callServer";
import {
  Global,
  data,
  buttonImages,
  country,
  screen_button,
  countryCodes,
  errorMapping,
  languagedata,
} from "./common/global";
import { createUser, saveClick, saveCountry } from "./backend";
import { isMobile, isMobileOnly } from "mobile-device-detect";
let titlePostfix = 1;
let coinPostFix = 1;
let cookietwistPostfix = 1;
let congratsPostfix = 1;
let start_cookie_anim = false;
let errorTO = null;
const imageCount = 7;
let registerUserName;
let registerEmail;
let registerMobile;
let initPlayed = false;
let musicOn = false;

//local language detect"
let language = localStorage.getItem("language")
  ? localStorage.getItem("language")
  : "en";
data.language = language;

export const setUID = (v) => {
  v = JSON.parse(v);
  Global.gameKey = v["game_key"];
  Global.U_ID = v["uid"];
};

window.addEventListener("DOMContentLoaded", (event) => {
  const loader = document.querySelector(".loader");
  const percentageText = document.querySelector(".percentage");
  const content = document.querySelector(".container");

  let loadPercentage = 0;
  let loadedImages = 0;

  const images = document.querySelectorAll("img");
  const bgElements = document.querySelectorAll(".data-bg");
  const totalImages = images.length + bgElements.length;

  images.forEach((img) => {
    if (img.complete) {
      loadedImages++;
      updatePercentage();
    } else {
      img.addEventListener("load", () => {
        loadedImages++;
        updatePercentage();
      });
      img.addEventListener("error", () => {
        loadedImages++;
        updatePercentage();
      });
    }
  });

  function updatePercentage() {
    loadPercentage = Math.floor((loadedImages / totalImages) * 100);
    percentageText.textContent = `${loadPercentage}%`;

    if (loadedImages === totalImages) {
      setTimeout(() => {
        loader.classList.add("hidden");
        showhome();
      }, 500);
    }
  }
  bgElements.forEach((el) => {
    const bgUrl = window.getComputedStyle(el).backgroundImage;
    if (bgUrl && bgUrl !== "none") {
      const img = new Image();
      img.src = bgUrl.replace(/url\(["']?(.*?)["']?\)/, "$1");
      img.onload = img.onerror = () => {
        loadedImages++;
        updatePercentage();
      };
    } else {
      loadedImages++;
      updatePercentage();
    }
  });
});

window.onload = () => {
  Global.serverObj = new Server();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let utm_source = urlParams.get("utm_source");
  createUser(utm_source);
  activatePage();
  animatebgEle();
};
const activatePage = () => {
  activateelements();
  activateAnimation();
};
const attachEventListeners = () => {
  document.querySelectorAll(".tc_trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      document.querySelector("#terms_sec").classList.add("active");
    });
  });

  const closeButton = document.querySelector(".termsClose");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      document.querySelector("#terms_sec").classList.remove("active");
    });
  }
};

const activateelements = () => {
  let languageToggle = document.getElementById("language");
  let countryEle = document.querySelector(".country-select");
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

  let proceedbtn_Ele = document.querySelector(".proceedbtn");
  let letsgobtn_Ele = document.querySelector(".letsgo");
  let nextbtn_Ele = document.querySelector(".nextbtn");
  let submit_activebtnEle = document.querySelector(".submit-active");
  let submit_inactivebtnEle = document.querySelector(".submit-inactive");
  let backbtn_Ele = document.querySelector(".backbtn");
  let completeRecipe_Ele = document.querySelector(".upload");
  let TornRecipe_Ele = document.querySelector(".torn-top");
  let UploadImg_Ele = document.querySelector(".image-upload");
  let UploadedImg_Ele = document.querySelector(".image-uploaded");
  let discoverImg_Ele = document.querySelector(".discoverimg");
  let registerImg_Ele = document.querySelector(".registerimg");

  let age_checkBtnEle = document.querySelector(".agecheck");
  let tc_checkBtnEle = document.querySelector(".tccheck");
  let promotion_checkEle = document.querySelector(".promotioncheck");
  let uploadinput = document.getElementById("upload_input");
  let volumebtnEle = document.querySelector(".audio");
  let volumetoggle = document.querySelector(".audio-off");
  let leftEle = document.querySelector(".leftarrow");
  let rightEle = document.querySelector(".rightarrow");
  let leftEleImg = document.querySelector(".leftimg");
  let rightEleImg = document.querySelector(".rightimg");

  // showhome();

  // privacy_Ele.forEach((trigger) => {
  //   trigger.addEventListener("click", () => {
  //     location.href = `./privacy-policy/${language}`;
  //   });
  // });
  attachEventListeners();
  document.querySelectorAll(".tc_trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      document.querySelector("#terms_sec").classList.add("active");
    });
  });
  document.querySelector(".termsClose").addEventListener("click", () => {
    document.querySelector("#terms_sec").classList.remove("active");
  });

  volumebtnEle.addEventListener("click", () => {
    updateBGMusic();
  });

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
  age_checkBtnEle.addEventListener("click", function () {
    data.isage_check = !data.isage_check;
    document.getElementById("age_checked").classList.toggle("active");
  });
  tc_checkBtnEle.addEventListener("click", function () {
    data.istc_check = !data.istc_check;
    document.getElementById("tc_checked").classList.toggle("active");
  });
  promotion_checkEle.addEventListener("click", function () {
    data.ispromotion_check = !data.ispromotion_check;
    document.getElementById("promotion_checked").classList.toggle("active");
  });

  uploadinput.addEventListener("change", function () {
    document
      .querySelector(`.${screen_button[data.curr_screen][data.isupload]}`)
      .classList.remove("active");
    data.isupload = "uploaded";
    document
      .querySelector(`.${screen_button[data.curr_screen][data.isupload]}`)
      .classList.add("active");
    if (data.country == "ksa") {
      document
        .querySelector(".upload-recipe .image-upload")
        .classList.remove("active");
      document
        .querySelector(".upload-recipe .image-uploaded")
        .classList.add("active");
    } else {
      document
        .querySelector(".upload-recipe .upload")
        .classList.remove("active");
      document
        .querySelector(".upload-recipe .torn-bottom")
        .classList.add("active");
      document
        .querySelector(".upload-recipe .torn-top")
        .classList.add("active");
    }
  });

  document.querySelector("body").addEventListener("mousedown", () => {
    if (!initPlayed) {
      initPlayed = true;
      document.querySelector("#BGMusic").play();
      updateBGMusic();
    }
  });
  //DOM Elements Functions
  const selectCountry = (e) => {
    data.country = country[e.target.value];
    document.querySelector(".code").innerHTML = countryCodes[data.country];
    if (data.country == "ksa") {
      document.querySelector(".image-upload").classList.add("active");
    } else {
      document.querySelector(".upload").classList.add("active");
    }
  };

  //checks screen and decides to active the button for next screen
  // and deactive current screen
  function btnclick(ele) {
    switch (data.curr_screen) {
      case "screen_one":
        if (proceedFromCountrySelection()) {
          saveCountry();
          saveClick("proceedClick");
          setTerms();
          screen_oneEle.classList.remove("active");
          screen_twoEle.classList.add("active");
          data.curr_screen = "screen_two";
          data.prev_screen = "screen_one";
          screenbtnChange();
        }

        break;

      case "screen_two":
        saveClick("letsgoClick");
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
          saveClick("nextClick");
          title_bgEle.classList.remove("active");
          start_cookie_anim = true;
          reveal_textEle.classList.remove("active");
          data.iscookieanim = true;
          setTimeout(() => {
            register_textEle.classList.add("active");
            discover_textEle.classList.add("active");
            leftEle.classList.add("active");
            rightEle.classList.add("active");
          }, 3000);
          document
            .querySelector(`.${screen_button[data.curr_screen]}`)
            .classList.remove("active");
        }
        break;

      case "screen_four":
        data.isformsubmit = validateformsubmit();
        if (data.isformsubmit && !data.formsubmitted) {
          document.querySelector(".loader").classList.remove("hidden");
          document.querySelector(".percentage").textContent = "";
          document.querySelector(".loader").style.backgroundColor =
            "transparent";
          onRegisterSubmit();
        }

        break;

      case "screen_five":
        if (data.isupload == "uploaded" && !data.imageuploaded) {
          proceedFromReceiptUpload(true);
        }
        break;
      case "screen_six":
        title_scr.classList.remove("up");
        title_bgEle.classList.add("active");
        screen_sixEle.classList.remove("active");
        screen_threeEle.classList.add("active");
        data.curr_screen = "screen_three";
        data.prev_screen = "screen_six";
        data.prev_button = screen_button[data.prev_screen];
        document
          .querySelector(`.${data.prev_button}`)
          .classList.remove("active");
        data.gameTry += 1;
        reset();
        if (data.country == "ksa") {
          document.querySelector(".image-upload").classList.add("active");
        } else {
          document.querySelector(".upload").classList.add("active");
        }
        saveClick("backToHomeClick");
        break;
    }
  }

  const reset = () => {
    data.isupload = "upload";
    data.isformsubmit = false;
    data.isage_check = false;
    data.istc_check = false;
    data.ispromotion_check = false;
    data.formsubmitted = false;
    data.imageuploaded = false;
    document.querySelector(".register_content #name").value = "";
    document.querySelector(".register_content #email").value = "";
    document.querySelector(".register_content #mobile").value = "";
    document.getElementById("age_checked").classList.remove("active");
    document.getElementById("tc_checked").classList.remove("active");
    document.getElementById("promotion_checked").classList.remove("active");
    document.querySelector(".image-upload").classList.remove("active");
    document.querySelector(".upload").classList.remove("active");
    document.querySelector(".torn-bottom").classList.remove("active");
    document.querySelector(".torn-top").classList.remove("active");
    document.querySelector(".image-uploaded").classList.remove("active");
  };

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

  const LanguageChange = () => {
    letsgobtn_Ele.src = buttonImages[data.language]["letsgo"];
    nextbtn_Ele.src = buttonImages[data.language]["nextbtn"];
    submit_activebtnEle.src = buttonImages[data.language]["submitActive"];
    submit_inactivebtnEle.src = buttonImages[data.language]["submitInactive"];
    backbtn_Ele.src = buttonImages[data.language]["backbtn"];
    proceedbtn_Ele.src = buttonImages[data.language]["proceedbtn"];
    completeRecipe_Ele.src = buttonImages[data.language]["completeRecipe"];
    TornRecipe_Ele.src = buttonImages[data.language]["TornRecipe"];
    UploadImg_Ele.src = buttonImages[data.language]["UploadImg"];
    UploadedImg_Ele.src = buttonImages[data.language]["UploadedImg"];
    registerImg_Ele.src = buttonImages[data.language]["RegistertowinImg"];
    discoverImg_Ele.src = buttonImages[data.language]["DiscoverRecipeImg"];
    leftEleImg.src = buttonImages[data.language]["leftarrowImg"];
    rightEleImg.src = buttonImages[data.language]["RightarrowImg"];
    changelanguageText();
    saveClick(languagedata[data.language]);
  };

  const changelanguageText = () => {
    if (data.language == "en") {
      document.querySelector(".country-select").classList.remove("ar");
      document.querySelector(".reveal_text").classList.remove("ar");
      document.querySelector(".country-select option:nth-child(1)").innerHTML =
        "Select a country";
      document.querySelector(".country-select option:nth-child(2)").innerHTML =
        "Bahrain";
      document.querySelector(".country-select option:nth-child(3)").innerHTML =
        "Kuwait";
      document.querySelector(".country-select option:nth-child(4)").innerHTML =
        "Oman";
      document.querySelector(".country-select option:nth-child(5)").innerHTML =
        "UAE";
      document.querySelector(".country-select option:nth-child(6)").innerHTML =
        "Iraq";
      document.querySelector(".country-select option:nth-child(7)").innerHTML =
        "Saudi Arabia";
      document.querySelector(".reveal_text").innerHTML =
        "Twist the <br /><span>oreo cookie</span> <br />to reveal your options";
      document.querySelector(".reveal_text span").classList.remove("ar");
      document.querySelector(".register_content .name").innerHTML = "Name";
      document.querySelector(".register_content .email").innerHTML = "Email";
      document.querySelector(".register_content .mobile").innerHTML =
        "Phone Number";

      document.querySelectorAll(".register_content .label").forEach((ele) => {
        ele.style.direction = "ltr";
        ele.style.paddingright = `min(3vw,1.5vh)`;
        ele.classList.remove("ar");
      });
      document.getElementById("name").style.direction = "ltr";
      document.getElementById("name").classList.remove("ar");

      document.querySelector(".age_check").classList.remove("ar");
      document.querySelector(".tc_check").classList.remove("ar");
      document.querySelector(".promotion_check").classList.remove("ar");
      document.querySelector(".age_check .label").classList.remove("ar");
      document.querySelector(".tc_check .label").classList.remove("ar");
      document.querySelector(".promotion_check .label").classList.remove("ar");
      document.querySelector(".age_check .label").innerHTML =
        "I agree that I am above 13 years of age";
      document.querySelector(
        ".tc_check .label"
      ).innerHTML = `I accept the <u class="tc_trigger">T&C</u> and
                <u class="privacy_trigger">Privacy Notice</u> of Mondelez and
                consent to Mondelez using my personal information as stated in the
                <u class="tc_triggers">T&Cs</u> and
                <u class="privacy_trigger">Privacy Notice</u>.`;
      document.querySelector(
        ".promotion_check .label"
      ).innerHTML = `I would like to receive promotional communication from Mondelez
                about it's products and offers.`;
    } else {
      document.querySelector(".country-select").classList.add("ar");
      document.querySelector(".reveal_text").classList.add("ar");

      document.querySelector(".country-select option:nth-child(1)").innerHTML =
        "اختر البلد";
      document.querySelector(".country-select option:nth-child(2)").innerHTML =
        "البحرين";
      document.querySelector(".country-select option:nth-child(3)").innerHTML =
        "الكويت";
      document.querySelector(".country-select option:nth-child(4)").innerHTML =
        "سلطنة عمان";
      document.querySelector(".country-select option:nth-child(5)").innerHTML =
        "الإمارات العربية المتحدة";
      document.querySelector(".country-select option:nth-child(6)").innerHTML =
        "العراق";
      document.querySelector(".country-select option:nth-child(7)").innerHTML =
        "المملكة العربية السعودية";
      document.querySelector(".reveal_text").innerHTML =
        "فك<br/><span>بسكويت أوريو</span> <br />لاكتشاف خياراتك";
      document.querySelector(".reveal_text span").classList.add("ar");
      document.querySelector(".register_content .name").innerHTML = "الاسم";
      document.querySelector(".register_content .email").innerHTML =
        "البريد الإلكتروني";
      document.querySelector(".register_content .mobile").innerHTML =
        "رقم الجوال";
      document.querySelectorAll(".register_content .label").forEach((ele) => {
        ele.style.paddingright = `min(3vw,1.5vh)`;
        ele.style.direction = "rtl";
        ele.classList.add("ar");
      });
      document.getElementById("name").style.direction = "rtl";
      document.getElementById("name").classList.add("ar");

      document.querySelector(".age_check").classList.add("ar");
      document.querySelector(".tc_check").classList.add("ar");
      document.querySelector(".promotion_check").classList.add("ar");
      document.querySelector(".age_check .label").classList.add("ar");
      document.querySelector(".tc_check .label").classList.add("ar");
      document.querySelector(".promotion_check .label").classList.add("ar");
      document.querySelector(".age_check .label").innerHTML =
        "أوافق على أنني فوق 13 عامًا";
      document.querySelector(
        ".tc_check .label"
      ).innerHTML = `أوافق على<u class="tc_trigger">الشروط والأحكام</u>
                <u class="privacy_trigger">إشعار الخصوصية</u> وإشعار الخصوصية لشركة موندليز وأوافق على أن تستخدم موندليز معلوماتي الشخصية كما هو مبين في 
                <u class="tc_triggers">شروط الاستخدام</u>
                <u class="privacy_trigger">إشعار الخصوصية</u>.`;
      document.querySelector(
        ".promotion_check .label"
      ).innerHTML = `أود أن أستقبل الاتصالات الترويجية من موندليز حول منتجاتها وعروضها`;
    }
  };

  const proceedFromReceiptUpload = async (doUpload) => {
    if (doUpload) {
      await uploadFile();
    }
  };
  async function uploadFile() {
    const fileInput = document.getElementById("upload_input");
    const file = fileInput.files[0];

    if (!file) {
      return;
    }
    if (file && !file.type.startsWith("image/")) {
      showError(
        data.language == "en"
          ? errorMapping.error10.en
          : errorMapping.error10.ar
      );
      fileInput.value = "";
      resetfileupload();
      return;
    }
    document.querySelector(".loader").classList.remove("hidden");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("gameTry", data.gameTry);
    formData.append("uniqID", Global.U_ID);

    fetch(Global.URL_UP, {
      method: "POST",
      body: formData,
    }).then((response) => {
      // console.log(response);
      if (response.ok) {
        saveClick("submitClick");
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
        data.imageuploaded = true;
        fileInput.value = "";
        document.querySelector(".loader").classList.add("hidden");
      } else {
        showError(
          data.language == "en"
            ? errorMapping.error10.en
            : errorMapping.error10.ar
        );
        fileInput.value = "";
        resetfileupload();
        return;
      }
    });
  }

  const resetfileupload = () => {
    document
      .querySelector(`.${screen_button[data.curr_screen][data.isupload]}`)
      .classList.remove("active");
    data.isupload = "upload";
    document
      .querySelector(`.${screen_button[data.curr_screen][data.isupload]}`)
      .classList.add("active");
    if (data.country == "ksa") {
      document
        .querySelector(".upload-recipe .image-upload")
        .classList.add("active");
      document
        .querySelector(".upload-recipe .image-uploaded")
        .classList.remove("active");
    } else {
      document.querySelector(".upload-recipe .upload").classList.add("active");
      document
        .querySelector(".upload-recipe .torn-bottom")
        .classList.remove("active");
      document
        .querySelector(".upload-recipe .torn-top")
        .classList.remove("active");
    }
  };

  //languagetoggle button click event
  languageToggle.addEventListener("click", () => {
    framesupdate(false);
    languageToggleFunc();
  });

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
        `cookie-twist-${
          cookietwistPostfix < 10 ? "0" : ""
        }${cookietwistPostfix}`
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

    LanguageChange();
    setTerms();
  };

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
  const validateformsubmit = () => {
    let isValid = true;
    registerUserName = document
      .querySelector(".register_content #name")
      .value.trim();
    registerEmail = document
      .querySelector(".register_content #email")
      .value.trim();
    registerMobile = document
      .querySelector(".register_content #mobile")
      .value.trim();

    if (registerUserName.length == 0) {
      document
        .querySelector(".register_content #name")
        .parentElement.classList.add("error");
      isValid = false;
      showError(
        data.language == "en"
          ? "Please enter a valid name"
          : "الرجاء إدخال اسم صالح"
      );
      return false;
    } else if (registerUserName.length != 0) {
      document
        .querySelector(".register_content #name")
        .parentElement.classList.remove("error");
    }
    if (registerEmail.length == 0) {
      document
        .querySelector(".register_content #email")
        .parentElement.classList.add("error");
      isValid = false;
      showError(
        data.language == "en"
          ? "Please enter a valid email"
          : "الرجاء إدخال بريد إلكتروني صالح"
      );
      return false;
    }
    if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(registerEmail)) {
      document
        .querySelector(".register_content #email")
        .parentElement.classList.add("error");
      isValid = false;
      showError(
        data.language == "en"
          ? "Please enter a valid email"
          : "الرجاء إدخال بريد إلكتروني صالح"
      );
      return false;
    } else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(registerEmail)
    ) {
      document
        .querySelector(".register_content #email")
        .parentElement.classList.remove("error");
    }

    if (registerMobile.length == 0 || isNaN(registerMobile)) {
      document
        .querySelector(".register_content #mobile")
        .parentElement.classList.add("error");
      isValid = false;
      showError(
        data.language == "en"
          ? "Please enter a valid mobile"
          : "الرجاء إدخال رقم جوال صالح"
      );
      return false;
    } else if (registerMobile.length < 7 || registerMobile.length > 11) {
      // console.log("limit worng");
      document
        .querySelector(".register_content #mobile")
        .parentElement.classList.add("error");
      isValid = false;
      showError(
        data.language == "en"
          ? "Please enter a valid mobile"
          : "الرجاء إدخال رقم جوال صالح"
      );
      return false;
    } else {
      document
        .querySelector(".register_content #mobile")
        .parentElement.classList.remove("error");
    }

    if (!data.isage_check) {
      isValid = false;
      showError(
        data.language == "en"
          ? "Please verify your age is above 13."
          : "يرجى التحقق من أن عمرك أكبر من 13 عامًا."
      );
      return false;
    }
    if (!data.istc_check) {
      isValid = false;
      showError(
        data.language == "en"
          ? "Please accept T&C and Privacy Notice."
          : "يرجى قبول الشروط والأحكام وإشعار الخصوصية."
      );
      return false;
    }
    return true;
  };

  const showError = (errorInfo) => {
    errorInfo_Ele.innerHTML = errorInfo;
    errorInfo_Ele.classList.add("active");
    errorTO && clearTimeout(errorTO);
    errorTO = setTimeout(() => {
      errorInfo_Ele.classList.remove("active");
      const ele = document.querySelector(".error");
      // console.log(ele);
      ele?.classList.remove("error");
    }, 2000);
  };

  const updateBGMusic = () => {
    musicOn = !musicOn;
    if (musicOn) {
      document.querySelector("#BGMusic").play();
      volumetoggle.classList.remove("active");
    } else {
      document.querySelector("#BGMusic").pause();
      volumetoggle.classList.add("active");
    }
  };

  const onRegisterSubmit = () => {
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    let utm_term = urlParams.get("utm_term");
    let utm_medium = urlParams.get("utm_medium");
    let utm_source = urlParams.get("utm_source");
    let utm_campaign = urlParams.get("utm_campaign");
    let utm_content = urlParams.get("utm_content");

    let tempData = null;
    var ga_cid = "1844306653.1689247851";
    ga_cid = getCookie2("_ga");
    // console.log(ga_cid);
    // console.log(document.cookie);
    if (typeof ga_cid === "undefined" || ga_cid === null) {
      ga_cid = "1844306653.1689247851";
    }

    window.htk = "";
    window.htk = getCookie("hubspotutk");
    Global.serverObj.send(Global.URL_WS, onApiResponse, null, {
      saveType: "registerUser",
      utm_term: utm_term,
      utm_campaign: utm_campaign,
      utm_medium: utm_medium,
      utm_source: utm_source,
      utm_content: utm_content,
      ga_cid: ga_cid,
      htk: window.htk,
      checkbox: data.ispromotion_check ? "true" : "false",
      name: registerUserName,
      email: registerEmail,
      country: data.country,
      mobile: countryCodes[data.country] + String(registerMobile),
      uniqID: Global.U_ID,
      gameTry: data.gameTry,
    });
  };
  const onApiResponse = (v) => {
    v = JSON.parse(v);
    if (v["code"] == 200) {
      document.querySelector(".loader").classList.add("hidden");
      data.formsubmitted = true;
      saveClick("submitClick");
      title_scr.classList.add("up");
      title_bgEle.classList.remove("active");
      screen_fourEle.classList.remove("active");
      screen_fiveEle.classList.add("active");
      data.curr_screen = "screen_five";
      data.prev_screen = "screen_four";
      data.prev_button = screen_button[data.prev_screen];
      document.querySelector(`.${data.prev_button}`).classList.remove("active");
      document
        .querySelector(`.${screen_button[data.curr_screen][data.isupload]}`)
        .classList.add("active");
    }
  };
};
const showhome = () => {
  document.querySelector(".header").classList.add("active");
  document.querySelector(".screen_one").classList.add("active");
  document.querySelector(".button-section").classList.add("active");
  // document.querySelector(".screen_six").classList.add("active");
};
document.querySelectorAll(".privacy_trigger").forEach(function (noticeButton) {
  noticeButton.addEventListener("click", function (event) {
    window.open(`https://oreostayplayful.com/privacy-policy/en/`, "_blank"); // Replace with your desired URL
  });
});

//it fetches html based on country and language
const setTerms = () => {
  if (data.language == "ar") {
    document.querySelector("#terms_sec").classList.add("ar");
  } else {
    document.querySelector("#terms_sec").classList.remove("ar");
  }

  fetch(`images/common/${data.country}_${data.language}.html`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((html) => {
      document.querySelector("#terms_sec .content").innerHTML = "";
      document.querySelector("#terms_sec .content").innerHTML = html;
      attachEventListeners();
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
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
    document.getElementById("imageContainer").appendChild(img);
  }
};

//activateAnimation event
const activateAnimation = () => {
  setInterval(framesupdate.bind(this, true), 60);
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

function getCookie(cookie) {
  return document.cookie.split(";").reduce(function (prev, c) {
    var arr = c.split("=");
    return arr[0].trim() === cookie ? arr[1] : prev;
  }, undefined);
}

function getCookie2(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  // console.log(name);
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
