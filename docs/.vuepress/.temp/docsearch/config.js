
import { DocSearch, injectDocSearchConfig } from "/Volumes/Workspace/blaze-docs-new/node_modules/@vuepress/plugin-docsearch/lib/client/index.js"
import '/Volumes/Workspace/blaze-docs-new/node_modules/@docsearch/css/dist/style.css'
import '/Volumes/Workspace/blaze-docs-new/node_modules/@vuepress/plugin-docsearch/lib/client/styles/docsearch.css'
import '/Volumes/Workspace/blaze-docs-new/node_modules/@vuepress/plugin-docsearch/lib/client/styles/vars.css'

export default {
  enhance({ app }) {
    injectDocSearchConfig(app)
    app.component('SearchBox', DocSearch)
  },
}
