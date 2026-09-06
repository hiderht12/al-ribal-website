/** Company info shown across the site (header, footer, contact page). */
export const siteConfig = {
  name: "الريال الذهبي",
  nameEn: "Alribal Security",
  tagline: "لأمن الشبكات والمعلوماتية وأنظمة الحماية",
  description:
    "الريال الذهبي لأمن الشبكات والمعلوماتية وأنظمة الحماية، نوفر حلول أنظمة المراقبة والشبكات ومنتجات HASNET و Xvision في العراق.",
  brands: ["HASNET", "Xvision"],
  phone: "07722221258",
  phoneHref: "tel:+9647722221258",
  telegramUrl: "https://t.me/rt_security_solutions",
  address: {
    country: "العراق",
    city: "بغداد",
    lines: [
      "شارع الصناعة",
      "شارع الخاصكي",
      "مقابل المجمع الوطني",
      "بناية مجمع المنار مول للإلكترونيات",
    ],
  },
  hours: {
    from: "9:00 صباحاً",
    to: "3:30 عصراً",
    days: "كل أيام الأسبوع ما عدا الجمعة",
  },
  delivery: "توصيل سريع داخل بغداد والمحافظات.",
} as const;
