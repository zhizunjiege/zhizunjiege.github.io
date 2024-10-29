import { defineSiteConfig } from "valaxy";

export default defineSiteConfig({
  url: "https://zhizunjiege.github.io",
  title: "Jason 妙妙屋",
  subtitle: "星空浩渺，我如尘埃",
  description: "个人博客站点，不定期分享技术文章或心灵感悟.",

  author: {
    name: "Jason",
    avatar: "https://cdn.jsdelivr.net/gh/zhizunjiege/cdn/img/avatar.jpg",
    intro: "",
    status: {
      emoji: "👨‍💻",
      message: "我又得玉玉症了",
    },
  },

  lang: "zh-CN",
  timezone: "Asia/Shanghai",

  lastUpdated: true,
  statistics: {
    enable: true,
  },
  comment: {
    enable: true,
  },
  encrypt: {
    enable: false,
  },
  license: {
    enabled: true,
    type: "by-nc-sa",
  },
  frontmatter: {
    author: "Jason",
    toc: true,
    aside: true,
    comment: true,
    end: true,
    sponsor: true,
    copyright: true,

    nav: true,
    hide: false,
  },

  search: {
    enable: true,
    type: "fuse",
  },

  social: [
    {
      name: "RSS",
      link: "/feed.xml",
      icon: "i-ri-rss-line",
      color: "orange",
    },
    {
      name: "GitHub",
      link: "https://github.com/zhizunjiege",
      icon: "i-ri-github-line",
      color: "#6e5494",
    },
    {
      name: "哔哩哔哩",
      link: "https://space.bilibili.com/22867237",
      icon: "i-ri-bilibili-line",
      color: "#FF8EB3",
    },
    {
      name: "Travelling",
      link: "https://www.travellings.cn/go.html",
      icon: "i-ri-train-line",
      color: "var(--va-c-text)",
    },
  ],

  sponsor: {
    enable: true,
    title: "我很可爱，请给我钱！",
    methods: [
      {
        name: "微信支付",
        url: "https://cdn.jsdelivr.net/gh/zhizunjiege/cdn/img/donate/WeChatQR.png",
        color: "#2DC100",
        icon: "i-ri-wechat-pay-line",
      },
      {
        name: "支付宝",
        url: "https://cdn.jsdelivr.net/gh/zhizunjiege/cdn/img/donate/AliPayQR.jpg",
        color: "#00A3EE",
        icon: "i-ri-alipay-line",
      },
    ],
  },
});
