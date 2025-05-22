

import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";

// Soft UI components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import pic from "assets/images/illustrations/BNB.jpg";
import pic_news from "assets/images/illustrations/BNB_news.jpg";

function BNBDetails() {
  return (
    <SoftBox py={3} display="flex" justifyContent="right">
      <SoftBox mb={3} width="100%" maxWidth="1200px">
        <Card>
          <SoftBox p={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <SoftBox position="relative">
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
                  <SoftBox
                    component="img"
                    src={pic}
                    alt="BTC"
                    width="100%"
                    borderRadius="lg"
                    position="relative"
                    zIndex={1}
                  />
                </SoftBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <SoftBox position="relative">
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
                  
                  {/* <SoftBox
                    component="img"
                    src={btc_price}
                    alt="BTC"
                    width="100%"
                    borderRadius="lg"
                    position="relative"
                    zIndex={1}
                  /> */}
                  <a href="https://coinmarketcap.com/headlines/news/week-in-bnb-chain-weak-price-performance-fundamental-strength/" target="_blank" rel="noopener noreferrer">
                    <SoftBox
                        component="img"
                        src={pic_news}
                        alt="BTC"
                        width="100%"
                        borderRadius="lg"
                        position="relative"
                        zIndex={1}
                    />
                    </a>
                </SoftBox>
              </Grid>
              <Grid item xs={12} md={12}>
                <SoftTypography variant="h3" fontWeight="bold" mb={2}>
                  What Is BNB?
                </SoftTypography>
                <SoftTypography variant="h4" color="success" mb={2}>
                  Current Price: $686.73
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Launched in July 2017, Binance is the biggest cryptocurrency exchange globally based on daily trading volume. Binance aims to bring cryptocurrency exchanges to the forefront of financial activity globally. The idea behind Binance’s name is to show this new paradigm in global finance — Binary Finance, or Binance.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Aside from being the largest cryptocurrency exchange globally, Binance has launched a whole ecosystem of functionalities for its users. The Binance network includes the Binance Chain, Binance Smart Chain, Binance Academy, Trust Wallet and Research projects, which all employ the powers of blockchain technology to bring new-age finance to the world. BNB is an integral part of the successful functioning of many of the Binance sub-projects.
                </SoftTypography>
            
                <SoftTypography variant="h4" color="success" mb={2}>
                  Who Are the Founders of BNB?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Changpeng Zhao is the founder and CEO of Binance. In 2001, Zhao joined Bloomberg as head of tradebook futures development. He spent four years with the company and later joined Fusion Systems as a partner.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Since 2013, Changpeng Zhao has been actively involved with blockchain technology and cryptocurrencies. He became head of development at Blockchain, and in 2015 he founded BijieTech. In 2017, Zhao officially launched Binance, and he has been the CEO of the company ever since.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  He Yi is a co-founder and chief marketing officer at Binance. She started her career as a TV anchor and presenter on China Travel TV in 2012. Later, in 2014, Yi co-founded OKCoin, which was the largest fiat-to-crypto exchange in China at the time. In 2017, she joined forces with Changpeng Zhao, and together they created the largest crypto exchange globally — Binance.
                </SoftTypography>

                
                <SoftTypography variant="h4" color="success" mb={2}>
                  What Makes BNB Unique?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Binance is a unique ecosystem of decentralized, blockchain-based networks. The company has grown to be the leading crypto exchange in a number of countries, and their side organizations are attracting significant interest as well.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  One of the biggest competitive advantages Binance has is its drive for development. While the company started only as a crypto exchange back in 2017, today, Binance has spread its services among numerous different spheres. According to the company website, its mission is to become the infrastructure services provider for the entire blockchain ecosystem.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Since launching the BNB, the exchange has also benefited from increased investor interest in the coin. BNB went through a significant price increase at the beginning of 2021, which has put it on the map of enterprise investors.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Measures like BEP-95 have upgraded the already deflationary tokenomics to make BNB even more deflationary. Following the proposal, gas fees on Binance Smart Chain have become even lower, as the network burns a part of the fees to decentralize further. The proposal was modeled after Ethereums famous EIP-1559.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  This has helped Binance overcome several exploits of protocols on BSC, such as a $200M exploit of Pancake Bunny and several hacks of Cream Finance. Despite these hacks, users return to Binance for its low fees and the abundance of lucrative meme coins in its ecosystem.
                </SoftTypography>

                <SoftTypography variant="h4" color="success" mb={2}>
                 What Is BNB Auto Burn?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Within the crypto industry, a coin burn is a deflationary mechanism that is used to permanently remove coins from circulation. Most cryptocurrency projects, including Binance, periodically burn coins to sustain the value of their digital asset and create a deflationary effect.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  In the case of Binance, the crypto exchange began the program in late 2017 and has so far burned over 38 million tokens via its quarterly burn to date. The crypto exchange has in mind to destroy up to 100 million BNB tokens through its quarterly burns, accounting for 50% of its circulating supply.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  BNB utilizes two coin-burning mechanisms. The first mechanism consists of burning a portion of the tokens spent on transaction fees on the BNB Chain, and the second is its quarterly BNB burning events.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Previously, the quarterly burn event was based on revenue generated from the Binance centralized exchange. But under the new BNB Auto-Burn program, the number of tokens to be burned is calculated using a formula based on the total number of blocks produced on the Binance Smart Chain and BNB average dollar-denominated price during the quarter.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  As of July 2022, Binance had completed 20 BNB coin burn events. In total, 38,683,447.66 BNB tokens have been destroyed, reducing its initial 200M supply by 19.34%.
                </SoftTypography>



                <SoftTypography variant="h4" color="success" mb={2}>
                  How Many BNB Are There in Circulation?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  There is an initial maximum supply of 200,000,000 BNB coins, of which 168,137,036 are currently in circulation as of September 2021.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Binance conducts quarterly burning of the BNB supply, with the goal of reducing the total supply by half — or 100,000,000 BNB. On July 18, 2021, it conducted its 16th quarterly burning, which was worth $390 million in BNB price at the time of burning. However, that was not the most expensive burn — on April 16, 2021, the exchange burned nearly $600 million worth, in BNB price at the time of burning.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  According to the Binance whitepaper, exactly half of the maximum supply of BNB coins was allocated towards the initial coin offering (ICO) and public sale of the coin. The ICO was held in July 2017 shortly after the exchange launched, and saw Binance raise $15 million in funding, with BNB price at $0.10 during the ICO. Taking BNB price today, that represents an almost 4200X return on investment (ROI). Another 40% of the total supply, or around 80,000,000 BNB coins, was distributed among the founding members and team. Finally, the remaining 10% of the maximum supply was split among angel investors.
                </SoftTypography>


                <SoftTypography variant="h4" color="success" mb={2}>
                  How Is the BNB Network Secured?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Initially, the BNB started as a traditional ERC-20 token on the Ethereum blockchain. Later on, the company introduced its own blockchain, and the tokens started being issued from the Binance blockchain, secured by the Tendermint byzantine-fault-tolerant (BFT) consensus mechanism.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  While ERC-20 tokens rely on the proof-of-stake (PoS) consensus, which allows them to be extremely scalable, and allows for the creation of smart contracts. Unlike PoS, the Binance blockchain does not support smart contract functionalities. In contrast, the Bitcoin blockchain is secured by the proof-of-work (PoW) consensus, which is far more limited and consumes large amounts of electrical and computing power.
                </SoftTypography>
              

                <SoftTypography variant="h5" color="warning" mb={2} fontWeight="bold" sx={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }} >
                  BNB Price Live Data
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    The live BNB price today is $686.64 USD with a 24-hour trading volume of $2,654,377,635 USD. We update our BNB to USD price in real-time. BNB is up 4.87% in the last 24 hours. The current CoinMarketCap ranking is #5, with a live market cap of $96,739,412,690 USD. It has a circulating supply of 140,888,340 BNB coins and the max. supply is not available.
               </SoftTypography>

                <SoftTypography 
                  variant="h5" 
                  color="warning" 
                  mb={2} 
                  fontWeight="bold" 
                  sx={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                >
                  😊 Welcome! Let’s make this fun and easy.
                </SoftTypography>


            
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                  <SoftTypography
                    component="span"
                    variant="button"
                    color="info"
                    fontWeight="medium"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      cursor: "pointer",
                      mt: 2,
                      "& .material-icons-round": {
                        fontSize: "1.125rem",
                        transform: `translate(2px, -0.5px)`,
                        transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
                      },
                      "&:hover .material-icons-round, &:focus .material-icons-round": {
                        transform: `translate(6px, -0.5px)`,
                      },
                    }}
                  >
                    <Icon sx={{ fontWeight: "bold", mr: 0.5 }}>arrow_back</Icon>
                    Back to Dashboard
                  </SoftTypography>
                </Link>
              </Grid>
            </Grid>
          </SoftBox>
        </Card>
      </SoftBox>
    </SoftBox>
  );
}

export default BNBDetails;

