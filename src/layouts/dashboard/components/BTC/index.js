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

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rockethWite from "assets/images/illustrations/rocket-white.png";
import btc from "assets/images/illustrations/BTC_1.jpg"

import { Link } from "react-router-dom";


// function BTC() {
//   return (
//     <Card>
//       <SoftBox p={2}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} lg={6}>
//             <SoftBox display="flex" flexDirection="column" height="100%">
//               <SoftBox pt={1} mb={0.5}>
//                 <SoftTypography variant="body2" color="text" fontWeight="medium">
//                   What Is Bitcoin (BTC)?
//                 </SoftTypography>
//               </SoftBox>
//               <SoftTypography variant="h5" fontWeight="bold" gutterBottom>
//                 BTC Price $103,851.71
//               </SoftTypography>
//               <SoftBox mb={6}>
//                 <SoftTypography variant="body2" color="text">
//                   Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009....
//                 </SoftTypography>
//               </SoftBox>
              
//               <Link to="/btc/details" style={{ textDecoration: "none" }}>
//                 <SoftTypography
//                   component="span"
//                   variant="button"
//                   color="text"
//                   fontWeight="medium"
//                   sx={{
//                     mt: "auto",
//                     mr: "auto",
//                     display: "inline-flex",
//                     alignItems: "center",
//                     cursor: "pointer",
//                     "& .material-icons-round": {
//                       fontSize: "1.125rem",
//                       transform: `translate(2px, -0.5px)`,
//                       transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
//                     },
//                     "&:hover .material-icons-round, &:focus .material-icons-round": {
//                       transform: `translate(6px, -0.5px)`,
//                     },
//                   }}
//                 >
//                   Read More
//                   <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
//                 </SoftTypography>
//               </Link>
//             </SoftBox>
//           </Grid>
//           <Grid item xs={12} lg={5} sx={{ position: "relative", ml: "auto" }}>
//             <SoftBox
//               height="100%"
//               display="grid"
//               justifyContent="center"
//               alignItems="center"
//             //   bgColor="info"
//               borderRadius="lg"
//               variant="gradient"
//             >
//               <SoftBox
//                 component="img"
//                 src={wavesWhite}
//                 alt="waves"
//                 display="block"
//                 position="absolute"
//                 left={0}
//                 width="100%"
//                 height="100%"
//               />
//               <SoftBox component="img" src={btc} alt="BTC" width="100%" pt={3} />
//             </SoftBox>
//           </Grid>
//         </Grid>
//       </SoftBox>
//     </Card>
    
//   );
// }

// export default BTC;



function BTC() {
  return (
    <Card
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.05)",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "translateY(-4px)" },
      }}
    >
      <SoftBox p={3}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <SoftBox display="flex" flexDirection="column" height="100%">
              <SoftBox mb={1}>
                <SoftTypography variant="body2" color="info" fontWeight="bold">
                  What Is Bitcoin (BTC)?
                </SoftTypography>
              </SoftBox>

              <SoftTypography variant="h5" fontWeight="bold" gutterBottom>
                BTC Price $103,851.71
              </SoftTypography>

              <SoftBox mb={4}>
                <SoftTypography variant="body2" color="text">
                  Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009...
                </SoftTypography>
              </SoftBox>

              <Link to="/btc/details" style={{ textDecoration: "none", width: "fit-content" }}>
                <SoftTypography
                  component="span"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    cursor: "pointer",
                    "& .material-icons-round": {
                      fontSize: "1.125rem",
                      transition: "transform 0.2s ease",
                    },
                    "&:hover .material-icons-round": {
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  Read More
                  <Icon className="material-icons-round" sx={{ ml: 0.5 }}>
                    arrow_forward
                  </Icon>
                </SoftTypography>
              </Link>
            </SoftBox>
          </Grid>
            
          <Grid item xs={12} lg={5} sx={{ position: "relative", ml: "auto" }}>
            <SoftBox
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 6px 30px rgba(0,0,0,0.15)",
                },
              }}
            >
              {/* Background Waves */}
              <SoftBox
                component="img"
                src={wavesWhite}
                alt="waves"
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                sx={{ zIndex: 1, opacity: 0.3 }}
              />
              
              {/* BTC Image */}
              <SoftBox
                component="img"
                src={btc}
                alt="BTC"
                width="100%"
                pt={3}
                sx={{
                  position: "relative",
                  zIndex: 2,
                  borderRadius: "12px",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default BTC;
