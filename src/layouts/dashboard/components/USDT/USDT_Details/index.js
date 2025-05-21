

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
import btc from "assets/images/illustrations/BTC_1.jpg";
import btc_price from "assets/images/illustrations/BTC_Price.png";

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
                    src={btc}
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
                  <a href="https://cryptonewsland.com/metaplanet-expands-bitcoin-holdings-to-7800-t/" target="_blank" rel="noopener noreferrer">
                    <SoftBox
                        component="img"
                        src={btc_price}
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
                  What is Bitcoin (BTC)?
                </SoftTypography>
                <SoftTypography variant="h4" color="success" mb={2}>
                  Current Price: $103,851.71
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Bitcoin is a peer-to-peer online currency, meaning that all transactions happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them. Bitcoin was created, according to Nakamoto’s own words, to allow “online payments to be sent directly from one party to another without going through a financial institution.”
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Some concepts for a similar type of a decentralized electronic currency precede BTC, but Bitcoin holds the distinction of being the first-ever cryptocurrency to come into actual use.
                </SoftTypography>
            
                <SoftTypography variant="h4" color="success" mb={2}>
                  Who Are the Founders of Bitcoin?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Bitcoin’s original inventor is known under a pseudonym, Satoshi Nakamoto. As of 2021, the true identity of the person — or organization — that is behind the alias remains unknown.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  On October 31, 2008, Nakamoto published Bitcoin’s whitepaper, which described in detail how a peer-to-peer, online currency could be implemented. They proposed to use a decentralized ledger of transactions packaged in batches (called “blocks”) and secured by cryptographic algorithms — the whole system would later be dubbed “blockchain.”
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Just two months later, on January 3, 2009, Nakamoto mined the first block on the Bitcoin network, known as the genesis block, thus launching the world’s first cryptocurrency. Bitcoin price was $0 when first introduced, and most Bitcoins were obtained via mining, which only required moderately powerful devices (e.g. PCs) and mining software. The first known Bitcoin commercial transaction occurred on May 22, 2010, when programmer Laszlo Hanyecz traded 10,000 Bitcoins for two pizzas. At Bitcoin price today in mid-September 2021, those pizzas would be worth an astonishing $478 million. This event is now known as “Bitcoin Pizza Day.” In July 2010, Bitcoin first started trading, with the Bitcoin price ranging from $0.0008 to $0.08 at that time.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  However, while Nakamoto was the original inventor of Bitcoin, as well as the author of its very first implementation, he handed the network alert key and control of the code repository to Gavin Andresen, who later became lead developer at the Bitcoin Foundation. Over the years a large number of people have contributed to improving the cryptocurrency’s software by patching vulnerabilities and adding new features.
                    Bitcoin’s source code repository on GitHub lists more than 750 contributors, with some of the key ones being Wladimir J. van der Laan, Marco Falke, Pieter Wuille, Gavin Andresen, Jonas Schnelli and others.
                </SoftTypography>
                
                <SoftTypography variant="h4" color="success" mb={2}>
                  What Makes Bitcoin Unique?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Bitcoin’s most unique advantage comes from the fact that it was the very first cryptocurrency to appear on the market.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  It has managed to create a global community and give birth to an entirely new industry of millions of enthusiasts who create, invest in, trade and use Bitcoin and other cryptocurrencies in their everyday lives. The emergence of the first cryptocurrency has created a conceptual and technological basis that subsequently inspired the development of thousands of competing projects.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The entire cryptocurrency market — now worth more than $2 trillion — is based on the idea realized by Bitcoin: money that can be sent and received by anyone, anywhere in the world without reliance on trusted intermediaries, such as banks and financial services companies.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Thanks to its pioneering nature, BTC remains at the top of this energetic market after over a decade of existence. Even after Bitcoin has lost its undisputed dominance, it remains the largest cryptocurrency, with a market capitalization that surpassed the $1 trillion mark in 2021, after Bitcoin price hit an all-time high of $64,863.10 on April 14, 2021. This is owing in large part to growing institutional interest in Bitcoin, and the ubiquitousness of platforms that provide use-cases for BTC: wallets, exchanges, payment services, online games and more.
                </SoftTypography>

                <SoftTypography variant="h4" color="success" mb={2}>
                  Bitcoin Whitepaper
                </SoftTypography>

                <SoftTypography variant="h5" color="warning" mb={2}>
                  Overview
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Bitcoin is a groundbreaking digital payment system that lets people send money directly to each other without needing banks or middlemen.
                    Think of it like digital cash that works over the internet, but with special security features that prevent people from copying or double-spending the money.
                    It solves a major problem in digital payments by creating a secure, decentralized way to track transactions that everyone can trust.
                    Since its launch in 2009, Bitcoin has grown into a global financial phenomenon, with millions of users and widespread institutional adoption.
                </SoftTypography>

                <SoftTypography variant="h5" color="warning" mb={2}>
                  Technology
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Imagine a giant digital ledger that everyone can see but no one person controls  that is basically what Bitcoins blockchain is.
                    When you send Bitcoin to someone, that transaction gets broadcast to a network of computers around the world.
                    These computers, called miners, work together to verify transactions and group them into blocks - kind of like pages in that giant ledger.
                    To make sure everyone agrees on which transactions happened when, Bitcoin uses something called proof-of-work.
                    Think of it like a really hard math puzzle that computers have to solve.
                    The first computer to solve the puzzle gets to add the next block of transactions to the chain and receives some new Bitcoin as a reward.
                    This system makes it extremely difficult for anyone to cheat or change past transactions because they would have to redo all those puzzles and convince everyone to accept their version of events.
                    The beauty of Bitcoins design is that it doesnt require trust in any single person or organization.
                    Instead, it relies on mathematics, cryptography, and the fact that it is more profitable for participants to play by the rules than to try to cheat the system.
                </SoftTypography>

                <SoftTypography variant="h5" color="warning" mb={2}>
                  Tokenomics
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Bitcoins economic system is designed to work like digital gold.
                    Just like there is a limited amount of gold in the world, there will only ever be 21 million Bitcoin.
                    New Bitcoin are created through mining - when computers solve those complex puzzles to verify transactions, they are rewarded with newly created Bitcoin.
                    This reward started at 50 Bitcoin per block and gets cut in half about every four years in what is called the halving.
                    Currently, miners receive 3.125 Bitcoin for each block they add to the chain, with the next halving expected in 2028, which will reduce the reward to 1.5625 Bitcoin.
                    This decreasing supply schedule makes Bitcoin naturally resistant to inflation, unlike traditional money that can be printed by governments at will.
                    When people make Bitcoin transactions, they can also include small fees that go to the miners.
                    These fees help incentivize miners to keep processing transactions even as the block rewards get smaller over time.
                    As of early 2025, almost 20 million Bitcoin have already been mined, with the final Bitcoin expected to be mined around the year 2140.
               </SoftTypography>

               <SoftTypography variant="h5" color="warning" mb={2}>
                  Roadmap
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Bitcoins development follows a careful, conservative approach focused on maintaining security and stability.
                    Unlike many other crypto projects, Bitcoin doesnt have a formal roadmap or a single team controlling its development.
                    Instead, improvements are proposed, discussed, and implemented through a community-driven process.
                    Major updates require broad consensus among users, miners, and developers to be adopted.
                    Current development efforts focus on improving Bitcoins scalability through solutions like the Lightning Network, which allows for faster and cheaper transactions, and enhancing privacy and security features.
                    Recent developments include Taproot, a major upgrade implemented in 2021 that improves privacy and smart contract functionality.
                    The community is also working on various Layer 2 solutions and sidechains to enhance Bitcoins utility while maintaining its core principles of security and decentralization.
               </SoftTypography>

               <SoftTypography variant="h5" color="warning" mb={2}>
                  Team
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Bitcoin was created by someone using the pseudonym Satoshi Nakamoto, who published the Bitcoin whitepaper in 2008 and launched the network in 2009.
                    Satoshis true identity remains unknown, and they stepped away from the project in 2010.
                    Today, Bitcoin is maintained by a global community of developers who contribute to its open-source code.
                    No single person or organization controls Bitcoin - its development and operation are truly decentralized, which is a key feature that makes it resistant to control or manipulation by any single entity.
                    The development community has grown significantly since Bitcoins inception, with numerous contributors working on various aspects of the protocol, from core development to Layer 2 solutions.
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

