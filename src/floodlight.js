const URL = "https://oreostayplayful.com/";

function floodlightLanded(language) {
  gtag("event", "conversion", {
    allow_custom_scripts: true,
    u1: URL,
    u21: language,
    send_to: "DC-9227341/oreo-002/inter0+standard",
  });
  document.getElementById("nscript").innerHTML =
    '<img src="https://ad.doubleclick.net/ddm/activity/src=9227341;type=oreo-002;cat=inter0;u1=' +
    URL +
    ";u21=" +
    language +
    ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>';
}
function floodlightProceed(language, country) {
  gtag("event", "conversion", {
    allow_custom_scripts: true,
    u1: URL,
    u21: language,
    u23: country,
    send_to: "DC-9227341/oreo-002/engag0+standard",
  });

  document.getElementById("nscript").innerHTML =
    '<img src="https://ad.doubleclick.net/ddm/activity/src=9227341;type=oreo-002;cat=engag0;u1=' +
    URL +
    ";u21=" +
    language +
    ";u23=" +
    country +
    ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>';
}
function floodlightsubmitRegistration(language, country) {
  gtag("event", "conversion", {
    allow_custom_scripts: true,
    u1: URL,
    u21: language,
    u23: country,
    send_to: "DC-9227341/oreo-002/engag002+standard",
  });

  document.getElementById("nscript").innerHTML =
    '<img src="https://ad.doubleclick.net/ddm/activity/src=9227341;type=oreo-002;cat=engag002;u1=' +
    URL +
    ";u21=" +
    language +
    ";u23=" +
    country +
    ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>';
}

function floodlightDiscover(language, country) {
  gtag("event", "conversion", {
    allow_custom_scripts: true,
    u1: URL,
    u21: language,
    u23: country,
    send_to: "DC-9227341/oreo-002/engag004+standard",
  });

  document.getElementById("nscript").innerHTML =
    '<img src="https://ad.doubleclick.net/ddm/activity/src=9227341;type=oreo-002;cat=engag004;u1=' +
    URL +
    ";u21=" +
    language +
    ";u23=" +
    country +
    ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>';
}
function floodlightletsgo(language, country) {
  gtag("event", "conversion", {
    allow_custom_scripts: true,
    u1: URL,
    u21: language,
    u23: country,
    send_to: "DC-9227341/oreo-002/engag00+standard",
  });

  document.getElementById("nscript").innerHTML =
    '<img src="https://ad.doubleclick.net/ddm/activity/src=9227341;type=oreo-002;cat=engag00;u1=' +
    URL +
    ";u21=" +
    language +
    ";u23=" +
    country +
    ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>';
}
function floodlightnext(language, country) {
  gtag("event", "conversion", {
    allow_custom_scripts: true,
    u1: URL,
    u21: language,
    u23: country,
    send_to: "DC-9227341/oreo-002/engag000+standard",
  });

  document.getElementById("nscript").innerHTML =
    '<img src="https://ad.doubleclick.net/ddm/activity/src=9227341;type=oreo-002;cat=engag000;u1=' +
    URL +
    ";u21=" +
    language +
    ";u23=" +
    country +
    ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>';
}
function floodlightregister(language, country) {
  gtag("event", "conversion", {
    allow_custom_scripts: true,
    u1: URL,
    u21: language,
    u23: country,
    send_to: "DC-9227341/oreo-002/engag001+standard",
  });

  document.getElementById("nscript").innerHTML =
    '<img src="https://ad.doubleclick.net/ddm/activity/src=9227341;type=oreo-002;cat=engag001;u1=' +
    URL +
    ";u21=" +
    language +
    ";u23=" +
    country +
    ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>';
}
function floodlightreceipt(language, country) {
  gtag("event", "conversion", {
    allow_custom_scripts: true,
    u1: URL,
    u21: language,
    u23: country,
    send_to: "DC-9227341/oreo-002/engag003+standard",
  });

  document.getElementById("nscript").innerHTML =
    '<img src="https://ad.doubleclick.net/ddm/activity/src=9227341;type=oreo-002;cat=engag003;u1=' +
    URL +
    ";u21=" +
    language +
    ";u23=" +
    country +
    ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>';
}
export {
  floodlightLanded,
  floodlightProceed,
  floodlightsubmitRegistration,
  floodlightDiscover,
  floodlightletsgo,
  floodlightnext,
  floodlightregister,
  floodlightreceipt,
};
