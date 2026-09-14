import { useEffect } from "react";
import { useLocation } from "wouter";
import seoPages from "@/lib/seo-pages.json";

type SeoPage = {
  path: string;
  title: string;
  description: string;
  image: string;
};

const SITE_URL = "https://hiveandthrive.life";
const SITE_NAME = "Hive & Thrive";
const pages = seoPages as SeoPage[];
const pathAliases: Record<string, string> = {
  "/the-hive/": "/",
  "/collections/": "/the-queens-playbook/",
};

function canonicalizePath(path: string) {
  const cleanPath = path.split(/[?#]/)[0] || "/";
  if (cleanPath === "/") return "/";
  return cleanPath.endsWith("/") ? cleanPath : `${cleanPath}/`;
}

function getPage(path: string) {
  const canonicalPath = canonicalizePath(path);
  const pagePath = pathAliases[canonicalPath] ?? canonicalPath;
  return pages.find((page) => page.path === pagePath) ?? pages[0];
}

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

export default function Seo() {
  const [location] = useLocation();

  useEffect(() => {
    const page = getPage(location);
    const canonicalUrl = `${SITE_URL}${page.path === "/" ? "/" : page.path}`;

    document.title = page.title;
    setCanonical(canonicalUrl);

    setMeta('meta[name="description"]', "name", "description", page.description);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:title"]', "property", "og:title", page.title);
    setMeta('meta[property="og:description"]', "property", "og:description", page.description);
    setMeta('meta[property="og:image"]', "property", "og:image", page.image);
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", SITE_NAME);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", page.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", page.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", page.image);
  }, [location]);

  return null;
}
