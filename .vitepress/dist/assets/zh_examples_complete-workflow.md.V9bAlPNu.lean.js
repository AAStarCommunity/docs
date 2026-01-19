import { _ as _export_sfc, c as createElementBlock, o as openBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.vWx6JuJ5.js";
const __pageData = JSON.parse('{"title":"Complete Workflow Example","description":"","frontmatter":{},"headers":[],"relativePath":"zh/examples/complete-workflow.md","filePath":"zh/examples/complete-workflow.md","lastUpdated":1766648450000}');
const _sfc_main = { name: "zh/examples/complete-workflow.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "complete-workflow-example",
      tabindex: "-1"
    }, [
      createTextVNode("Complete Workflow Example "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#complete-workflow-example",
        "aria-label": 'Permalink to "Complete Workflow Example"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "This example demonstrates a complete workflow using all SDK features.", -1),
    createBaseVNode("p", null, "Based on the regression test suite.", -1),
    createBaseVNode("p", null, "```typescript // See SDK repo: scripts/99_final_v2_regression.ts // for the complete implementation ```", -1)
  ])]);
}
const completeWorkflow = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  completeWorkflow as default
};
