let Global = {
  URL_CREATE:
    "https://www.newsfeedsmartapp.com/oreoTwistRamadan/api/createUser.php",
  URL_VUPDATE:
    "https://www.newsfeedsmartapp.com/oreoTwistRamadan/api/valueUpdator.php",
  URL_WS:
    "https://www.newsfeedsmartapp.com/oreoTwistRamadan/api/webservice.php",
  URL_UP: "https://www.newsfeedsmartapp.com/oreoTwistRamadan/api/upload.php",
  gameKey: null,
  U_ID: null,
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
  isupload: "upload",
  isformsubmit: false,
  iscookieanim: false,
  isage_check: false,
  istc_check: false,
  ispromotion_check: false,
  gameTry: 1,
  formsubmitted: false,
  imageuploaded: false,
};

const buttonImages = {
  en: {
    letsgo: "images/en/Let's-go-button.png",
    nextbtn: "images/en/Next-button.png",
    submitActive: "images/en/Submit-button_Active.png",
    submitInactive: "images/en/Submit-button_Inactive.png",
    backbtn: "images/en/Back-button.png",
    proceedbtn: "images/en/proceed.png",
    completeRecipe: "images/en/Complete-Receipt-with-text.png",
    TornRecipe: "images/en/Torn-receipt_Top-same-size.png",
    UploadImg: "images/en/Upload-oreo-pack-image.png",
    UploadedImg: "images/en/Uploaded-oreo-pack-image_Same-size.png",
    RegistertowinImg: "images/en/Register to win.png",
    DiscoverRecipeImg: "images/en/Discover-Recipes.png",
    leftarrowImg: "images/en/Left-arrow_Eng.png",
    RightarrowImg: "images/en/Right-arrow_Eng.png",
  },
  ar: {
    letsgo: "images/ar/Lets-go-button.png",
    nextbtn: "images/ar/Next-button.png",
    submitActive: "images/ar/Submit-button.png",
    submitInactive: "images/ar/Submit-button.png",
    backbtn: "images/ar/Back-button.png",
    proceedbtn: "images/ar/Proceed-button.png",
    completeRecipe: "images/ar/Complete-Receipt-with-text.png",
    TornRecipe: "images/ar/Torn-receipt_Top-same-size.png",
    UploadImg: "images/ar/Upload-oreo-pack-image.png",
    UploadedImg: "images/ar/Uploaded-oreo-pack-image_Same-size.png",
    RegistertowinImg: "images/ar/Register-to-win_A.png",
    DiscoverRecipeImg: "images/ar/Discover-Recipes_A.png",
    leftarrowImg: "images/ar/Left-arrow_Arabic.png",
    RightarrowImg: "images/ar/Right-arrow_Arabic.png",
  },
};

const country = {
  0: "bahrain",
  1: "kwt",
  2: "oman",
  3: "uae",
  4: "iraq",
  5: "ksa",
  6: "qatar",
};
const countryCodes = {
  bahrain: "+973",
  kwt: "+965",
  oman: "+968",
  uae: "+971",
  iraq: "+964",
  ksa: "+966",
  qatar: "+974",
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

const errorMapping = {
  error1: {
    en: "The language field is required.",
    ar: "حقل اللغة مطلوب.",
  },
  error2: {
    en: "The country field is required.",
    ar: "حقل البلد مطلوب.",
  },
  error3: {
    en: "The name field is required.",
    ar: "حقل الاسم مطلوب.",
  },
  error4: {
    en: "The email field is required.",
    ar: "حقل البريد الإلكتروني مطلوب.",
  },
  error5: {
    en: "The email field is not in valid format.",
    ar: "حقل البريد الإلكتروني ليس بالتنسيق الصحيح.",
  },
  error6: {
    en: "The mobile field is required.",
    ar: "حقل الهاتف المحمول مطلوب.",
  },
  error7: {
    en: "The country field is required.",
    ar: "حقل البلد مطلوب.",
  },
  error8: {
    en: "The uniqueCode field is required.",
    ar: "حقل الكود الفريد مطلوب.",
  },
  error9: {
    en: "The uniqueCode field is not in valid format.",
    ar: "حقل الكود الفريد ليس بتنسيق صالح.",
  },
  error10: {
    en: "Invalid",
    ar: "غير صالح",
  },
};
export {
  Global,
  data,
  buttonImages,
  country,
  screen_button,
  countryCodes,
  errorMapping,
};
