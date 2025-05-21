

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
import pic from "assets/images/illustrations/XRP.jpg";
import pic_news from "assets/images/illustrations/XRP_News.jpg";

function XRPDetails() {
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
                  <a href="https://coinmarketcap.com/community/articles/682d0e15acbd177a29b41e0d/" target="_blank" rel="noopener noreferrer">
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
                  What Is XRP / XRP Ledger?
                </SoftTypography>
                <SoftTypography variant="h4" color="success" mb={2}>
                  Current Price: $2.39
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Launched in 2012, the XRP Ledger (XRPL) is an open-source, permissionless and decentralized technology. Benefits of the XRP Ledger include its low-cost ($0.0002 to transact), speed (settling transactions in 3-5 seconds), scalability (1,500 transactions per second) and inherently green attributes (carbon-neutral and energy-efficient). The XRP Ledger also features the first decentralized exchange (DEX) and custom tokenization capabilities built into the protocol. Since 2012, the XRP Ledger has been operating reliably, having closed 70 million ledgers.
                </SoftTypography>
            
                <SoftTypography variant="h4" color="success" mb={2}>
                  Who Are the Founders of the XRP Ledger?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  In 2012, David Schwartz, Jed McCaleb and Arthur Britto launched the XRP Ledger with its native currency XRP as a faster, more energy-efficient alternative to the Bitcoin blockchain. In September that year, along with Chris Larsen, they founded the company that is today known as Ripple.
                </SoftTypography>
                
                <SoftTypography variant="h4" color="success" mb={2}>
                  What Makes XRPL Unique?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The XRP Ledger presents a wide variety of applications and use cases related to payments including micropayments, DeFi, and, soon, NFTs. Deployed in 2012, the XRPL supports enterprises and Python, Java and JavaScript developers with powerful utility and flexibility. On the XRP website, developers can access different tutorials to help them get started using different coding languages, building apps, managing accounts and more.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Alongside its native coin, XRP, the XRP Ledger is used by developers to create solutions that solve inefficiencies, including remittance and asset tokenization. Currently, the five main applications of the XRP Ledger are payments, tokenization, DeFi, CBDCs and stablecoins.
                </SoftTypography>

                <SoftTypography variant="h4" color="success" mb={2}>
                 How Many XRP Coins Are There in Circulation?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The XRP Ledger architects gifted 80 billion XRP to Ripple so that the company could build use cases — including its global payments network, RippleNet — around the digital asset.
                </SoftTypography>

                <SoftTypography variant="h4" color="success" mb={2}>
                  How Is the XRP Ledger Network Secured?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Unlike Bitcoin or Ethereum, the XRPL uses a unique Federated Consensus mechanism as its method of validating transactions. Transactions are confirmed on the XRPL through a consensus protocol, in which designated independent servers called validators come to an agreement on the order and outcome of XRP transactions. All servers in the network process each transaction according to the same rules, and any transaction that follows the protocol is confirmed right away. All transactions are public and transparent, and anyone can operate a validator. There are currently over 150 validators on the ledger, operated by universities, exchanges, businesses, and individuals around the world.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Through the Federated Consensus mechanism, all verified transactions can be processed without a single point of failure as no single participant makes a decision independently.
                </SoftTypography>


                <SoftTypography variant="h4" color="success" mb={2}>
                  Ripple and the SEC
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Since late 2020, Ripple Labs, which uses the XRP token in its products, has been locked in a legal battle with the United States Securities and Exchange Commission. The big question is whether or not XRP is a security.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  On Dec. 22, 2020, the SEC filed a lawsuit against Ripple Labs and two of its executives on the grounds that they traded $1.3 billion in their XRP token as security without registering it with the commission. There have been arguments for and against the lawsuit. However, Ripple has strongly countered the claims, arguing that the SEC has been biased in its assessment.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The SEC uses the “Howey test,” based on the Supreme Court ruling on SEC v. W.J. Howey Co in 1946, to determine whether a cryptocurrency is a security. An asset is considered a security if it is sold with the expectation of getting profits from the efforts of other parties. Based on the commission’s definition of XRP in its lawsuit, the cryptocurrency would pass the Howey test, and according to SEC regulations, all securities must be registered.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  While most companies targeted by the SEC in a similar matter chose to settle, Ripple decided to fight. The outcome of the lawsuit will undoubtedly have far-reaching implications in the crypto space. If Ripple prevails, the SEC could lose some of its credibility, giving other crypto-based companies the confidence to revolt. On the flip side, if the SEC wins the case, it could upend the way crypto firms operate and usher in a new wave of registration rules that apply to securities.
                </SoftTypography>


                <SoftTypography variant="h5" color="warning" mb={2} fontWeight="bold" sx={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }} >
                  Overview
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    The Ripple Protocol is a revolutionary payment system that makes sending money across the globe as easy as sending an email.
                    It solves the big challenges of traditional financial networks by using a unique consensus method thats both fast and secure.
                    Think of it like a super-efficient digital ledger that everyone can trust, but no single person controls.
                    Since its inception, it has evolved into one of the leading enterprise blockchain solutions for cross-border payments, with hundreds of financial institutions now using its technology.
                </SoftTypography>

                <SoftTypography variant="h5" color="warning" mb={2} fontWeight="bold" sx={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }} >
                  Technology
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Lets break down how Ripple works in simple terms.
                    Imagine a group of trusted record-keepers all working together to maintain one giant digital checkbook.
                    Instead of waiting for one central authority (like a bank) to approve transactions, these record-keepers (called servers) work together through something called the Ripple Protocol Consensus Algorithm (RPCA).
                    Heres the cool part - every few seconds, all these servers look at new transactions and decide together which ones are valid.
                    Its like having multiple referees in a sports game, all watching to make sure everything follows the rules.
                    Each server has its own list of other servers it trusts (called a Unique Node List or UNL), kind of like having a trusted circle of friends whose judgment you value.
                    The consensus process happens in rounds, similar to taking a vote.
                    In each round, servers share what transactions they think are valid, and if enough servers agree (at least 80% of your trusted circle), those transactions get approved.
                    This whole process takes just a few seconds, which is way faster than traditional banking systems that can take days.
                    To make sure everything stays secure, Ripple has built-in safeguards.
                    For example, if some servers are trying to cheat or making mistakes, the system can still work perfectly as long as these bad actors dont make up more than 20% of your trusted circle.
                    Its like having a jury where even if a few members are biased, the majority can still reach the right verdict.
                </SoftTypography>

                <SoftTypography variant="h5" color="warning" mb={2} fontWeight="bold" sx={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }} >
                  Tokenomics
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    The Ripple network uses a digital currency called XRP, which plays a crucial role in making everything work smoothly.
                    Think of XRP like digital oil that keeps the Ripple machine running efficiently.
                    One of the most interesting things about XRP is that all coins that will ever exist were created right at the start - 100 billion of them.
                    Currently, about 45 billion XRP are in circulation, with the remaining held in escrow by Ripple Labs.
                    Each month, up to 1 billion XRP can be released from escrow for development and sales, with unused portions returned to escrow.
                    XRP serves several important purposes in the network.
                    First, it acts as a bridge currency, making it easier to exchange one type of money for another.
                    Imagine you want to exchange Mexican Pesos for Japanese Yen - XRP can act as a quick middle step to make this happen faster and cheaper than traditional methods.
                    The system also uses tiny amounts of XRP as a transaction fee to prevent spam attacks.
                    Its like putting a small toll on a highway to prevent traffic jams.
                    These fees arent collected by anyone - they are actually destroyed, which means the total supply of XRP slowly decreases over time.
                    As of 2023, transaction costs have been optimized to be even lower while maintaining network security.
               </SoftTypography>

               <SoftTypography variant="h5" color="warning" mb={2} fontWeight="bold" sx={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }} >
                  Roadmap
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Ripples vision for the future is focused on making global payments as easy as sending a text message.
                    Their current roadmap emphasizes three key areas: expanding RippleNets On-Demand Liquidity (ODL) service, developing Central Bank Digital Currency (CBDC) solutions, and advancing their smart contract platform for tokenization.
                    In the near term, theyre working on expanding their network of financial institutions and making their system even faster and more efficient.
                    Think of it like building more highways and making them smoother to drive on.
                    They have already partnered with hundreds of financial institutions across the globe.
                    Longer-term goals include integrating with more traditional banking systems and developing new ways to use the Ripple network.
                    They are also exploring ways to make cross-border payments even cheaper and more accessible to people everywhere in the world.
                    A significant focus is now on regulatory compliance and working with governments worldwide to create clear frameworks for cryptocurrency usage in international payments.
               </SoftTypography>

               <SoftTypography variant="h5" color="warning" mb={2} fontWeight="bold" sx={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }} >
                  Team
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Ripple Labs, the company behind the Ripple Protocol, brings together experts in technology, finance, and cryptography.
                    The whitepaper was authored by David Schwartz, Noah Youngs, and Arthur Britto, who are recognized authorities in distributed systems and digital currencies.
                    The team has grown significantly since the protocols creation, bringing in talent from major tech companies, financial institutions, and regulatory bodies.
                    Brad Garlinghouse serves as CEO, leading the company through significant growth and regulatory challenges.
                    The current leadership team includes veterans from companies like Amazon, PayPal, and various global banking institutions.
                    This diverse mix of expertise helps ensure that Ripple stays at the forefront of both technological innovation and practical financial applications.
                    The team has successfully navigated various regulatory challenges while continuing to expand Ripples global presence and technological capabilities.
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

export default XRPDetails;

