
export interface FooterItem {
  label: string;
  href: string;
  type?: "phone" | "mail" | "map" | "globe";
}

export interface SocialItem {
  platform: "facebook" | "twitter" | "instagram" | "youtube" | "linkedin";
  href: string;
}

export interface FooterData {
  information: FooterItem[];
  quickLinks: FooterItem[];
  services: FooterItem[];
  socials: SocialItem[];
}
