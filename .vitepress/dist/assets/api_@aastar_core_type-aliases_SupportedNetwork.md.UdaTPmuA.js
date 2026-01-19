import { _ as _export_sfc, c as createElementBlock, o as openBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.vWx6JuJ5.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/@aastar/core/type-aliases/SupportedNetwork.md","filePath":"api/@aastar/core/type-aliases/SupportedNetwork.md"}');
const _sfc_main = { name: "api/@aastar/core/type-aliases/SupportedNetwork.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createBaseVNode("strong", null, "SupportedNetwork"),
        createTextVNode(" = keyof "),
        createBaseVNode("em", null, "typeof"),
        createTextVNode(),
        createBaseVNode("a", { href: "./../variables/NETWORKS.html" }, [
          createBaseVNode("code", null, "NETWORKS")
        ])
      ])
    ], -1),
    createBaseVNode("p", null, [
      createTextVNode("Defined in: "),
      createBaseVNode("a", {
        href: "https://github.com/AAStarCommunity/aastar-sdk/blob/821d2a29b60e7240ef51d199eec866aa227da0bf/packages/core/src/networks.ts#L30",
        target: "_blank",
        rel: "noreferrer"
      }, "packages/core/src/networks.ts:30")
    ], -1)
  ])]);
}
const SupportedNetwork = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  SupportedNetwork as default
};
