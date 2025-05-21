

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
import pic from "assets/images/illustrations/USDT.jpg";
import pic_news from "assets/images/illustrations/USDT_news.jpg";

function USDTDetails() {
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
                  <a href="https://coinmarketcap.com/community/articles/682c448a35531078bddece2d/" target="_blank" rel="noopener noreferrer">
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
                  What Is Tether (USDT)?
                </SoftTypography>
                <SoftTypography variant="h4" color="success" mb={2}>
                  Current Price: $1.00
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Launched in 2014, Tether is a blockchain-enabled platform designed to facilitate the use of fiat currencies in a digital manner. Tether works to disrupt the conventional financial system via a more modern approach to money. Tether has made headway by giving customers the ability to transact with traditional currencies across the blockchain, without the inherent volatility and complexity typically associated with a digital currency. As the first blockchain-enabled platform to facilitate the digital use of traditional currencies (a familiar, stable accounting unit), Tether has democratised cross-border transactions across the blockchain.
                </SoftTypography>
            
                <SoftTypography variant="h4" color="success" mb={2}>
                  What is the Tether USD₮ token?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  USD₮ is a digital dollar, powered by blockchain technology, a stablecoin that is pegged 1:1 to the USD.
                  USD₮ provides individuals and organizations with a robust and decentralized method of exchanging value while using a familiar accounting unit.
                </SoftTypography>
                
                <SoftTypography variant="h4" color="success" mb={2}>
                  How do Tether tokens work?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Tether tokens exist as digital tokens built on several leading blockchains, including Algorand, Avalanche, Bitcoin Cashs Simple Ledger Protocol (SLP), Ethereum, EOS, Liquid Network, Omni, Polygon, Tezos, Tron, Solana, Kava and Statemine. These transport protocols consist of open source software that interface with blockchains to allow for the issuance and redemption of Tether tokens. Every Tether token is 100% backed by Tethers reserves. As a fully transparent company, Tether publishes a record of the current reserve assets.
                </SoftTypography>

                <SoftTypography variant="h4" color="success" mb={2}>
                  Who Are The Founders Of Tether?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  USDT — or as it was known at the time, Realcoin — was launched in 2014 by Brock Pierce, Reeve Collins and Craig Sellars.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Brock Pierce is a well-known entrepreneur who has co-founded a number of high-profile projects in the crypto and entertainment industries. In 2013, he co-founded a venture capital firm Blockchain Capital, which by 2017 had raised over $80 million in funding. In 2014, Pierce became the director of the Bitcoin Foundation, a nonprofit established to help improve and promote Bitcoin. Pierce has also co-founded Block.one, the company behind EOS, one of the largest cryptocurrencies on the market.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Reeve Collins was the CEO of Tether for the first two years of its existence. Prior to that, he had co-founded several successful companies, such as the online ad network Traffic Marketplace, entertainment studio RedLever and gambling website Pala Interactive. As of 2020, Collins is heading SmarMedia Technologies, a marketing and advertising tech company.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Other than working on Tether, Craig Sellars has been a member of the Omni Foundation for over six years. Its Omni Protocol allows users to create and trade smart-contract based properties and currencies on top of Bitcoin’s blockchain. Sellars has also worked in several other cryptocurrency companies and organizations, such as Bitfinex, Factom, Synereo and the MaidSafe Foundation.
                </SoftTypography>



                <SoftTypography variant="h4" color="success" mb={2}>
                  What Makes Tether Unique?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  USDT unique feature is the fact that its value is guaranteed by Tether to remain pegged to the U.S. dollar. According to Tether, whenever it issues new USDT tokens, it allocates the same amount of USD to its reserves, thus ensuring that USDT is fully backed by cash and cash equivalents.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The famously high volatility of the crypto markets means that cryptocurrencies can rise or fall by 10-20% within a single day, making them unreliable as a store of value. USDT, on the other hand, is protected from these fluctuations.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  This property makes USDT a safe haven for crypto investors: during periods of high volatility, they can park their portfolios in Tether without having to completely cash out into USD. In addition, USDT provides a simple way to transact a U.S. dollar equivalent between regions, countries and even continents via blockchain — without having to rely on a slow and expensive intermediary, like a bank or a financial services provider.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  However, over the years, there have been a number of controversies regarding the validity of Tether’s claims about their USD reserves, at times disrupting USDT’s price, which went down as low as $0.88 at one point in its history. Many have raised concerns about the fact that Tether’s reserves have never been fully audited by an independent third party.
                </SoftTypography>


                <SoftTypography variant="h4" color="success" mb={2}>
                  Is Tether Entering the Social Media Market?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  In July 2022, Tether, alongside peer-to-peer data network Hypercore and its sister company Bitfinex, collaborated on a social media app called Keet.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The fully encrypted video chat application is currently a desktop-only app for now, but there are plans to extend the product to mobile devices soon.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Keet app is the first app to be deployed on Holepunch, a platform that allows developers to build Web3 apps. And although Keet is still a closed-source project, the companies plan to make it open-source by the end of the year.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Commenting on why Tether was launching a chat app, Ardoino, who doubles as the chief strategy officer at Holepunch, simply said “freedom of speech.”
                </SoftTypography>


                <SoftTypography variant="h4" color="success" mb={2}>
                  How Many Tether (USDT) Coins Are There In Circulation?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  There is no hard-coded limit on the total supply of USDT — given the fact that it belongs to a private company, theoretically, its issuance is limited only by Tether’s own policies. However, because Tether claims that every single USDT is supposed to be backed by one U.S. dollar, the amount of tokens is limited by the company’s actual cash reserves.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Moreover, Tether does not disclose its issuance schedules ahead of time. Instead, they provide daily transparency reports, listing the total amount of their asset reserves and liabilities, the latter corresponding to the amount of USDT in circulation.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  As of September 2020, there are over 14.4 billion USDT tokens in circulation, which are backed by $14.6 billion in assets, according to Tether.
                </SoftTypography>
                
                
                <SoftTypography variant="h4" color="success" mb={2}>
                  How Is the Tether Network Secured?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  USDT does not have its own blockchain — instead, it operates as a second-layer token on top of other cryptocurrencies’ blockchains: Bitcoin, Ethereum, EOS, Tron, Algorand, Bitcoin Cash and OMG, and is secured by their respective hashing algorithms.
                </SoftTypography>



                <SoftTypography variant="h5" color="warning" mb={2} fontWeight="bold" sx={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }} >
                  Overview
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Tether is a digital currency that aims to make digital payments more stable by creating tokens that are designed to maintain a value of one US dollar.
                    Think of it like having digital dollar bills that you can send anywhere in the world quickly and cheaply using blockchain technology.
                    While originally built on Bitcoins blockchain, Tether now operates across multiple blockchain platforms
                </SoftTypography>

                <SoftTypography variant="h5" color="warning" mb={2} fontWeight="bold" sx={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }} >
                  Technology
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Tether works by combining traditional banking with blockchain technology.
                    For every Tether token created, one US dollar (or equivalent assets) is held in reserve.
                    While originally created on the Bitcoin blockchain through the Omni Layer protocol, Tether now operates across multiple blockchain platforms including Ethereum, Tron, and Solana.
                    This multi-chain approach provides users with more flexibility and lower transaction costs while maintaining security benefits.
                    When users want Tether tokens, they send dollars to Tethers bank account, and Tether creates the equivalent tokens on their chosen blockchain.
                    When converting back to dollars, Tether destroys those tokens and returns the corresponding dollars from reserves.
                </SoftTypography>

                <SoftTypography variant="h5" color="warning" mb={2} fontWeight="bold" sx={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }} >
                  Tokenomics
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Each Tether token (USDT) is designed to maintain a value of one US dollar through their reserve system.
                    Users deposit real US dollars to receive an equivalent amount of tokens.
                    When converting back to dollars, tokens are destroyed and real dollars are returned.
                    Tethers reserves include cash and cash equivalents, secured loans, corporate bonds, and other investments, with regular attestations provided.
               </SoftTypography>

               <SoftTypography variant="h5" color="warning" mb={2} fontWeight="bold" sx={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }} >
                  Roadmap
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Tether plans to enhance security through smart contracts implementation.
                    They are expanding transparency initiatives with regular third-party attestations of reserves.
                    The company is developing new stablecoins pegged to different currencies.
                    Focus is placed on improving cross-blockchain efficiency.
               </SoftTypography>

               <SoftTypography variant="h5" color="warning" mb={2} fontWeight="bold" sx={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }} >
                  Team
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Tether is operated by iFinex Inc., which also runs the cryptocurrency exchange Bitfinex.
                    Based in the British Virgin Islands, they maintain proper legal structures and follow strict financial regulations.
                    The team works with regulators to ensure compliance and regularly publishes reserve attestations.
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

export default USDTDetails;

