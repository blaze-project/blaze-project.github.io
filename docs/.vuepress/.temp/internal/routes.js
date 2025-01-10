export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Volumes/Workspace/blaze-project.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/introduction.html", { loader: () => import(/* webpackChunkName: "introduction.html" */"/Volumes/Workspace/blaze-project.github.io/docs/.vuepress/.temp/pages/introduction.html.js"), meta: {"title":"Introduction"} }],
  ["/references.html", { loader: () => import(/* webpackChunkName: "references.html" */"/Volumes/Workspace/blaze-project.github.io/docs/.vuepress/.temp/pages/references.html.js"), meta: {"title":"Blaze Related Use Cases and Publications"} }],
  ["/archives/", { loader: () => import(/* webpackChunkName: "archives_index.html" */"/Volumes/Workspace/blaze-project.github.io/docs/.vuepress/.temp/pages/archives/index.html.js"), meta: {"title":"Archives"} }],
  ["/archives/all-releases.html", { loader: () => import(/* webpackChunkName: "archives_all-releases.html" */"/Volumes/Workspace/blaze-project.github.io/docs/.vuepress/.temp/pages/archives/all-releases.html.js"), meta: {"title":"All Archived Releases"} }],
  ["/archives/v4.0.0.html", { loader: () => import(/* webpackChunkName: "archives_v4.0.0.html" */"/Volumes/Workspace/blaze-project.github.io/docs/.vuepress/.temp/pages/archives/v4.0.0.html.js"), meta: {"title":"v4.0.0"} }],
  ["/archives/v4.0.1.html", { loader: () => import(/* webpackChunkName: "archives_v4.0.1.html" */"/Volumes/Workspace/blaze-project.github.io/docs/.vuepress/.temp/pages/archives/v4.0.1.html.js"), meta: {"title":"v4.0.1"} }],
  ["/documents/benchmarks.html", { loader: () => import(/* webpackChunkName: "documents_benchmarks.html" */"/Volumes/Workspace/blaze-project.github.io/docs/.vuepress/.temp/pages/documents/benchmarks.html.js"), meta: {"title":"Benchmarks"} }],
  ["/documents/configuration.html", { loader: () => import(/* webpackChunkName: "documents_configuration.html" */"/Volumes/Workspace/blaze-project.github.io/docs/.vuepress/.temp/pages/documents/configuration.html.js"), meta: {"title":"Configurations"} }],
  ["/documents/getting-started.html", { loader: () => import(/* webpackChunkName: "documents_getting-started.html" */"/Volumes/Workspace/blaze-project.github.io/docs/.vuepress/.temp/pages/documents/getting-started.html.js"), meta: {"title":"Getting-Started"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Volumes/Workspace/blaze-project.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
