import facebook from "./assets/icon-facebook.svg";
import instagram from "./assets/icon-instagram.svg";
import twitter from "./assets/icon-twitter.svg";
import youtube from "./assets/icon-youtube.svg";
import iconUp from "./assets/icon-up.svg";
import iconDown from "./assets/icon-down.svg";

export const social = [
  {
    id: 1,
    socialIcon: facebook,
    nickname: "@nathanf",
    followers: "1987",
    today: 12,
    icon: iconUp,
    borderColorClass: "border-[#198ff5]",
  },
  {
    id: 2,
    socialIcon: twitter,
    nickname: "@nathanf",
    followers: "1044",
    today: 99,
    icon: iconUp,
    borderColorClass: "border-[#1ca0f2]",
  },
  {
    id: 3,
    socialIcon: instagram,
    nickname: "@realnathanf",
    followers: "11k",
    today: 12,
    icon: iconUp,
    borderColorClass: "gradient-border",
  },
  {
    id: 4,
    socialIcon: youtube,
    nickname: "Nathan F.",
    followers: "8239",
    today: 144,
    icon: iconDown,
    borderColorClass: "border-[#c4032a]",
  },
];

export const overviews = [
  {
    id: 1,
    text: "Page Views",
    socialIcon: facebook,
    count: "87",
    percentage: "3%",
    icon: iconUp,
    down: false,
  },
  {
    id: 2,
    text: "Likes",
    socialIcon: facebook,
    count: "52",
    percentage: "2%",
    icon: iconDown,
    down: true,
  },
  {
    id: 3,
    text: "Likes",
    socialIcon: instagram,
    count: "5462",
    percentage: "2257%",
    icon: iconUp,
    down: false,
  },
  {
    id: 4,
    text: "Profile Views",
    socialIcon: instagram,
    count: "52k",
    percentage: "1375%",
    icon: iconUp,
    down: false,
  },
  {
    id: 5,
    text: "Retweets",
    socialIcon: twitter,
    count: "117",
    percentage: "303%",
    icon: iconUp,
    down: false,
  },
  {
    id: 6,
    text: "Likes",
    socialIcon: twitter,
    count: "507",
    percentage: "553%",
    icon: iconUp,
    down: false,
  },
  {
    id: 7,
    text: "Likes",
    socialIcon: youtube,
    count: "107",
    percentage: "19%",
    icon: iconDown,
    down: true,
  },
  {
    id: 8,
    text: "Total Views",
    socialIcon: youtube,
    count: "1407",
    percentage: "12%",
    icon: iconDown,
    down: true,
  },
];
