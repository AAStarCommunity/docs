import { _ as _export_sfc, c as createElementBlock, o as openBlock, ag as createStaticVNode } from "./chunks/framework.vWx6JuJ5.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/@aastar/core/functions/validateAmount.md","filePath":"api/@aastar/core/functions/validateAmount.md"}');
const _sfc_main = { name: "api/@aastar/core/functions/validateAmount.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<blockquote><p><strong>validateAmount</strong>(<code>amount</code>, <code>fieldName</code>, <code>min</code>, <code>max?</code>): <code>bigint</code></p></blockquote><p>Defined in: <a href="https://github.com/AAStarCommunity/aastar-sdk/blob/89f481b5e82d27cdc5d83f918ddad6748e0e7c3e/packages/core/src/utils/validation.ts#L31" target="_blank" rel="noreferrer">packages/core/src/utils/validation.ts:31</a></p><p>Validates a BigInt amount.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="amount" tabindex="-1">amount <a class="header-anchor" href="#amount" aria-label="Permalink to &quot;amount&quot;">​</a></h3><p><code>bigint</code></p><p>The value to check</p><h3 id="fieldname" tabindex="-1">fieldName <a class="header-anchor" href="#fieldname" aria-label="Permalink to &quot;fieldName&quot;">​</a></h3><p><code>string</code> = <code>&#39;Amount&#39;</code></p><p>Name for error messages</p><h3 id="min" tabindex="-1">min <a class="header-anchor" href="#min" aria-label="Permalink to &quot;min&quot;">​</a></h3><p><code>bigint</code> = <code>0n</code></p><p>Minimum value (default 0n)</p><h3 id="max" tabindex="-1">max? <a class="header-anchor" href="#max" aria-label="Permalink to &quot;max?&quot;">​</a></h3><p><code>bigint</code></p><p>Maximum value (optional)</p><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>bigint</code></p>', 18)
  ])]);
}
const validateAmount = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  validateAmount as default
};
