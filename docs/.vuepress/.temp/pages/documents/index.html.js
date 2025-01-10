import comp from "/Volumes/Workspace/blaze-docs/docs/.vuepress/.temp/pages/documents/index.html.vue"
const data = JSON.parse("{\"path\":\"/documents/\",\"title\":\"Documents\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Documents\"},\"headers\":[],\"git\":{\"updatedTime\":1733237806000,\"contributors\":[{\"name\":\"guoying06\",\"email\":\"guoying06@kuaishou.com\",\"commits\":2},{\"name\":\"zhangli20\",\"email\":\"zhangli20@kuaishou.com\",\"commits\":1}]},\"filePathRelative\":\"documents/README.md\"}")
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
