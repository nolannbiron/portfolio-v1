import { ProjectProps } from "../components/Project";

export type ProjectsList = {
  featured: Array<ProjectProps>;
  all: {
    [key: string]: Array<ProjectProps>;
  }
}

export const projectsList: ProjectsList = {
  featured: [
    {
      title: "this.app",
      description:
        "A simple and modern developer portfolio built with next.js, typescript, chakra-ui, and styled-components.",
      keywords: [
        "react",
        "next.js",
        "chakra-ui",
        "styled-components",
      ],
      github: "https://github.com/nolannbiron/portfolio-v1",
    },
    {
      title: "DividendTracer",
      description:
        "A dApp to track every rewards collected by holding a BEP20 token.",
      keywords: [
        "react",
        "web3",
        "TypeScript",
        "bscscanApi",
        "ethers.js",
        "styled-components",
      ],
      website: "https://dividendtracer.com",
      github: "https://github.com/nolannbiron/dividendtracer",
    },
    {
      title: "PonySwap",
      description: "PancakeSwap but with Ponys. Forked from the original. Added Airdrops and Referrals.",
      keywords: [
        "react",
        "Solidity",
        "TypeScript",
        "web3",
        "ethers.js",
        "styled-components",
      ],
      website: "https://ponyswap.org",
      github: "https://github.com/ponyswapdex",
    },
    {
      title: "arbitrage-ftm",
      description: "An arbitrage bot using Uniswap's FlashSwap and FlashLoan, working on the FTM network.",
      keywords: [
        "typescript",
        "solidity",
        "web3",
        "ethers.js",
        "fantom",
        "uniswap",
      ],
      github: "https://github.com/nolannbiron/arbitrage-ftm",
    },
  ],
  all: {
    "2022": [
      {
        title: "use-hooks",
        description:
          "Library of common react hooks that I use in my projects.",
        keywords: [
          "react",
          "typescript",
          "hooks",
          "npm",
          "rollup",
        ],
        github: "https://github.com/nolannbiron/usehooks",
      },
      {
        title: "democracy.sol",
        description:
          "First try at solidity. Building a democracy elections contract. dApp included.",
        keywords: [
          "solidity",
          "web3",
          "ethers.js",
          "react",
        ],
        github: "https://github.com/nolannbiron/democracy.sol",
      },
      {
        title: "$RFT-stake",
        description:
          "Dapp + contracts for a BEP20 Staking token",
        keywords: [
          "solidity",
          "web3",
          "ethers.js",
          "react",
          "styled-components",
        ],
        github: "https://github.com/nolannbiron/rft-stake",
      },
      {
        title: "SeppaDiary",
        description:
          "Twitter clone for the Seppa team. Built with React, TypeScript, Node.js, Express, and MongoDB.",
        keywords: [
          "react",
          "typescript",
          "node.js",
          "express",
          "mongodb",
          "mongoose",
          "styled-components",
          "chakra-ui"
        ],
        github: "https://github.com/nolannbiron/SeppaDiary",
      },
    ],
    "2021": [
      {
        title: "DividendTracer-api",
        description:
          "Rest API in Node.JS for dividendtracer.com, it handles the trendings coins, user's search history and bookmarks.",
        keywords: [
          "node.js",
          "express",
          "mongodb",
          "mongoose",
          "api",
        ],
        github: "https://github.com/nolannbiron/dividendtracer-api",
      },
      {
        title: "Supertrendy",
        description:
          "A Node.js bot that uses Supertrend indicator and Binance CEX",
        keywords: [
          "node.js",
          "binance",
          "supertrend",
          "bot",
          "telegram",
        ],
      },
    ]
  }
}
