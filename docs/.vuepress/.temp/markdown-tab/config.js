import { CodeTabs } from "/Volumes/Workspace/blaze-project.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Volumes/Workspace/blaze-project.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Volumes/Workspace/blaze-project.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
