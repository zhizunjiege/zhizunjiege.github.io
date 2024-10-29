import { defineThemeConfig } from "valaxy-theme-yun";

export default defineThemeConfig({
  banner: {
    enable: true,
    title: "JASON妙妙屋",
    cloud: {
      enable: true,
    },
  },

  bg_image: {
    enable: true,
    url: "https://cdn.jsdelivr.net/gh/zhizunjiege/cdn/img/bg/bg-blur50px.jpg",
    dark: "https://cdn.jsdelivr.net/gh/zhizunjiege/cdn/img/bg/bg-dark.jpg",
    opacity: 0.8,
  },

  say: {
    enable: true,
    api: "",
    hitokoto: {
      enable: true,
      api: "https://v1.hitokoto.cn",
    },
  },

  fireworks: {
    enable: true,
    colors: ["#FFD700", "#FF4500", "#FF6347", "#FF7F50", "#FFA07A"],
  },

  footer: {
    since: 2020,
    icon: {
      enable: true,
      name: "i-ri-cloud-line",
      animated: true,
      color: "var(--va-c-primary)",
    },

    powered: true,

    beian: {
      enable: false,
      icp: "",
    },
  },
});
