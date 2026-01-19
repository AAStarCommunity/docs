import { _ as _export_sfc, c as createElementBlock, o as openBlock, ag as createStaticVNode } from "./chunks/framework.vWx6JuJ5.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/@aastar/paymaster/functions/tuneGasLimit.md","filePath":"api/@aastar/paymaster/functions/tuneGasLimit.md"}');
const _sfc_main = { name: "api/@aastar/paymaster/functions/tuneGasLimit.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<blockquote><p><strong>tuneGasLimit</strong>(<code>estimate</code>, <code>nominalActual</code>, <code>targetEfficiency</code>): <code>bigint</code></p></blockquote><p>Defined in: <a href="https://github.com/AAStarCommunity/aastar-sdk/blob/821d2a29b60e7240ef51d199eec866aa227da0bf/packages/paymaster/src/V4/PaymasterUtils.ts#L193" target="_blank" rel="noreferrer">V4/PaymasterUtils.ts:193</a></p><p>Tune gas limit using a dynamic nominal ceiling to satisfy Bundler efficiency (0.4) Target: Actual / Limit &gt;= targetEfficiency</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="estimate" tabindex="-1">estimate <a class="header-anchor" href="#estimate" aria-label="Permalink to &quot;estimate&quot;">​</a></h3><p><code>bigint</code></p><h3 id="nominalactual" tabindex="-1">nominalActual <a class="header-anchor" href="#nominalactual" aria-label="Permalink to &quot;nominalActual&quot;">​</a></h3><p><code>bigint</code></p><h3 id="targetefficiency" tabindex="-1">targetEfficiency <a class="header-anchor" href="#targetefficiency" aria-label="Permalink to &quot;targetEfficiency&quot;">​</a></h3><p><code>number</code> = <code>0.45</code></p><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>bigint</code></p>', 12)
  ])]);
}
const tuneGasLimit = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  tuneGasLimit as default
};
