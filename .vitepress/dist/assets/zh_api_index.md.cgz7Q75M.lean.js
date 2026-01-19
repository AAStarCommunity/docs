import { _ as _export_sfc, c as createElementBlock, o as openBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.vWx6JuJ5.js";
const __pageData = JSON.parse('{"title":"API 文档","description":"","frontmatter":{},"headers":[],"relativePath":"zh/api/index.md","filePath":"zh/api/index.md","lastUpdated":1768469348000}');
const _sfc_main = { name: "zh/api/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "api-文档",
      tabindex: "-1"
    }, [
      createTextVNode("API 文档 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#api-文档",
        "aria-label": 'Permalink to "API 文档"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "API 参考文档统一维护英语版本，以确保信息的准确性与实时性。", -1),
    createBaseVNode("p", null, "请访问：", -1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", { href: "/api/" }, "API 概览与快速入门")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", { href: "/api/@aastar/sdk.html" }, "SDK 核心模块")
      ])
    ], -1)
  ])]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
