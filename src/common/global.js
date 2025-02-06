let Global = {
  URL_CREATE:
    "https://www.newsfeedsmartapp.com/demo/kartik/OreoTwist/api/createUser.php",
  URL_VUPDATE:
    "https://www.newsfeedsmartapp.com/demo/kartik/OreoTwist/api/valueUpdator.php",
  URL_WS:
    "https://www.newsfeedsmartapp.com/demo/kartik/OreoTwist/api/webservice.php",
  URL_UP:
    "https://www.newsfeedsmartapp.com/demo/kartik/OreoTwist/api/upload.php",
  gameKey: null, //"KPol0QyYWhp3OfO3t",
  U_ID: null, //371146067,
  isMobile: false,
};

const data = {
  language: "",
  curr_screen: "screen_one",
  prev_screen: "",
  prev_button: "",
  country: "",
  proceedbtnclick: 0,
  letsgobtnclick: 0,
  nextbtnclick: 0,
  submitbtnclick: 0,
  registerbtnclick: 0,
  recipebtnclick: 0,
  isupload: "uploaded",
  issubmit: true,
  iscookieanim: false,
};

const buttonImages = {
  en: {
    letsgo: "images/en/Let's-go-button.png",
    nextbtn: "images/en/Next-button.png",
    submitActive: "images/en/Submit-button_Active.png",
    submitInactive: "images/en/Submit-button_Inactive.png",
    backbtn: "images/en/Back-button.png",
    proceedbtn: "images/en/proceed.png",
  },
  ar: {
    letsgo: "images/ar/Let's-go-button.png",
    nextbtn: "images/ar/Next-button.png",
    submitActive: "images/ar/Submit-button_Active.png",
    submitInactive: "images/ar/Submit-button_Inactive.png",
    backbtn: "images/ar/Back-button.png",
    proceedbtn: "images/ar/proceed.png",
  },
};

const country = {
  0: "UAE",
  1: "KSA",
  2: "KWT",
  3: "BAH",
  4: "OMN",
  5: "IRQ",
};

const screen_button = {
  screen_one: "proceedbtn",
  screen_two: "letsgo",
  screen_three: "nextbtn",
  screen_four: "submit-active",
  screen_five: {
    upload: "submit-inactive",
    uploaded: "submit-active",
  },
  screen_six: "backbtn",
};
export { Global, data, buttonImages, country, screen_button };
