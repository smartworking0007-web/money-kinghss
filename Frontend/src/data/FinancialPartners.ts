export interface ServiceItem {
  id: number;
  title: string;
  image: string;
  href: string;
}

export interface PartnerLogo {
  name: string;
  src: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Business Loan",
    image: "/images/Partners/1.png",
    href: "/services/business-loan",
  },
  {
    id: 2,
    title: "Home Loan",
    image: "/images/Partners/2.jpg",
    href: "/services/home-loan",
  },
  {
    id: 3,
    title: "Loan Against Property",
    image: "/images/Partners/3.png",
    href: "/services/loan-against-property",
  },
  {
    id: 4,
    title: "Personal Loan",
    image: "/images/Partners/4.jpg",
    href: "/services/personal-loan",
  },
  {
    id: 5,
    title: "Used Car Loan", 
    image: "/images/Partners/5.png",
    href: "/services/used-car-loan",
  },
  {
    id: 6,
    title: "Machinery Loan",
    image: "/images/Partners/6.png",
    href: "/services/machinery-loan",
  },
  {
    id: 7,
    title: "Bill Discounting Loan",
    image: "/images/Partners/7.png",
    href: "/services/bill-discounting",
  },
  {
    id: 9,
    title: "axis Bank",
    image: "/images/Partners/9.png",
    href: "/services/axis Bank",
  },
  {
    id: 10,
    title: "Indus Bank",
    image: "/images/Partners/10.jpg",
    href: "/services/Indus Bank",
  },
  {
    id: 11,
    title: "Bajaj",
    image: "/images/Partners/11.jpg",
    href: "/services/Bajaj",
  },
];

export const partnerLogos: PartnerLogo[] = [
  { name: "Tata Capital", src: "/images/Partners/1.png" },
  { name: "Hero Fincorp", src: "/images/Partners/2.jpg" },
  { name: "Aditya Birla", src: "/images/Partners/3.png" },
  { name: "IIFL Finance", src: "/images/Partners/4.jpg" },
  { name: "Godrej Capital", src: "/images/Partners/5.png" },
  { name: "Godrej Capital Alt", src: "/images/Partners/6.png" },
  { name: "L&T Finance", src: "/images/Partners/7.png" },
  { name: "L&T Finance", src: "/images/Partners/8.png" },
  { name: "L&T Finance", src: "/images/Partners/9.png" },
  { name: "L&T Finance", src: "/images/Partners/10.jpg" },
  { name: "L&T Finance", src: "/images/Partners/11.jpg" },
];
