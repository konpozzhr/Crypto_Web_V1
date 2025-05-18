/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// // @mui material components
// import Avatar from "@mui/material/Avatar";
// import { styled } from "@mui/material/styles";

// export default styled(Avatar)(({ theme, ownerState }) => {
//   const { palette, functions, typography, boxShadows } = theme;
//   const { shadow, bgColor, size } = ownerState;

//   const { gradients, transparent } = palette;
//   const { pxToRem, linearGradient } = functions;
//   const { size: fontSize, fontWeightBold } = typography;

//   // backgroundImage value
//   const backgroundValue =
//     bgColor === "transparent"
//       ? transparent.main
//       : linearGradient(gradients[bgColor].main, gradients[bgColor].state);

//   // size value
//   let sizeValue;

//   switch (size) {
//     case "xs":
//       sizeValue = {
//         width: pxToRem(24),
//         height: pxToRem(24),
//         fontSize: fontSize.xs,
//       };
//       break;
//     case "sm":
//       sizeValue = {
//         width: pxToRem(36),
//         height: pxToRem(36),
//         fontSize: fontSize.sm,
//       };
//       break;
//     case "lg":
//       sizeValue = {
//         width: pxToRem(58),
//         height: pxToRem(58),
//         fontSize: fontSize.sm,
//       };
//       break;
//     case "xl":
//       sizeValue = {
//         width: pxToRem(74),
//         height: pxToRem(74),
//         fontSize: fontSize.md,
//       };
//       break;
//     case "xxl":
//       sizeValue = {
//         width: pxToRem(110),
//         height: pxToRem(110),
//         fontSize: fontSize.md,
//       };
//       break;
//     default: {
//       sizeValue = {
//         width: pxToRem(48),
//         height: pxToRem(48),
//         fontSize: fontSize.md,
//       };
//     }
//   }

//   return {
//     background: backgroundValue,
//     fontWeight: fontWeightBold,
//     boxShadow: boxShadows[shadow],
//     ...sizeValue,
//   };
// });



// ==========================================================================================


/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================
*/

// @mui material components
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

export default styled(Avatar)(({ theme, ownerState }) => {
  const { palette, functions, typography, boxShadows } = theme;
  const { shadow = "none", bgColor = "transparent", size } = ownerState || {};

  const { gradients = {}, transparent } = palette || {};
  const { pxToRem, linearGradient } = functions || {};
  const { size: fontSize, fontWeightBold } = typography || {};

  // Safe backgroundImage value
  let backgroundValue;
  
  try {
    backgroundValue = bgColor === "transparent"
      ? transparent?.main || "transparent"
      : linearGradient(
          gradients[bgColor]?.main || "#000000",
          gradients[bgColor]?.state || "#000000"
        );
  } catch (error) {
    console.warn(`Failed to create background for bgColor: ${bgColor}`, error);
    backgroundValue = "transparent";
  }

  // Safe size value
  const sizeDefaults = {
    width: pxToRem?.(48) || "48px",
    height: pxToRem?.(48) || "48px",
    fontSize: fontSize?.md || "1rem",
  };

  let sizeValue = { ...sizeDefaults };

  if (size) {
    switch (size) {
      case "xs":
        sizeValue = {
          width: pxToRem?.(24) || "24px",
          height: pxToRem?.(24) || "24px",
          fontSize: fontSize?.xs || "0.75rem",
        };
        break;
      case "sm":
        sizeValue = {
          width: pxToRem?.(36) || "36px",
          height: pxToRem?.(36) || "36px",
          fontSize: fontSize?.sm || "0.875rem",
        };
        break;
      case "lg":
        sizeValue = {
          width: pxToRem?.(58) || "58px",
          height: pxToRem?.(58) || "58px",
          fontSize: fontSize?.sm || "0.875rem",
        };
        break;
      case "xl":
        sizeValue = {
          width: pxToRem?.(74) || "74px",
          height: pxToRem?.(74) || "74px",
          fontSize: fontSize?.md || "1rem",
        };
        break;
      case "xxl":
        sizeValue = {
          width: pxToRem?.(110) || "110px",
          height: pxToRem?.(110) || "110px",
          fontSize: fontSize?.md || "1rem",
        };
        break;
    }
  }

  return {
    background: backgroundValue,
    fontWeight: fontWeightBold || "bold",
    boxShadow: boxShadows?.[shadow] || "none",
    ...sizeValue,
  };
});