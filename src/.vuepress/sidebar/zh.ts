import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "设计文档",
      prefix: "design/",
      link: "design/",
      children: "structure",
    },
    // {
    //   icon: "discover",
    //   text: "案例",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "文档",
    //   icon: "note",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // "slides",
  ],
});
