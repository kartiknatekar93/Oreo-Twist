import {
  Global,
  data,
  buttonImages,
  country,
  screen_button,
  countryCodes,
} from "./common/global";
import { isMobile, isMobileOnly } from "mobile-device-detect";
import { setUID } from "./main";

const createUser = (utm_source) => {
  Global.serverObj.send(Global.URL_CREATE, setUID, null, {
    fresh: true,
    language: data.language,
    utm_source: utm_source,
    device: isMobile ? "mobile" : "web",
  });
};
const saveCountry = () => {
  Global.serverObj.send(Global.URL_WS, null, null, {
    saveType: "saveCountry",
    country: data.country,
    uniqID: Global.U_ID,
  });
};

const saveClick = (clickname) => {
  // console.log(clickname);
  Global.serverObj.send(Global.URL_VUPDATE, null, null, {
    saveType: clickname,
    uniqID: Global.U_ID,
  });
};

export { createUser, saveCountry, saveClick };
