import { _ as _export_sfc, c as createElementBlock, o as openBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.vWx6JuJ5.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/@aastar/core/variables/FAUCET_API_URL.md","filePath":"api/@aastar/core/variables/FAUCET_API_URL.md"}');
const _sfc_main = { name: "api/@aastar/core/variables/FAUCET_API_URL.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createBaseVNode("code", null, "const"),
        createTextVNode(),
        createBaseVNode("strong", null, "FAUCET_API_URL"),
        createTextVNode(": "),
        createBaseVNode("code", null, '"https://faucet-aastar.vercel.app"'),
        createTextVNode(" = "),
        createBaseVNode("code", null, '"https://faucet-aastar.vercel.app"')
      ])
    ], -1),
    createBaseVNode("p", null, [
      createTextVNode("Defined in: "),
      createBaseVNode("a", {
        href: "https://github.com/AAStarCommunity/aastar-sdk/blob/de58973e339aee27579a805788c7048e2d9099f3/packages/core/src/constants.ts#L8",
        target: "_blank",
        rel: "noreferrer"
      }, "packages/core/src/constants.ts:8")
    ], -1),
    createBaseVNode("p", null, "Default faucet API URL for testnet token requests", -1)
  ])]);
}
const FAUCET_API_URL = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  FAUCET_API_URL as default
};
