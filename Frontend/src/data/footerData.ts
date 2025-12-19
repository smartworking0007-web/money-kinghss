import { FooterData } from "@/types/footer";

export const footerData: FooterData = {
  information: [
    { type: "phone", label: "+01204206832", href: "tel:+1232341234" },
    { type: "mail", label: "info@moneykingfingfinicial", href: "mailto:info@moneykingfingfinicial" },
    { type: "map", label: "H-25, Sector-63, Noida", href: "https://maps.google.com" },
    { type: "globe", label: "www.domainsite.com", href: "https://www.domainsite.com" },
  ],
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Cases", href: "/cases" },
    { label: "Pricing", href: "/pricing" },
  ],
  services: [
    { label: "Financial Planning and Advisory", href: "#" },
    { label: "Investment Management", href: "#" },
    { label: "Banking and Cash Management", href: "#" },
    { label: "Insurance and Risk Management", href: "#" },
    { label: "More Services", href: "#" },
  ],
  socials: [
    { platform: "facebook", href: "https://www.facebook.com/profile.php?id=100094636427010" },
    { platform: "twitter", href: "https://x.com/services9871" },
    { platform: "instagram", href: "https://www.instagram.com/money.king.official/" },
    { platform: "youtube", href: "https://www.youtube.com/@moneykingf" },
    { platform: "linkedin", href: "https://www.linkedin.com/in/moneyking/" },
  ],
};
