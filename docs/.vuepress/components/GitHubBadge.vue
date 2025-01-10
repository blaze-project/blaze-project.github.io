<template>
  <span style="display:inline-block">
    <span style="padding-right:5px"><github-button :href="`${repo}/`" dataShowCount="true">Star</github-button></span>
    <span style="padding-left:5px"><github-button :href="`${repo}/fork`" dataShowCount="true">Fork</github-button></span>
  </span>
</template>

<script>
import GithubButton from 'vue-github-button'

export default {
  components: { GithubButton },
  data() {
    return {
      repo: "https://github.com/kwai/blaze",
    }
  }
}
</script>
