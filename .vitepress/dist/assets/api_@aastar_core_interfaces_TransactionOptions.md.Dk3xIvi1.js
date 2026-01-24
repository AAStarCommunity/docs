import { _ as _export_sfc, c as createElementBlock, o as openBlock, ag as createStaticVNode } from "./chunks/framework.vWx6JuJ5.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/@aastar/core/interfaces/TransactionOptions.md","filePath":"api/@aastar/core/interfaces/TransactionOptions.md","lastUpdated":1769237380000}');
const _sfc_main = { name: "api/@aastar/core/interfaces/TransactionOptions.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<p>Defined in: <a href="https://github.com/AAStarCommunity/aastar-sdk/blob/6388ef6d7c1f0b08255a8800bb272255cd49bb47/packages/core/src/clients/types.ts#L52" target="_blank" rel="noreferrer">packages/core/src/clients/types.ts:52</a></p><p>Common options for transaction methods</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="account" tabindex="-1">account? <a class="header-anchor" href="#account" aria-label="Permalink to &quot;account?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>account</strong>: <code>`0x${string}`</code> | <a href="https://viem.sh/docs/index.html" target="_blank" rel="noreferrer"><code>Account</code></a></p></blockquote><p>Defined in: <a href="https://github.com/AAStarCommunity/aastar-sdk/blob/6388ef6d7c1f0b08255a8800bb272255cd49bb47/packages/core/src/clients/types.ts#L57" target="_blank" rel="noreferrer">packages/core/src/clients/types.ts:57</a></p><p>Override the account to use for the transaction. If not provided, uses the account from the WalletClient.</p><hr><h3 id="value" tabindex="-1">value? <a class="header-anchor" href="#value" aria-label="Permalink to &quot;value?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>value</strong>: <code>bigint</code></p></blockquote><p>Defined in: <a href="https://github.com/AAStarCommunity/aastar-sdk/blob/6388ef6d7c1f0b08255a8800bb272255cd49bb47/packages/core/src/clients/types.ts#L62" target="_blank" rel="noreferrer">packages/core/src/clients/types.ts:62</a></p><p>Optional value to send with the transaction (in wei)</p>', 12)
  ])]);
}
const TransactionOptions = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  TransactionOptions as default
};
