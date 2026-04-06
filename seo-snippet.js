// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.geneensgiftgallery.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.geneensgiftgallery.com/","title_tag":"Nature-inspired Art & Handmade Jewelry | Geneen's Gift Gallery","meta_description":"Discover nature-inspired art and handmade jewelry at Geneen's Gift Gallery. Unique gifts, artisan jewelry and custom pieces created with love in Alberta."},{"page_url":"https://www.geneensgiftgallery.com/shop","title_tag":"Handmade Jewelry & Unique Gifts | Geneen's Gift Gallery","meta_description":"Shop artisan jewelry, copper cuffs and nature-inspired art at Geneen's Gift Gallery. Find unique gifts, Alberta jewelry and custom pieces handmade with love."},{"page_url":"https://www.geneensgiftgallery.com/store-policies","title_tag":"Store Policies for Handmade Jewelry | Geneen's Gift Gallery","meta_description":"Read Geneen's Gift Gallery store policies for artisan jewelry and unique gifts. Learn about shipping from Alberta, payments, returns and exchanges."},{"page_url":"https://www.geneensgiftgallery.com/testimonials","title_tag":"Artisan Jewelry Reviews & Unique Gifts | Geneen's Gift Gallery","meta_description":"See customer testimonials for artisan jewelry and unique gifts from Geneen's Gift Gallery. Discover why shoppers love our handmade jewelry and art."}],"keywords":["Geneen's Gift Gallery","Jewelry Alberta","Nature-inspired Art","Handmade Jewelry","Copper Cuffs","Unique Gifts","Alberta Jewelry","Artisan Jewelry","Eco-friendly Gifts","Custom Jewelry"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": "https://www.geneensgiftgallery.com/#store",
  "url": "https://www.geneensgiftgallery.com/",
  "name": "Geneen's Gift Gallery",
  "description": "Geneen's Gift Gallery offers nature-inspired, handcrafted jewelry and artwork created with love, including bracelets, earrings, anklets, pendants, rings and art pieces, shipping within Canada from Derwent, Alberta.",
  "image": [
    "https://static.wixstatic.com/media/d850ef_f9c50c9d2692499685ab340c6b8921e3~mv2.jpeg/v1/fill/w_40,h_40,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6010A0DE-0E64-4058-8F0C-D251A771745A.jpeg",
    "https://static.wixstatic.com/media/29ef39a071a646e09e38b018ff91acaf.jpeg/v1/fill/w_147,h_95,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/29ef39a071a646e09e38b018ff91acaf.jpeg",
    "https://static.wixstatic.com/media/d850ef_c4d7972dc5194957b4032a9f623ddcc1~mv2.jpg/v1/fill/w_123,h_150,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/d850ef_c4d7972dc5194957b4032a9f623ddcc1~mv2.jpg",
    "https://static.wixstatic.com/media/26ada3c225014adba3827448ceb8124d.jpg/v1/fill/w_123,h_82,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/26ada3c225014adba3827448ceb8124d.jpg"
  ],
  "email": "mailto:gdfadden@me.com",
  "brand": {
    "@type": "Brand",
    "name": "Geneen's Gift Gallery"
  },
  "sameAs": [
    "https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/81af6121f84c41a5b4391d7d37fce12a.png",
    "https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Canada"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Derwent",
    "addressRegion": "Alberta",
    "addressCountry": "CA"
  },
  "foundingDate": "2018",
  "slogan": "Jewelry & Art by Geneen. Inspired by Nature. Created with Love.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Jewelry and Artwork",
    "url": "https://www.geneensgiftgallery.com/shop",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Artwork"
      },
      {
        "@type": "OfferCatalog",
        "name": "Bracelets"
      },
      {
        "@type": "OfferCatalog",
        "name": "Earrings"
      },
      {
        "@type": "OfferCatalog",
        "name": "Rings"
      },
      {
        "@type": "OfferCatalog",
        "name": "Anklets"
      },
      {
        "@type": "OfferCatalog",
        "name": "Pendants"
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
