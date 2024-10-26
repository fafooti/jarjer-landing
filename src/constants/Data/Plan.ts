
export interface Plan {
  title: string;
  duration: string;
  profit: number;
  bgColor: string;
}

export const plans: Plan[] = [
  {
    title: "Blue Plan",
    duration: "3 months",
    profit: 12,
    bgColor: "#A3BCDE",
  },
  {
    title: "Silver Plan",
    duration: "6 months",
    profit: 15,
    bgColor: "#B0C4DE",
  },
  {
    title: "Gold Plan",
    duration: "12 months",
    profit: 20,
    bgColor: "#FFD700",
  },
  {
    title: "Platinum Plan",
    duration: "24 months",
    profit: 25,
    bgColor: "#E5E4E2",
  },
];
