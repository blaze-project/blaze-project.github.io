import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("BenchmarkChart", defineAsyncComponent(() => import("/Volumes/Workspace/blaze-project.github.io/docs/.vuepress/components/BenchmarkChart.vue")))
    
      app.component("GitHubBadge", defineAsyncComponent(() => import("/Volumes/Workspace/blaze-project.github.io/docs/.vuepress/components/GitHubBadge.vue")))
  },
}
