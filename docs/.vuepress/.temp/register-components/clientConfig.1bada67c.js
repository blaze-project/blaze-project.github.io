import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("BenchmarkChart", defineAsyncComponent(() => import("/Volumes/Workspace/blaze-docs/docs/.vuepress/components/BenchmarkChart.vue")))
    
      app.component("GitHubBadge", defineAsyncComponent(() => import("/Volumes/Workspace/blaze-docs/docs/.vuepress/components/GitHubBadge.vue")))
  },
}
