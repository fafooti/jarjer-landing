// src/data/stepData.ts

import accountIcon from "public/steps/account.svg";
import walletIcon from "public/steps/wallet.svg";
import portfolioIcon from "public/steps/portfolio.svg";

export interface Step {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

export const steps: Step[] = [
  {
    id: 1,
    icon: accountIcon,
    title: "Create Your Account",
    desc: "Your account and personal identity are guaranteed safe.",
  },
  {
    id: 2,
    icon: walletIcon,
    title: "Connect Your Wallet",
    desc: "Connect the bank account to start transactions.",
  },
  {
    id: 3,
    icon: portfolioIcon,
    title: "Start Your Portfolio",
    desc: "Buy and sell popular currencies and keep track of them.",
  },
];
