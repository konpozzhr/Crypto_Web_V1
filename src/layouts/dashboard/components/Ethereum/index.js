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
import eth from "assets/images/illustrations/ETH.png"
import { Link } from "react-router-dom";

function Ethereum() {
  return (
    <Card>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <SoftBox display="flex" flexDirection="column" height="100%">
              <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  What Is Ethereum (ETH)?
                </SoftTypography>
              </SoftBox>
              <SoftTypography variant="h5" fontWeight="bold" gutterBottom>
                Ethereum Price $2,504.86
              </SoftTypography>
              <SoftBox mb={6}>
                <SoftTypography variant="body2" color="text">
                  Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies....
                </SoftTypography>
              </SoftBox>
               <Link to="/eth/details" style={{ textDecoration: "none" }}>
                <SoftTypography
                  component="a"
                  href="#"
                  variant="button"
                  color="text"
                  fontWeight="medium"
                  sx={{
                    mt: "auto",
                    mr: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    cursor: "pointer",

                    "& .material-icons-round": {
                      fontSize: "1.125rem",
                      transform: `translate(2px, -0.5px)`,
                      transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
                    },

                    "&:hover .material-icons-round, &:focus  .material-icons-round": {
                      transform: `translate(6px, -0.5px)`,
                    },
                  }}
                >
                  Read More
                  <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </SoftTypography>
              </Link>
            </SoftBox>
          </Grid>
          <Grid item xs={12} lg={5} sx={{ position: "relative", ml: "auto" }}>
            <SoftBox
              height="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              // bgColor="info"
              borderRadius="lg"
              variant="gradient"
            >
              <SoftBox
                component="img"
                src={wavesWhite}
                alt="waves"
                display="block"
                position="absolute"
                left={0}
                width="100%"
                height="100%"
              />
              <SoftBox component="img" src={eth} alt="BTC" width="100%" pt={3} />
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
    
  );
}

export default Ethereum;
