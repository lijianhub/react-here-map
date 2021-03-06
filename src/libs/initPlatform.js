export default options => {
  const { app_id, app_code } = options;
  if (!app_id || !app_code) {
    throw new Error("Options must include appId and appCode");
  }
  if (typeof H === "undefined" || !H.service) {
    throw new Error("Here Map JavaScripts is not loaded.");
  }
  return new H.service.Platform(options);
};
