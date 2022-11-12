export const size = {
  TabletIpadsMin: "768px",
  TabletIpadsMax: "1024px",
  TabletsMobilesMin: "481px",
  TabletsMobilesMax: "767px",
  SmallMobileMin: "320px",
  SmallMobileMax: "480px",
  LaptopsDesktopMin: "1025px",
  LaptopsDesktopMax: "1280px",
};

export const devices = {
  //tabletsIpads
  tabletsAndIpads: `(min-width: ${size.TabletIpadsMin}) and (max-width: ${size.TabletIpadsMax})`,
  tabletsAndMobiles: `(min-width: ${size.TabletsMobilesMin}) and (max-width: ${size.TabletsMobilesMax})`,
  smallMobiles: `(min-width: ${size.SmallMobileMin}) and (max-width: ${size.SmallMobileMax})`,
  bigLaptopsAndDesktops: `(min-width: ${size.LaptopsDesktopMin}) and (max-width: ${size.LaptopsDesktopMax})`,
};

// @media (min-width: 1281px) {

//     /* CSS */

//   }

//   /*
//     ##Device = Laptops, Desktops
//     ##Screen = B/w 1025px to 1280px
//   */

//   @media (min-width: 1025px) and (max-width: 1280px) {

//     /* CSS */

//   }

//   /*
//     ##Device = Tablets, Ipads (portrait)
//     ##Screen = B/w 768px to 1024px
//   */

//   @media (min-width: 768px) and (max-width: 1024px) {

//     /* CSS */

//   }

//   /*
//     ##Device = Tablets, Ipads (landscape)
//     ##Screen = B/w 768px to 1024px
//   */

//   @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

//     /* CSS */

//   }

//   /*
//     ##Device = Low Resolution Tablets, Mobiles (Landscape)
//     ##Screen = B/w 481px to 767px
//   */

//   @media (min-width: 481px) and (max-width: 767px) {

//     /* CSS */

//   }

//   /*
//     ##Device = Most of the Smartphones Mobiles (Portrait)
//     ##Screen = B/w 320px to 479px
//   */

//   @media (min-width: 320px) and (max-width: 480px) {

//     /* CSS */

//   }
