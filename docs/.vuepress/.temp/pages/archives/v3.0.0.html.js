import comp from "/Volumes/Workspace/blaze-docs-new/docs/.vuepress/.temp/pages/archives/v3.0.0.html.vue"
const data = JSON.parse("{\"path\":\"/archives/v3.0.0.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Features\",\"slug\":\"features\",\"link\":\"#features\",\"children\":[]},{\"level\":2,\"title\":\"Performance\",\"slug\":\"performance\",\"link\":\"#performance\",\"children\":[]},{\"level\":2,\"title\":\"Bugfix\",\"slug\":\"bugfix\",\"link\":\"#bugfix\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"archives/v3.0.0.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
