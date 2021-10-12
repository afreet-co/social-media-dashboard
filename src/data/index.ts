import { Facebook, Instagram, Twitter, Youtube } from "../components/icons";

export type MainData = {
  id: number;
  Icon: () => JSX.Element;
  username: string;
  value: number | string;
  caption: string;
  isPositive: boolean;
  difference: number;
  borderBackground: string;
};

export type OverviewData = {
  id: number;
  Icon: () => JSX.Element;
  heading: string;
  value: number | string;
  isPositive: boolean;
  difference: number;
};

export const mains: MainData[] = [
  {
    id: 1,
    Icon: Facebook,
    value: 1987,
    caption: "followers",
    difference: 12,
    isPositive: true,
    username: "@nathanf",
    borderBackground: "bg-facebook",
  },
  {
    id: 2,
    username: "@nathanf",
    Icon: Twitter,
    value: 1044,
    caption: "followers",
    difference: 99,
    isPositive: true,
    borderBackground: "bg-twitter",
  },
  {
    id: 3,
    username: "@realnathanf",
    Icon: Instagram,
    value: "11k",
    caption: "followers",
    difference: 1099,
    isPositive: true,
    borderBackground: "bg-gradient-to-r from-instagram-from to-instagram-to",
  },
  {
    id: 4,
    username: "Nathan F.",
    Icon: Youtube,
    value: "8239",
    caption: "subscribers",
    difference: 144,
    isPositive: false,
    borderBackground: "bg-youtube",
  },
];
export const overviews: OverviewData[] = [
  {
    id: 1,
    Icon: Facebook,
    heading: "Page Views",
    difference: 3,
    isPositive: true,
    value: 87,
  },
  {
    id: 2,
    Icon: Facebook,
    heading: "Likes",
    difference: 2,
    isPositive: false,
    value: 52,
  },
  {
    id: 3,
    Icon: Instagram,
    heading: "Likes",
    difference: 2257,
    isPositive: true,
    value: 5462,
  },
  {
    id: 4,
    Icon: Instagram,
    heading: "Profile Views",
    difference: 1375,
    isPositive: true,
    value: "52k",
  },
  {
    id: 5,
    Icon: Twitter,
    heading: "Retweets",
    difference: 303,
    isPositive: true,
    value: 117,
  },
  {
    id: 6,
    Icon: Twitter,
    heading: "Likes",
    difference: 553,
    isPositive: true,
    value: 507,
  },
  {
    id: 7,
    Icon: Youtube,
    heading: "Likes",
    difference: 19,
    isPositive: false,
    value: 107,
  },
  {
    id: 8,
    Icon: Youtube,
    heading: "Total Views",
    difference: 12,
    isPositive: false,
    value: 1407,
  },
];

export const totalFollowers = "23,004";
