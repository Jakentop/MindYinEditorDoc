import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      icon: "discover",
      text:"起步",
      link:"design"
    },
    {
      icon: "discover",
      text: "设计文档",
      prefix: "design/design_doc",
      link: "design/design_doc",
      children: [
        "功能点概述",
        "架构设计",
        "开发计划",
        {
          text: "组件设计实现",
          prefix: "components_design",
          link: "components_design",
          collapsable: true,
          children: [
            "组件通用能力",
            "Markdown组件能力概述"
          ]
        }
      ],
    },
    {
      icon: "discover",
      text: "详细实现",
      prefix: "design/function_plan",
      link: "design/function_plan",
      children: [
        {
          text: "资源对象设计",
          prefix: "resources_design",
          link: "resources_design",
          collapsable: true,
          children: [
          ]
        },
        {
          text: "物理对象设计",
          prefix: "entity_design",
          link: "entity_design",
          collapsable: true,
          children: [
            "FileIO组件"
          ]
        }
      ],
    },
  ],
});
