import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://siegfriedgelz.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { url: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
    { url: "",                  changeFrequency: "monthly", priority: 1.0 },
    { url: "/dojo",             changeFrequency: "monthly", priority: 0.9 },
    { url: "/kontakt",          changeFrequency: "yearly",  priority: 0.9 },
    { url: "/portrait",         changeFrequency: "yearly",  priority: 0.8 },
    { url: "/dienstleistungen", changeFrequency: "monthly", priority: 0.8 },
    { url: "/erfolge",          changeFrequency: "yearly",  priority: 0.7 },
    { url: "/fotos",            changeFrequency: "monthly", priority: 0.7 },
    { url: "/videos",           changeFrequency: "monthly", priority: 0.7 },
    { url: "/partner",          changeFrequency: "yearly",  priority: 0.5 },
    { url: "/literaturtipps",   changeFrequency: "yearly",  priority: 0.5 },
    { url: "/impressum",        changeFrequency: "yearly",  priority: 0.1 },
    { url: "/datenschutz",      changeFrequency: "yearly",  priority: 0.1 },
  ];

  return routes.map(({ url, changeFrequency, priority }) => ({
    url: `${siteUrl}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
