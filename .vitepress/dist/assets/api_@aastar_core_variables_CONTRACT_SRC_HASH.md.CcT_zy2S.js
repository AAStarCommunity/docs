import { _ as _export_sfc, c as createElementBlock, o as openBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.vWx6JuJ5.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/@aastar/core/variables/CONTRACT_SRC_HASH.md","filePath":"api/@aastar/core/variables/CONTRACT_SRC_HASH.md","lastUpdated":1769237380000}');
const _sfc_main = { name: "api/@aastar/core/variables/CONTRACT_SRC_HASH.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createBaseVNode("code", null, "const"),
        createTextVNode(),
        createBaseVNode("strong", null, "CONTRACT_SRC_HASH"),
        createTextVNode(": "),
        createBaseVNode("code", null, "any"),
        createTextVNode(" = "),
        createBaseVNode("code", null, "config.srcHash")
      ])
    ], -1),
    createBaseVNode("p", null, [
      createTextVNode("Defined in: "),
      createBaseVNode("a", {
        href: "https://github.com/AAStarCommunity/aastar-sdk/blob/6388ef6d7c1f0b08255a8800bb272255cd49bb47/packages/core/src/constants.ts#L16",
        target: "_blank",
        rel: "noreferrer"
      }, "packages/core/src/constants.ts:16")
    ], -1),
    createBaseVNode("p", null, "Contract Addresses (loaded from config.{network}.json)", -1)
  ])]);
}
const CONTRACT_SRC_HASH = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  CONTRACT_SRC_HASH as default
};
