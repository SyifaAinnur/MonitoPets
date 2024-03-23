import facebook from "~/icons/facebook.svg";
import twitter from "~/icons/twitter.svg";
import instagram from "~/icons/instagram.svg";
import youtube from "~/icons/youtube.svg";

export const subMenu = [
  {
    title: "Popular",
    children: [
      { title: "Yorkshire Terrier" },
      { title: "Pug" },
      { title: "Cocker Spaniel" },
      { title: "Jack Russell Terrier" },
      { title: "Beagle" },
      { title: "Husky" },
      { title: "Samoyed" },
      { title: "Labrador" },
      { title: "Tosa" },
      { title: "Dachshund" },
      { title: "French Bulldog" },
      { title: "Chihuahua" },
    ],
  },
  {
    title: "Large Dog",
    children: [
      { title: "Akita" },
      { title: "Alaskan Malamute" },
      { title: "Bernese Moutain" },
      { title: "Bloodhound" },
      { title: "Bullmastiff Terrier" },
      { title: "Cane Corso" },
    ],
  },
  {
    title: "Small Dog",
    children: [
      { title: "Beagle" },
      { title: "Boston Terrier" },
      { title: "Calm Terrier" },
      { title: "Chihuahua" },
      { title: "Cocker Spaniel" },
      { title: "Dachshund" },
    ],
  },
];
export const menuItems = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Category",
    to: "/category",
    children: subMenu,
  },
  {
    title: "About",
    to: "/information/1",
  },
  {
    title: "Contact",
    to: "/contact",
  },
];
export const footerMenu = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About",
    to: "/information/1",
  },
  {
    title: "Contact",
    to: "/contact",
  },
];
export const socialItems = [
  {
    icon: facebook,
    link: "https://facebook.com",
  },
  {
    icon: twitter,
    link: "https://twitter.com",
  },
  {
    icon: instagram,
    link: "https://instagram.com",
  },
  {
    icon: youtube,
    link: "https://youtube.com",
  },
];

export const menu2Items = [
  { title: "Privacy Policy", to: "/information/2" },
  { title: "Terms of Service", to: "/information/3" },
];
