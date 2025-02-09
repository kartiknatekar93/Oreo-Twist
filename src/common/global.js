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
  isupload:"uploaded",
  isformsubmit: true,
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
    completeRecipe:"images/en/Complete-Receipt-with-text.png",
    TornRecipe:"images/en/Torn-receipt_Top-same-size.png",
    UploadImg:"images/en/Upload-oreo-pack-image.png",
    UploadedImg:"images/en/Uploaded-oreo-pack-image_Same-size.png"
  },
  ar: {
    letsgo: "images/ar/Lets-go-button.png",
    nextbtn: "images/ar/Next-button.png",
    submitActive: "images/ar/Submit-button.png",
    submitInactive: "images/ar/Submit-button.png",
    backbtn: "images/ar/Back-button.png",
    proceedbtn: "images/ar/Proceed-button.png",
    completeRecipe:"images/ar/Complete-Receipt-with-text.png",
    TornRecipe:"images/ar/Torn-receipt_Top-same-size.png",
    UploadImg:"images/ar/Upload-oreo-pack-image.png",
    UploadedImg:"images/ar/Uploaded-oreo-pack-image_Same-size.png"
  },
};

const country = {
  0: "bahrain",
  1: "kwt",
  2: "oman",
  3: "uae",
  4: "iraq",
  5: "ksa",
};
const countryCodes = {
  bahrain: "+973",
  kwt: "+965",
  oman: "+968",
  uae: "+971",
  iraq: "+964",
  ksa: "+966",
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
export { Global, data, buttonImages, country, screen_button, countryCodes };
