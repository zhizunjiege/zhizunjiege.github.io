import { defineValaxyConfig } from "valaxy";
import type { UserThemeConfig } from "valaxy-theme-yun";
import { addonMeting } from "valaxy-addon-meting";

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: "yun",

  // theme config see site.config.ts

  unocss: { safelist: ["i-ri-home-line"] },

  addons: [
    addonMeting({
      global: true,
      props: {
        id: "5065571633",
        server: "netease",
        type: "playlist",
      },
    }),
  ],
});
