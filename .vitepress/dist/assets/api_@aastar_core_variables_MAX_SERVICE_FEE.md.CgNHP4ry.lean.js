import { _ as _export_sfc, c as createElementBlock, o as openBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.vWx6JuJ5.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/@aastar/core/variables/MAX_SERVICE_FEE.md","filePath":"api/@aastar/core/variables/MAX_SERVICE_FEE.md","lastUpdated":1769237380000}');
const _sfc_main = { name: "api/@aastar/core/variables/MAX_SERVICE_FEE.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createBaseVNode("code", null, "const"),
        createTextVNode(),
        createBaseVNode("strong", null, "MAX_SERVICE_FEE"),
        createTextVNode(": "),
        createBaseVNode("code", null, "1000"),
        createTextVNode(" = "),
        createBaseVNode("code", null, "1000")
      ])
    ], -1),
    createBaseVNode("p", null, [
      createTextVNode("Defined in: "),
      createBaseVNode("a", {
        href: "https://github.com/AAStarCommunity/aastar-sdk/blob/6388ef6d7c1f0b08255a8800bb272255cd49bb47/packages/core/src/constants.ts#L51",
        target: "_blank",
        rel: "noreferrer"
      }, "packages/core/src/constants.ts:51")
    ], -1),
    createBaseVNode("p", null, "Maximum service fee in basis points (1000 = 10%)", -1)
  ])]);
}
const MAX_SERVICE_FEE = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  MAX_SERVICE_FEE as default
};
