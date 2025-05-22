

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
import pic from "assets/images/illustrations/SOL.jpg";
import pic_news from "assets/images/illustrations/SOL_news.jpg";

function SOLDetails() {
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
                  <a href="https://coinmarketcap.com/currencies/solana/" target="_blank" rel="noopener noreferrer">
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
                  What Is Solana (SOL)?
                </SoftTypography>
                <SoftTypography variant="h4" color="success" mb={2}>
                  Current Price: $179.06
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Solana is a highly functional open source project that banks on blockchain technology permissionless nature to provide decentralized finance (DeFi) solutions. While the idea and initial work on the project began in 2017, Solana was officially launched in March 2020 by the Solana Foundation with headquarters in Geneva, Switzerland.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  To learn more about this project, check out our deep dive of Solana.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The Solana protocol is designed to facilitate decentralized app (DApp) creation. It aims to improve scalability by introducing a proof-of-history (PoH) consensus combined with the underlying proof-of-stake (PoS) consensus of the blockchain.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Because of the innovative hybrid consensus model, Solana enjoys interest from small-time traders and institutional traders alike. A significant focus for the Solana Foundation is to make decentralized finance accessible on a larger scale.
                </SoftTypography>
            
                <SoftTypography variant="h4" color="success" mb={2}>
                  Who Are the Founders of Solana?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Anatoly Yakovenko is the most important person behind Solana. His professional career started at Qualcomm, where he quickly moved up the ranks and became senior staff engineer manager in 2015. Later on, his professional path shifted, and Yakovenko entered a new position as a software engineer at Dropbox.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  In 2017, Yakovenko started working on a project which would later materialize as Solana. He teamed up with his Qualcomm colleague Greg Fitzgerald, and they founded a project called Solana Labs. Attracting several more former Qualcomm colleagues in the process, the Solana protocol and SOL token were released to the public in 2020.
                </SoftTypography>
                
                <SoftTypography variant="h4" color="success" mb={2}>
                  What Makes Solana Unique?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  One of the essential innovations Solana brings to the table is the proof-of-history (PoH) consensus developed by Anatoly Yakovenko. This concept allows for greater scalability of the protocol, which in turn boosts usability.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Solana is known in the cryptocurrency space because of the incredibly short processing times the blockchain offers. Solana’s hybrid protocol allows for significantly decreased validation times for both transaction and smart contract execution. With lightning-fast processing times, Solana has attracted a lot of institutional interest as well.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The Solana protocol is intended to serve both small-time users and enterprise customers alike. One of Solana’s main promises to customers is that they will not be surprised by increased fees and taxes. The protocol is designed in such a way as to have low transaction costs while still guaranteeing scalability and fast processing.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Combined with the longstanding professional expertise creators Anatoly Yakovenko and Greg Fitzgerald bring to the project, Solana is ranked number 7 in the CoinMarketCap ranking as of September 2021.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  This came on the back of an impressive bull run, where Solana price gained over 700% since mid-July 2021. The launch of the Degenerate Ape NFT collection sent SOL price to an all-time high (ATH) above $60, and it has been climbing since, largely due to higher developer activity on the Solana ecosystem, greater institutional interest, growing DeFi ecosystem, and the rise of the NFTs and gaming vertical on Solana. Solana price rose to an ATH of $216 on Sept. 9, 2021.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Solana has received much praise for its speed and performance, and has even been tipped as a rival that can compare to Ethereum and challenge the dominant smart contract platform. However, the network has been plagued by repeated outages that have impaired its price and aspirations to be the Visa of crypto. Furthermore, its ecosystem is accused of favoring venture capital investors with unfair tokenomics.
                </SoftTypography>


                <SoftTypography variant="h4" color="success" mb={2}>
                 How Many Solana (SOL) Coins Are There in Circulation?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The Solana Foundation has announced that a total of 489 million SOL tokens will be released in circulation. At the moment, about 260 million of these have already entered the market.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The SOL token distribution is as follows: 16.23% went towards an initial seed sale, 12.92% of tokens were dedicated to a founding sale, 12.79% of SOL coins were distributed among team members and 10.46% of tokens were given to the Solana Foundation. The remaining tokens were already released for public and private sales or are still to be released to the market.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Solana price during the initial seed sale, held on April 5, 2018, was $0.04. Given the recent ATH, that represents an impressive 5400X return on investment (ROI).
                </SoftTypography>



                <SoftTypography variant="h4" color="success" mb={2}>
                  How Is the Solana Network Secured?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Proof-of-history is the main component of the Solana protocol, as it is responsible for the bulk of transaction processing. PoH records successful operations and the time that has passed between them, thus ensuring the trustless nature of the blockchain.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The proof-of-stake (PoS) consensus is used as a monitoring tool for the PoH processes, and it validates each sequence of blocks produced by it.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The combination of two consensus mechanisms makes Solana a unique phenomenon in the blockchain industry.
                </SoftTypography>


                <SoftTypography variant="h4" color="success" mb={2}>
                  Where Can You Buy Solana (SOL)?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  SOL tokens can be purchased on most exchanges. One choice to trade Solana is on Binance, as it has the highest SOL/USDT trading volume, $753,103,225 as of September 2021.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Next is Coinbase, with a trading volume of $343,872,841. Other options to trade Solana include Bilaxy and Huobi Global. Of course, it is important to note that investing in cryptocurrency comes with a risk, just like any other investment opportunity.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  To check Solana price live in the fiat currency of your choice, you can use CoinMarketCap’s converter feature directly on the Solana currency page, or the dedicated exchange rate converter page. Popular Solana price pairs include: SOL/USD, SOL/GBP, SOL/AUD, SOL/JPY and SOL/EUR.
                </SoftTypography>
                


                <SoftTypography variant="h5" color="warning" mb={2} fontWeight="bold" sx={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }} >
                  Overview
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Solana is a high-performance blockchain that was designed to process up to 710,000 transactions per second, though real-world throughput typically ranges from 2,000 to 3,000 TPS.
                    It achieves this through an innovative timekeeping mechanism called Proof of History, which creates a reliable timestamp for all transactions without needing validators to agree on time.
                    Think of it like a super-fast digital ledger that keeps perfect time, making it ideal for decentralized applications that need speed and reliability.
                    The network has become one of the leading platforms for DeFi, NFTs, and Web3 applications due to its high speed and low transaction costs.
                </SoftTypography>

                <SoftTypography variant="h5" color="warning" mb={2} fontWeight="bold" sx={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }} >
                  Technology
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    At the heart of Solana is something called Proof of History (PoH), which works like a highly accurate digital clock for the blockchain.
                    Imagine a long chain of mathematical puzzles, where each solution depends on the previous one - this creates a verifiable record of time passing that everyone can trust.
                    The really clever part is how this helps Solana process transactions so quickly.
                    Instead of validators having to agree on when things happened, the PoH generator (think of it as the networks timekeeper) creates a single, trusted source of time.
                    This means validators can focus on confirming transactions rather than debating timestamps.
                    Solana also uses a unique approach to storing data called Proof of Replication.
                    Think of this like making secure digital copies of the blockchain, where special nodes called replicators have to prove theyre actually storing the data they claim to be.
                    This system helps keep the network decentralized while maintaining its blazing speed.
                    The network is designed with multiple safeguards to prevent cheating.
                    For example, if a validator tries to confirm invalid transactions or the timekeeper (PoH generator) misbehaves, they will lose their staked coins.
                    This creates strong economic incentives for everyone to play by the rules.
                    Recent updates have introduced features like state compression and account compression, making it more efficient to store and process large amounts of data on-chain.
                </SoftTypography>

                <SoftTypography variant="h5" color="warning" mb={2} fontWeight="bold" sx={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }} >
                  Tokenomics
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    The Solana network uses its native token, SOL, in several important ways.
                    Think of SOL like the fuel that powers the entire system - it is needed for both running and securing the network.
                    The main use of SOL is for staking, where users lock up their tokens to help secure the network.
                    When you stake SOL, you are essentially putting up collateral to vouch for a validators honest behavior.
                    If the validator does their job correctly, you earn rewards.
                    If they misbehave, some of those staked tokens can be destroyed as punishment.
                    SOL is also used to pay for transaction fees on the network.
                    Unlike some other blockchains where fees can be unpredictable and expensive, Solanas high processing speed helps keep these fees consistently low, typically around $0.00025 per transaction.
                    This makes it practical for everyday transactions and running decentralized applications.
                    The total supply of SOL is not fixed, with new tokens being created through inflation to reward validators.
                    The inflation rate started at 8% annually and decreases by 15% each year until reaching a long-term fixed rate of 1.5%.
               </SoftTypography>

               <SoftTypography variant="h5" color="warning" mb={2} fontWeight="bold" sx={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }} >
                  Roadmap
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Solanas development focuses on maintaining and improving its high-performance infrastructure.
                    The network aims to continue scaling while maintaining its speed and low transaction costs.
                    A key priority is expanding the ecosystem by attracting more developers and applications.
                    The platform is particularly focused on supporting decentralized finance (DeFi) applications, NFTs, and other digital assets that can benefit from its high speed and low costs.
                    The team is actively working on improving network stability and reliability through updates like the validator client implementation in Rust and new fee markets.
                    Recent initiatives include the Solana Mobile Stack and Saga phone, bringing Web3 capabilities to mobile devices.
                    Future developments include implementing stake-weighted QoS, improving the fee model, and enhancing network resilience through better error handling and recovery mechanisms.
               </SoftTypography>

               <SoftTypography variant="h5" color="warning" mb={2} fontWeight="bold" sx={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }} >
                  Team
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Solana was founded by Anatoly Yakovenko, who brought his experience from Qualcomm and Dropbox to create a high-performance blockchain.
                    The core team includes engineers and developers with backgrounds from major tech companies and significant experience in parallel computing, networking, and cryptography.
                    The project is supported by the Solana Foundation, a non-profit organization that helps coordinate network development and community growth.
                    The foundation works to maintain the networks decentralization while supporting its technical advancement.
                    The ecosystem has grown significantly, with numerous core contributors and thousands of developers building on the platform.
                    Major partnerships and investments from prominent venture capital firms have helped accelerate the networks development and adoption.
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

export default SOLDetails;

