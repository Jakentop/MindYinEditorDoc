import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/MindYinEditorDoc",
  lang: "zh-CN",
  theme,

  shouldPrefetch: false,
});
