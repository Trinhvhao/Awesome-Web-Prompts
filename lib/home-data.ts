export type MenuLink = {
  text: string;
  href: string;
  isNew?: boolean;
};

export type TemplateMedia = {
  src: string;
  alt: string;
  isPreview?: boolean;
};

export type TemplateCard = {
  kind: "template";
  title: string;
  category: string;
  rowSpan2: boolean;
  hasLoader: boolean;
  action: "premium" | "copy";
  boltHref?: string;
  media: TemplateMedia[];
};

export type PromoCard = {
  kind: "promo";
  href: string;
  title: string;
  subtitle: string;
  cta: string;
  logoSrc: string;
};

export type GridItem = TemplateCard | PromoCard;

export type HomePageData = {
  logoLink: string;
  menuLinks: MenuLink[];
  primaryNavLink: MenuLink;
  hero: {
    poweredByHref: string;
    poweredByLogoSrc: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
  gridItems: GridItem[];
  bottomCta: {
    title: string;
    subtitle: string;
    href: string;
    text: string;
    logoSrc: string;
    previewSrc: string;
  };
  footerText: string;
};

export const HOME_PAGE_DATA: HomePageData = {
  "logoLink": "/",
  "menuLinks": [
    {
      "text": "Hướng dẫn",
      "href": "/instructions",
      "isNew": false
    },
    {
      "text": "Bảng giá",
      "href": "/pages/pricing/index.html",
      "isNew": false
    }
  ],
  "primaryNavLink": {
    "text": "Truy cập không giới hạn",
    "href": "/pages/pricing/index.html",
    "isNew": false
  },
  "hero": {
    "poweredByHref": "#",
    "poweredByLogoSrc": "",
    "description": "Xây dựng landing page đẹp trong vài phút với bộ prompt có sẵn. Sao chép, tùy chỉnh và triển khai ngay.",
    "ctaText": "Xem thư viện đầy đủ →",
    "ctaHref": "/pages/pricing/index.html"
  },
  "gridItems": [
    {
      "kind": "template",
      "title": "Space Voyage",
      "category": "Landing Page",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "copy",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-space-voyage-poster-Dti9x8oS.png",
          "alt": "Space Voyage",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-space-voyage-preview-eECLH3Yc.gif",
          "alt": "Space Voyage",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Orbis NFT",
      "category": "Landing Page",
      "rowSpan2": true,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-orbis-nft-poster-Bfg-lWHl.png",
          "alt": "Orbis NFT",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-orbis-nft-preview-C3wvh77a.gif",
          "alt": "Orbis NFT",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "promo",
      "href": "/pages/contact/index.html",
      "title": "",
      "subtitle": "Các style và mẫu layout nổi bật",
      "cta": "Liên hệ để hợp tác",
      "logoSrc": ""
    },
    {
      "kind": "template",
      "title": "NeoVision",
      "category": "Landing Page",
      "rowSpan2": true,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-neovision-poster-CIjls94N.png",
          "alt": "NeoVision",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-neovision-preview-qwRNOas1.gif",
          "alt": "NeoVision",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Velorah",
      "category": "Agency",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "copy",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-velorah-poster-mLkXfzr9.png",
          "alt": "Velorah",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-velorah-preview-CJNTtbpd.gif",
          "alt": "Velorah",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Grow AI Talent Platform",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "copy",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-grow-ai-poster-B-kSCKSN.png",
          "alt": "Grow AI Talent Platform",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-grow-ai-preview-BlQ8tAQ-.gif",
          "alt": "Grow AI Talent Platform",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Sync AI",
      "category": "Hero Section",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "copy",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-stellar-ai-v2-poster-D2407pz-.png",
          "alt": "Sync AI",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
          "alt": "Sync AI",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Mindloop Landing",
      "category": "Landing Page",
      "rowSpan2": true,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-mindloop-landing-poster-BbPiPxcA.png",
          "alt": "Mindloop Landing",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-mindloop-landing-preview-Bqnstohr.gif",
          "alt": "Mindloop Landing",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Asme",
      "category": "Hero Section",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-asme-poster-G7m9uLxL.png",
          "alt": "Asme",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-asme-preview-B_nGDnTP.gif",
          "alt": "Asme",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Transform Data",
      "category": "Hero Section",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "copy",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-transform-data-poster-DfsHSPMo.png",
          "alt": "Transform Data",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-transform-data-preview-Cx5OU29N.gif",
          "alt": "Transform Data",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "AI Designer Portfolio",
      "category": "Landing Page",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "https://bolt.new/~/sb1-oszmzx67",
      "media": [
        {
          "src": "/assets/images/assets/hero-vortex-studio-poster-lf3IYvUr.png",
          "alt": "AI Designer Portfolio",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-vortex-studio-preview-BQyvwopD.gif",
          "alt": "AI Designer Portfolio",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Terra Geo Map",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-terra-poster-BN-oVgFr.png",
          "alt": "Terra Geo Map",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-terra-preview-BFjrCr7T.gif",
          "alt": "Terra Geo Map",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "AI Designer Agency",
      "category": "Landing Page",
      "rowSpan2": true,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-ai-designer-agency-poster-CQqRSMUo.png",
          "alt": "AI Designer Agency",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-ai-designer-agency-preview-vrAje6Od.gif",
          "alt": "AI Designer Agency",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Automation Machines",
      "category": "Hero Section",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-automation-machines-poster-CRJvUPpQ.png",
          "alt": "Automation Machines",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-automation-machines-preview-DlTveRIN.gif",
          "alt": "Automation Machines",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Portfolio Cosmic",
      "category": "Portfolio",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-portfolio-cosmic-poster-vGZ7GZt-.png",
          "alt": "Portfolio Cosmic",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
          "alt": "Portfolio Cosmic",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "SkyElite Private Jets",
      "category": "Landing Page",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-skyelite-poster-GHD3VPq4.png",
          "alt": "SkyElite Private Jets",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-skyelite-preview-DHaZIgUv.gif",
          "alt": "SkyElite Private Jets",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "xPortfolio Hero",
      "category": "Hero Section",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-xportfolio-poster-B6q-pIN8.png",
          "alt": "xPortfolio Hero",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-xportfolio-preview-D4A8maiC.gif",
          "alt": "xPortfolio Hero",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "DesignPro Academy",
      "category": "Hero Section",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-designpro-poster-DwA5o1A7.png",
          "alt": "DesignPro Academy",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-designpro-preview-D8c5_een.gif",
          "alt": "DesignPro Academy",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Stellar AI",
      "category": "Hero Section",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-stellar-ai-poster-BQJztWy-.png",
          "alt": "Stellar AI",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
          "alt": "Stellar AI",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Power AI",
      "category": "Hero Section",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-power-ai-poster-B5SetZ6G.png",
          "alt": "Power AI",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-power-ai-preview-BqpSbx41.gif",
          "alt": "Power AI",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Aethera Studio",
      "category": "Hero Section",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-aethera-poster-DB6AdF0M.png",
          "alt": "Aethera Studio",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-aethera-preview-DknSlcTa.gif",
          "alt": "Aethera Studio",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "NOVA Space Systems",
      "category": "Landing Page",
      "rowSpan2": true,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-nova-space-poster-BNMHPfK2.png",
          "alt": "NOVA Space Systems",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-nova-space-preview-ej0OOJ0M.gif",
          "alt": "NOVA Space Systems",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Orbit Web3",
      "category": "Web3",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-orbit-web3-poster-CsiRb_pp.png",
          "alt": "Orbit Web3",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-orbit-web3-preview-BXt4OttD.gif",
          "alt": "Orbit Web3",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Nexora Automation",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-nexora-poster-CLY3ybj2.png",
          "alt": "Nexora Automation",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-nexora-preview-cx5HmUgo.gif",
          "alt": "Nexora Automation",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Nexus IT Solutions",
      "category": "Hero Section",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-nexus-poster-fNblRje9.png",
          "alt": "Nexus IT Solutions",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-nexus-preview-74RfhYpA.gif",
          "alt": "Nexus IT Solutions",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "EVR Ventures",
      "category": "Hero Section",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-evr-ventures-poster-Bld4o1cl.png",
          "alt": "EVR Ventures",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
          "alt": "EVR Ventures",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Planet Orbit",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-planet-orbit-poster-CuWG70ga.png",
          "alt": "Planet Orbit",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
          "alt": "Planet Orbit",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "E-commerce Website",
      "category": "Landing Page",
      "rowSpan2": true,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-ecommerce-website-poster-DUcLYbYg.png",
          "alt": "E-commerce Website",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-ecommerce-website-preview-D7j_TrNR.gif",
          "alt": "E-commerce Website",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "AKOR Security",
      "category": "Landing Page",
      "rowSpan2": true,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-akor-security-poster-Cw0Ko1yz.png",
          "alt": "AKOR Security",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-akor-security-preview-hRrwsPNf.gif",
          "alt": "AKOR Security",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "New Era Bold Hero",
      "category": "Creative",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-new-era-poster-BIdtLrty.png",
          "alt": "New Era Bold Hero",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-new-era-preview-CocuDUm9.gif",
          "alt": "New Era Bold Hero",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Wealth Video Hero",
      "category": "Fintech",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-wealth-poster-D9mwBQ1R.png",
          "alt": "Wealth Video Hero",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-wealth-preview-B70idl_u.gif",
          "alt": "Wealth Video Hero",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Glassmorphism Agency Hero",
      "category": "Agency",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-glassmorphism-agency-poster-BEMcgqRb.png",
          "alt": "Glassmorphism Agency Hero",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-glassmorphism-agency-preview-CGqeRoqP.gif",
          "alt": "Glassmorphism Agency Hero",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Web3 EOS Hero",
      "category": "Web3",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-web3-eos-poster-DF0_WdVS.png",
          "alt": "Web3 EOS Hero",
          "isPreview": false
        }
      ]
    },
    {
      "kind": "template",
      "title": "HR SaaS Hero",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-hr-saas-poster-Bj2hU3_c.png",
          "alt": "HR SaaS Hero",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-hr-saas-preview-Cf365Y1O.gif",
          "alt": "HR SaaS Hero",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Bionova Biotech",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-bionova-poster-CPaKbq55.png",
          "alt": "Bionova Biotech",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-bionova-preview-Sk76d0_D.gif",
          "alt": "Bionova Biotech",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "ClubX Investors",
      "category": "Hero Section",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-clubx-poster-Dwv_zKz1.png",
          "alt": "ClubX Investors",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-clubx-preview-CpKCe8yV.gif",
          "alt": "ClubX Investors",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Orbit Engineers",
      "category": "Agency",
      "rowSpan2": true,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-orbit-engineers-poster-BT1ffUzn.png",
          "alt": "Orbit Engineers",
          "isPreview": false
        }
      ]
    },
    {
      "kind": "template",
      "title": "Nickel Payments",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-nickel-poster-Co3f0jXk.png",
          "alt": "Nickel Payments",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-nickel-preview-CnRoBZt5.gif",
          "alt": "Nickel Payments",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "CodeNest Coding Platform",
      "category": "Landing Page",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-codenest-poster-Cq1PVGCy.png",
          "alt": "CodeNest Coding Platform",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-codenest-preview-Cgppc2qV.gif",
          "alt": "CodeNest Coding Platform",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Railroad.ai",
      "category": "Hero Section",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-railroad-ai-poster-lVI2bwI8.png",
          "alt": "Railroad.ai",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-railroad-ai-preview-CBjplU90.gif",
          "alt": "Railroad.ai",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Digitwist AI Builder",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-digitwist-poster-DbmglO1A.png",
          "alt": "Digitwist AI Builder",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-digitwist-preview-s2pJetjQ.gif",
          "alt": "Digitwist AI Builder",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Liquid Glass Agency",
      "category": "Landing Page",
      "rowSpan2": true,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-liquid-glass-agency-poster-BvnVaqJh.png",
          "alt": "Liquid Glass Agency",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-liquid-glass-agency-preview-Cr5Q9-lc.gif",
          "alt": "Liquid Glass Agency",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Taskly",
      "category": "Hero Section",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-taskly-poster-B5eMEGQS.png",
          "alt": "Taskly",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-taskly-preview-Dq2MKaI0.gif",
          "alt": "Taskly",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Mindloop",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-mindloop-poster-2_RhEWJd.png",
          "alt": "Mindloop",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-mindloop-preview-BR8xW6xW.gif",
          "alt": "Mindloop",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Datacore Booking",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-datacore-booking-poster-C4umG3DT.png",
          "alt": "Datacore Booking",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-datacore-booking-preview-B3t9SRK6.gif",
          "alt": "Datacore Booking",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Apex SaaS",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-apex-saas-poster-CZ6BkKIa.png",
          "alt": "Apex SaaS",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-apex-saas-preview-CbnBKSPv.gif",
          "alt": "Apex SaaS",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Buzzentic Agency",
      "category": "Agency",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-buzzentic-poster-7nm68cTe.png",
          "alt": "Buzzentic Agency",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-buzzentic-preview-CbopM29R.gif",
          "alt": "Buzzentic Agency",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Viktor Portfolio",
      "category": "Portfolio",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-viktor-portfolio-poster-S-47espj.png",
          "alt": "Viktor Portfolio",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-viktor-portfolio-preview-Bd2-Dg_u.gif",
          "alt": "Viktor Portfolio",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Bloom AI",
      "category": "Hero Section",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-bloom-ai-poster-Bol1Pj7x.png",
          "alt": "Bloom AI",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-bloom-ai-preview-g6RcYLTl.gif",
          "alt": "Bloom AI",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Loader Animation",
      "category": "Animation",
      "rowSpan2": false,
      "hasLoader": true,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-loader-animation-preview-C3_SX_Io.gif",
          "alt": "Loader Animation",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Dark Portfolio Hero",
      "category": "Portfolio",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-portfolio-dark-poster-CDlMFIzp.png",
          "alt": "Dark Portfolio Hero",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-portfolio-dark-preview-RZYzJHIL.gif",
          "alt": "Dark Portfolio Hero",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Logoisum Video Agency Hero",
      "category": "Agency",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-logoisum-poster-B5ln5VHb.png",
          "alt": "Logoisum Video Agency Hero",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-logoisum-preview-yhpSc7Yy.gif",
          "alt": "Logoisum Video Agency Hero",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Neuralyn",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-neuralyn-poster-BrDgI9_4.png",
          "alt": "Neuralyn",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-neuralyn-preview-Br4FRDQA.gif",
          "alt": "Neuralyn",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Framelix 3D Studios",
      "category": "Creative / 3D",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-framelix-poster-Da8_fUvr.png",
          "alt": "Framelix 3D Studios",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-framelix-preview-DsyIImVY.gif",
          "alt": "Framelix 3D Studios",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Targo Logistics Hero",
      "category": "Automotive",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-targo-poster-B9vpoEb_.png",
          "alt": "Targo Logistics Hero",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-targo-preview-BF9qQyMr.gif",
          "alt": "Targo Logistics Hero",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Weblex Dark Hero",
      "category": "Landing Page",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-weblex-poster-EhV1BiMD.png",
          "alt": "Weblex Dark Hero",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-weblex-preview-BoIbrUHI.gif",
          "alt": "Weblex Dark Hero",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "AI Automation Hero",
      "category": "AI / SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-synapse-ai-poster-LxdBC470.png",
          "alt": "AI Automation Hero",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-synapse-ai-preview-BjBuH68i.gif",
          "alt": "AI Automation Hero",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "New Era Automotive Hero",
      "category": "Automotive",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-new-era-auto-poster-CSiQtduG.png",
          "alt": "New Era Automotive Hero",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-new-era-auto-preview-W56vp0xD.gif",
          "alt": "New Era Automotive Hero",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Synapse Dark Hero",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-synapse-poster-BWu_t7F6.png",
          "alt": "Synapse Dark Hero",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-synapse-preview-CP83ds5W.gif",
          "alt": "Synapse Dark Hero",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Bold Portfolio Hero",
      "category": "Portfolio",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-portfolio-bold-poster-Dhes_J9u.png",
          "alt": "Bold Portfolio Hero",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-portfolio-bold-preview-9Yfbi-Wg.gif",
          "alt": "Bold Portfolio Hero",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Datacore SaaS Hero",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": true,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-datacore-preview-DWeq7Ls3.gif",
          "alt": "Datacore SaaS Hero",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "ClearInvoice SaaS Hero",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-clearinvoice-poster-D9rl57xj.png",
          "alt": "ClearInvoice SaaS Hero",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-clearinvoice-preview-l3q8sam6.gif",
          "alt": "ClearInvoice SaaS Hero",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Price Calculator",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-price-calculator-poster-DzoAr1AR.png",
          "alt": "Price Calculator",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-price-calculator-preview-Dak8DDgY.gif",
          "alt": "Price Calculator",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Taskora SaaS Hero",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-taskora-poster-Cgi3qyR1.png",
          "alt": "Taskora SaaS Hero",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-taskora-preview-BlRBv8IU.gif",
          "alt": "Taskora SaaS Hero",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Investor Deck",
      "category": "Presentation",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-deck-poster-yx2SqADM.png",
          "alt": "Investor Deck",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-deck-preview-CbidQJxW.gif",
          "alt": "Investor Deck",
          "isPreview": true
        }
      ]
    },
    {
      "kind": "template",
      "title": "Finlytic AI Agent",
      "category": "SaaS",
      "rowSpan2": false,
      "hasLoader": false,
      "action": "premium",
      "boltHref": "",
      "media": [
        {
          "src": "/assets/images/assets/hero-finlytic-poster-BKqseFhS.png",
          "alt": "Finlytic AI Agent",
          "isPreview": false
        },
        {
          "src": "/assets/images/assets/hero-finlytic-preview-CV9g0FHP.gif",
          "alt": "Finlytic AI Agent",
          "isPreview": true
        }
      ]
    }
  ],
  "bottomCta": {
    "title": "Truy cập toàn bộ thư viện và tài nguyên",
    "subtitle": "Mở rộng bộ prompt, template và thành phần để phát triển nhanh hơn.",
    "href": "/pages/pricing/index.html",
    "text": "Mở toàn bộ thư viện",
    "logoSrc": "",
    "previewSrc": ""
  },
  "footerText": "Người thiết kế: Trịnh Văn Hào"
} as const;
