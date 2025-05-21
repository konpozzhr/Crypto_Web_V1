

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
import eth from "assets/images/illustrations/ETH.png";
import eth_price from "assets/images/illustrations/ETH_Price.png";

function ETHDetails() {
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
                    src={eth}
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
                  <a href="https://coinmarketcap.com/community/articles/682b28f1c8dd555c92058e05/" target="_blank" rel="noopener noreferrer">
                    <SoftBox
                        component="img"
                        src={eth_price}
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
                  What Is Ethereum (ETH)?
                </SoftTypography>
                <SoftTypography variant="h4" color="success" mb={2}>
                  Current Price: $2,515.92
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014. The project team managed to raise $18.3 million in Bitcoin, and Ethereum’s price in the Initial Coin Offering (ICO) was $0.311, with over 60 million Ether sold. Taking Ethereum’s price now, this puts the return on investment (ROI) at an annualized rate of over 270%, essentially almost quadrupling your investment every year since the summer of 2014.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The Ethereum Foundation officially launched the blockchain on July 30, 2015, under the prototype codenamed “Frontier.” Since then, there has been several network updates — “Constantinople” on Feb. 28, 2019, “Istanbul” on Dec. 8, 2019, “Muir Glacier” on Jan. 2, 2020, “Berlin” on April 14, 2021, and most recently on Aug. 5, 2021, the “London” hard fork.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Ethereum’s own purported goal is to become a global platform for decentralized applications, allowing users from all over the world to write and run software that is resistant to censorship, downtime and fraud.
                </SoftTypography>
            
                <SoftTypography variant="h4" color="success" mb={2}>
                  Who Are the Founders of Ethereum?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Ethereum has a total of eight co-founders — an unusually large number for a crypto project. They first met on June 7, 2014, in Zug, Switzerland.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Among the other co-founders of Ethereum are: - Anthony Di Iorio, who underwrote the project during its early stage of development. - Charles Hoskinson, who played the principal role in establishing the Swiss-based Ethereum Foundation and its legal framework. - Mihai Alisie, who provided assistance in establishing the Ethereum Foundation. - Joseph Lubin, a Canadian entrepreneur, who, like Di Iorio, has helped fund Ethereum during its early days, and later founded an incubator for startups based on ETH called ConsenSys. - Amir Chetrit, who helped co-found Ethereum but stepped away from it early into the development.
                </SoftTypography>
                
                
                <SoftTypography variant="h4" color="success" mb={2}>
                  What Makes Ethereum Unique?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Ethereum has pioneered the concept of a blockchain smart contract platform. Smart contracts are computer programs that automatically execute the actions necessary to fulfill an agreement between several parties on the internet. They were designed to reduce the need for trusted intermediates between contractors, thus reducing transaction costs while also increasing transaction reliability.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Ethereum’s principal innovation was designing a platform that allowed it to execute smart contracts using the blockchain, which further reinforces the already existing benefits of smart contract technology. Ethereum’s blockchain was designed, according to co-founder Gavin Wood, as a sort of “one computer for the entire planet,” theoretically able to make any program more robust, censorship-resistant and less prone to fraud by running it on a globally distributed network of public nodes.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  In addition to smart contracts, Ethereum’s blockchain is able to host other cryptocurrencies, called “tokens,” through the use of its ERC-20 compatibility standard. In fact, this has been the most common use for the ETH platform so far: to date, more than 280,000 ERC-20-compliant tokens have been launched. Over 40 of these make the top-100 cryptocurrencies by market capitalization, for example, USDT, LINK and BNB. Since the emergence of Play2Earn games, there has been a substantial increase in interest in the ETH to PHP price.
                </SoftTypography>
               
                <SoftTypography variant="h4" color="success" mb={2}>
                  What is Ethereum Name Service?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Ethereum Name Service, aka ENS, is a distributed and extensible naming system based on the Ethereum blockchain. It is essentially the Web3 version of DNS, short for domain name service.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  In its original state, a cryptocurrency address consists of a long string of numbers and letters designed to be read by computers. It may look like this — “0xDC25EF3F5B8A186998338A2ADA83795FBA2D695E” — making it confusing at times to read, and in some cases even leading to loss of funds.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  ENS provides a solution to this problem of long and confusing crypto addresses by assigning human-readable names to machine-readable identifiers such as Ethereum addresses, metadata, other cryptocurrency addresses and content hashes. With ENS, the long address above could become something as simple as “Alice.eth,” and you can receive any type of cryptocurrency or NFT via your ENS domain.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  ENS is based on two Ethereum smart contracts. The first is the ENS registry, which records three critical pieces of information: the owner of the domain, the resolver for the domain and the caching time for all records under the domain. The second smart contract is the Resolver, which translates the domain name to a machine-readable address and vice-versa.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  It is worth adding that in addition to integrating with .eth names, ENS also supports the most popular DNS names, including .com, .org, .io, .app and several others.
                </SoftTypography>
                
                <SoftTypography variant="h4" color="success" mb={2}>
                  What is an Ethereum Killer?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Since its inception, Ethereum has maintained its spot as the second-largest cryptocurrency by market capitalization. But like every other blockchain network that exists, Ethereum is not perfect. Notable, the legacy blockchain is plagued with high gas fees and low throughput of between 15 to 30 transactions per second.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Although plans are already on the way to solve these shortcomings through several upgrades, many competitors have capitalized on this delay to offer crypto users cheaper and faster transactions.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The term “Ethereum Killer” emerged around 2016/2017 as substitute blockchains such as Cardano began to enter the crypto scene. In 2018, EOS made its debut as the next “Ethereum killer,” raising $4.1 billion from investors, the highest amount an ICO had ever generated. Since then, others like Tezos, Solana, Fantom, Avalanche and Binance Smart Chain have surfaced as possible Ethereum killers.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Each of these blockchains employs a different consensus model to tackle Ethereum’s PoW-induced limitations. For instance, Solana uses proof-of-history (PoH) while Binance Smart Chain utilizes both proof-of-authority (PoA) and delegated proof-of-stake (DPoS).
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  However, none of these alternative blockchains have been able to unseat Ethereum as the second-largest cryptocurrency by market cap. Ethereum is also currently the largest blockchain for NFT trading activities.
                </SoftTypography>


                <SoftTypography variant="h4" color="success" mb={2}>
                  What Is EIP-1559?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The EIP-1559 upgrade introduces a mechanism that changes the way gas fees are estimated on the Ethereum blockchain. Before the upgrade, users had to participate in an open auction for their transactions to be picked up by a miner. This process is known as a “first-price auction,” and as expected, the highest bidder wins.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  With EIP-1559, this process is handled by an automated bidding system, and there is a set “base fee” for transactions to be included in the next block. This fee varies based on how congested the network is. Furthermore, users who wish to speed up their transactions can pay a “priority fee” to a miner for faster inclusion.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  EIP-1559 also introduces a fee-burning mechanism. A part of every transaction fee (the base fee) is burned and removed out of circulation. This is intended to lower the circulating supply of Ether and potentially increase the value of the token over time.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Interestingly, less than two months after the London upgrade was implemented, the network had burned over $1 billion worth of Ether.
                </SoftTypography>
                

                <SoftTypography variant="h4" color="success" mb={2}>
                  How Many Ethereum (ETH) Coins Are There In Circulation?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  In September 2021, there were around 117.5 million ETH coins in circulation, 72 million of which were issued in the genesis block — the first ever block on the Ethereum blockchain. Of these 72 million, 60 million were allocated to the initial contributors to the 2014 crowd sale that funded the project, and 12 million were given to the development fund.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The remaining amount has been issued in the form of block rewards to the miners on the Ethereum network. The original reward in 2015 was 5 ETH per block, which later went down to 3 ETH in late 2017 and then to 2 ETH in early 2019. The average time it takes to mine an Ethereum block is around 13-15 seconds.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  In the August 2021 Ethereum network upgrade, the London hard fork contained the Ethereum Improvement Protocol, EIP-1559. Instead of the first-price auction mechanism where the highest bidder wins, EIP-1559 introduces a “base fee” for transactions to be included in the next block. Users that want to have their transaction prioritized can pay a “tip” or “priority fee” to miners. As the base fee adjusts dynamically with transaction activity, this reduces the volatility of Ethereum gas fees, although it does not reduce the price, which is notoriously high during peak congestion on the network.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  One of the major differences between Bitcoin and Ethereum’s economics is that the latter is not deflationary, i.e. its total supply is not limited. Ethereum’s developers justify this by not wanting to have a “fixed security budget” for the network. Being able to adjust ETH’s issuance rate via consensus allows the network to maintain the minimum issuance needed for adequate security.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  With the introduction of EIP-1559 however, the base fees used in transactions are burned, removing the ETH from circulation. This means higher activity on the network would lead to more ETH burned, and the decreasing supply should lead to appreciation of Ethereum price, all things equal. This has the potential to make Ethereum deflationary, something ETH holders are excited about — a potential appreciation in Ethereum price today.
                </SoftTypography>

                <SoftTypography variant="h4" color="success" mb={2}>
                  How Is the Ethereum Network Secured?
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  As of August 2020, Ethereum is secured via the Ethash proof-of-work algorithm, belonging to the Keccak family of hash functions.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  There are plans, however, to transition the network to a proof-of-stake algorithm tied to the major Ethereum 2.0 update, which launched in late 2020.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  After the Ethereum 2.0 Beacon Chain (Phase 0) went live in the beginning of December 2020, it became possible to begin staking on the Ethereum 2.0 network. An Ethereum stake is when you deposit ETH (32 ETH is required to activate validator software) on Ethereum 2.0 by sending it to a deposit contract, thus helping to secure the network by storing data, processing transactions and adding new blocks to the blockchain. At the time of writing in mid-September 2021, the Ethereum price now for 32 Ether is roughly $116,029. The amount of money earned by Ethereum validators right now is a return of 6% APR, which equates to around 1.91952 ETH, or $6960 in Ethereum price today. This number will change as the network develops and the amount of stakers (validators) increase.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Ethereum staking rewards are determined by a distribution curve (the participation and average percent of stakers): some ETH 2.0 staking rewards were at 20% for early stakers, but will be lowered to end up between 7% and 4.5% annually.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The minimum requirements for an Ethereum stake are 32 ETH. If you decide to stake in Ethereum 2.0, it means that your Ethererum stake will be locked up on the network for months, if not years, in the future until the Ethereum 2.0 upgrade is completed.
                </SoftTypography>


                <SoftTypography variant="h4" color="success" mb={2}>
                  Ethereum London Hard Fork
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The Ethereum network has been plagued with high transaction fees, often spiking at seasons of high demand. In May 2021, the average transaction fee of the network peaked at $71.72.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  In late 2021, Ethereums Arrow Glacier update was delayed to June 2022. Until then, Vitalik Buterin expects the road to the networks endgame to be shaped by optimistic rollups and Zk-rollups.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  In January 2022, the Ethereum Foundation announced the decision to remove the “Ethereum 2.0” terminology to “save all future users from navigating this confusing mental model.” It went on to explain that the previously-referred-to terms of “Ethereum 1.0” would be branded the “execution layer,” while “Ethereum 2.0” will be called the “consensus layer”. This is ultimately to provide a more accurate version of the Ethereum roadmap.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  In an update on the progress of the Merge, on April 13, 2022, Ethereum developer Tim Beiko tweeted an update on the progress of the Merge, stating that they are “definitely in the final chapter of PoW on Ethereum.” He also mentioned that users can expect it to occur a few months after June, although no exact date was provided. This came on the back of the first mainnet shadow fork — to test the transition to PoS on Ethereum — that was successfully implemented on April 11, 2022.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  EIP-1559 is arguably the most popular upgrade out of all the EIPs.
                </SoftTypography>

                <SoftTypography variant="h4" color="success" mb={2}>
                  Ethereum 2.0
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  In 2022, Ethereum plans to switch to proof-of-stake with its Ethereum 2.0 update. This switch has been in the Ethereum roadmap since the networks inception and would see a new consensus mechanism, as well as introduce sharding as a scaling solution. The current Ethereum chain will become the Beacon Chain and serve as a settlement layer for smart contract interactions on other chains.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  In late 2021, Ethereums Arrow Glacier update was delayed to June 2022. Until then, Vitalik Buterin expects the road to the networks endgame to be shaped by optimistic rollups and Zk-rollups.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  In January 2022, the Ethereum Foundation announced the decision to remove the “Ethereum 2.0” terminology to “save all future users from navigating this confusing mental model.” It went on to explain that the previously-referred-to terms of “Ethereum 1.0” would be branded the “execution layer,” while “Ethereum 2.0” will be called the “consensus layer”. This is ultimately to provide a more accurate version of the Ethereum roadmap.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  In an update on the progress of the Merge, on April 13, 2022, Ethereum developer Tim Beiko tweeted an update on the progress of the Merge, stating that they are “definitely in the final chapter of PoW on Ethereum.” He also mentioned that users can expect it to occur a few months after June, although no exact date was provided. This came on the back of the first mainnet shadow fork — to test the transition to PoS on Ethereum — that was successfully implemented on April 11, 2022.
                </SoftTypography>
                
                <SoftTypography variant="h4" color="success" mb={2}>
                  The Ethereum Merge
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  In 2022, Ethereum renamed its transition from proof-of-work to proof-of-stake from Ethereum 2.0 to The Merge. The Merge went live on Sept. 15, 2022, after the merge of the Goerli testnet successfully completed on Aug. 11, 2022.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The Merge implements several critical changes to Ethereum. First, it merges the existing PoW Ethereum mainnet with the Beacon Chain, a PoS chain. Together, the two chains will form the new proof-of-stake Ethereum, which will consist of a consensus layer and an execution layer. The consensus layer will synchronize the chain state across the network, while the execution layer handles transactions and block production.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Second, the Merge significantly reduces ETH issuance. This has been dubbed the triple halving in a nod to the Bitcoin halving, since the Merge reduces ETH issuance by 90%. With more than 14M ETH already staked, ETH could very well become deflationary after the transition. Furthermore, stakers are expected to earn between 8% and 12% APR at current projections. Staked ETH will not be withdrawable immediately after the Merge — it will only be enabled after the Shanghai upgrade, estimated to be 6 to 12 months later.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Learn more about the common misconceptions of Ethereum post-Merge.
                  The Merge will not increase transaction throughput or reduce gas fees, as the block production rate stays roughly the same at 12 seconds (currently 13 seconds). It will also not enable on-chain governance, with protocol changes still discussed and decided off-chain through stakeholders.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  Importantly, the transition to PoS is expected to reduce Ethereums annual energy consumption from 112 TWh/yr to only 0.01 TWh/yr — a 99.9% drop. This reduction prompted investors to expect an influx of institutional money in a greener Ethereum. On the flip side, Ethereum miners, in an industry estimated to be worth $19 billion, seek to champion ETHPoW, a potential hard fork of Ethereum on proof-of-work. We explain the main differences in our ETH PoS vs ETH PoW article.
                </SoftTypography>


                <SoftTypography variant="h4" color="success" mb={2}>
                  Ethereum Shanghai Upgrade
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The biggest Ethereum upgrade since The Merge, the Shanghai Upgrade will allow ETH stakers to unstake their ETH and withdraw ETH rewards from the Beacon Chain. During The Merge, the Ethereum proof-of-work chain merged with the proof-of-stake Beacon Chain. Instead of mining, validators stake 32 ETH to secure the network. However, stakers are unable to unstake and withdraw until the Shanghai Upgrade.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  The Shanghai/Capella (“Shapella”) Upgrade is a hard fork that will implement five EIPs — the most anticipated being EIP-4895, which will enable withdrawals. Shanghai is the hard fork’s name on the execution layer, while Capella is the name on the consensus layer.
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                  On Feb. 7, 2023, withdrawals on the Zhejiang testnet were enabled, and on Feb. 28, the Sepolia testnet successfully executed the hard fork upgrade. On March 15, 2023, the hard fork was executed on the Goerli testnet, the last test run before the mainnet upgrade, expected to happen sometime in March 2023. Over 17.5 million ETH will become available for withdrawals.
                </SoftTypography>
                



                <SoftTypography variant="h4" color="success" mb={2}>
                  Ethereum Whitepaper
                </SoftTypography>

                <SoftTypography variant="h5" color="warning" mb={2}>
                  Overview
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Ethereum is like a giant global computer that anyone can use to create and run applications that work without any central authority controlling them.
                    Think of it as a platform where you can build digital services that run exactly as programmed, without any possibility of downtime, censorship, or outside interference.
                    The system uses its own currency called Ether to pay for using the network.
                    Since its inception, Ethereum has grown to become the leading platform for decentralized applications (dApps) and decentralized finance (DeFi).
                    This revolutionary technology has transformed how we think about digital ownership and online transactions.
                </SoftTypography>

                <SoftTypography variant="h5" color="warning" mb={2}>
                  Technology
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    At its heart, Ethereum works like a really smart record-keeping system that everyone can trust.
                    Instead of having one companys computers running everything, thousands of computers around the world work together to keep the system running.
                    The special thing about Ethereum is that it lets people write (smart contracts) - these are like digital agreements that automatically do what they are supposed to do without needing anyone to manage them.
                    Imagine if your bank account could automatically pay your rent every month without any bank being involved - that is the kind of thing Ethereum makes possible.
                    These smart contracts can be used for everything from simple payments to complex financial services.
                    The system uses something called the Ethereum Virtual Machine (EVM), which is like a giant shared computer that runs these smart contracts.
                    Every time someone wants to do something on Ethereum, they have to pay a small fee called (gas) to use this virtual computer.
                    This helps prevent spam and makes sure the network runs smoothly.
                    With the transition to Proof of Stake, the network now processes transactions through validators instead of miners, making it more energy-efficient and accessible.
                    This change has made Ethereum much more environmentally friendly while maintaining its security and reliability.
                </SoftTypography>

                <SoftTypography variant="h5" color="warning" mb={2}>
                  Tokenomics
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Ether (ETH) is the main currency used in Ethereum.
                    You need it to do anything on the network, kind of like needing tokens to play games at an arcade.
                    When you want to use an Ethereum application or send money to someone, you pay a small fee in ETH.
                    These fees now go to validators who help keep the network running by processing transactions and securing the system.
                    The more people use the network, the more valuable ETH tends to become.
                    Unlike Bitcoin which has a fixed supply, Ethereums supply can change based on network needs and community decisions.
                    The introduction of EIP-1559 in 2021 made ETH partially deflationary, meaning some ETH gets destroyed with every transaction.
                    This helps maintain the value of ETH over time.
                    Since the merge to Proof of Stake in 2022, new ETH issuance has been reduced by approximately 90%, making the asset more scarce.
                    The current annual issuance rate varies based on the number of ETH being staked.
                    This system ensures that those who help secure the network are rewarded while keeping inflation in check.
               </SoftTypography>

               <SoftTypography variant="h5" color="warning" mb={2}>
                  Roadmap
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Ethereum successfully completed its most significant upgrade, The Merge, in September 2022, transitioning from proof of work to proof of stake.
                    This change reduced the networks energy consumption by over 99% while maintaining security.
                    The next major phase of development focuses on scaling solutions through sharding and layer 2 technologies.
                    Sharding will split the network into multiple parallel chains to increase transaction capacity and reduce fees.
                    This will make Ethereum faster and cheaper to use for everyone.
                    The upcoming Shanghai upgrade will enable staked ETH withdrawals and introduce further optimizations.
                    Future developments include proto-danksharding and EIP-4844 which aim to make transactions significantly cheaper.
                    These improvements will help make Ethereum more accessible to everyday users.
                    The long-term vision includes making Ethereum more accessible, sustainable, and capable of handling global-scale applications.
                    The development team is constantly working on new ways to improve the networks speed, security, and usability.
               </SoftTypography>

               <SoftTypography variant="h5" color="warning" mb={2}>
                  Team
                </SoftTypography>
                <SoftTypography variant="body1" color="text" mb={2}>
                    Ethereum was first proposed by Vitalik Buterin in 2013 when he was just 19 years old.
                    The project was officially launched in 2015 by a group of co-founders including Vitalik Buterin, Charles Hoskinson, and Gavin Wood.
                    Today, Ethereum is developed by a large community of developers from around the world.
                    The Ethereum Foundation, a non-profit organization, helps coordinate development but does not control the network.
                    Instead, changes to Ethereum are decided by the community through a process of discussion and voting.
                    The development community has grown significantly, with multiple teams working on different aspects of the protocol.
                    Key development groups include the Ethereum Foundation, ConsenSys, and numerous independent teams contributing to core protocol development and ecosystem tools.
                    This decentralized approach to development helps ensure that no single group has too much control over the networks future.
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

export default ETHDetails;
