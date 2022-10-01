const size = {
  loginMobile: "400px",
  postMobile: "450px",
  rezMobile: "500px",
  mobile: "670px",
  mypageTablet: "750px",
  sidebarTablet: "890px",
  tablet: "940px",
};

const theme = {
  loginMobile: `(max-width: ${size.loginMobile})`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  mypageTablet: `(max-width: ${size.mypageTablet})`,
  postMobile: `(max-width: ${size.postMobile})`,
  rezMobile: `(max-width: ${size.rezMobile})`,
  sidebarTablet: `(max-width: ${size.sidebarTablet})`,
};

export default theme;
