import {
  defineComponent,
  h,
  hasOwn,
  hyphenate
} from "./chunk-NHDPEF63.js";
import "./chunk-PZ5AY32C.js";

// node_modules/vue-github-button/index.js
var vue_github_button_default = defineComponent({
  name: "github-button",
  props: {
    href: String,
    ariaLabel: String,
    title: String,
    dataIcon: String,
    dataColorScheme: String,
    dataSize: String,
    dataShowCount: String,
    dataText: String
  },
  render: function() {
    const props = { ref: "_" };
    for (const key in this.$props) {
      props[hyphenate(key)] = this.$props[key];
    }
    return h("span", [
      hasOwn(this.$slots, "default") ? h("a", props, this.$slots.default()) : h("a", props)
    ]);
  },
  mounted: function() {
    this.paint();
  },
  beforeUpdate: function() {
    this.reset();
  },
  updated: function() {
    this.paint();
  },
  beforeUnmount: function() {
    this.reset();
  },
  methods: {
    paint: function() {
      if (this.$el.lastChild !== this.$refs._) {
        return;
      }
      const _ = this.$el.appendChild(document.createElement("span"));
      const _this = this;
      import(
        /* webpackMode: "eager" */
        "./buttons.esm-EID27Q46.js"
      ).then(function(module) {
        if (_this.$el.lastChild !== _) {
          return;
        }
        module.render(_.appendChild(_this.$refs._), function(el) {
          if (_this.$el.lastChild !== _) {
            return;
          }
          _.parentNode.replaceChild(el, _);
        });
      });
    },
    reset: function() {
      if (this.$refs._ == null) {
        return;
      }
      this.$el.replaceChild(
        /** @type {HTMLAnchorElement} */
        this.$refs._,
        this.$el.lastChild
      );
    }
  }
});
export {
  vue_github_button_default as default
};
//# sourceMappingURL=vue-github-button.js.map
