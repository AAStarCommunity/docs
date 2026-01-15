import { _ as _export_sfc, c as createElementBlock, o as openBlock, ag as createStaticVNode } from "./chunks/framework.vWx6JuJ5.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/@aastar/core/variables/ROLE_PAYMASTER_SUPER.md","filePath":"api/@aastar/core/variables/ROLE_PAYMASTER_SUPER.md"}');
const _sfc_main = { name: "api/@aastar/core/variables/ROLE_PAYMASTER_SUPER.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<blockquote><p><code>const</code> <strong>ROLE_PAYMASTER_SUPER</strong>: <a href="https://viem.sh/docs/index.html" target="_blank" rel="noreferrer"><code>Hash</code></a></p></blockquote><p>Defined in: <a href="https://github.com/AAStarCommunity/aastar-sdk/blob/89f481b5e82d27cdc5d83f918ddad6748e0e7c3e/packages/core/src/roles.ts#L69" target="_blank" rel="noreferrer">packages/core/src/roles.ts:69</a></p><p>Paymaster Super Role</p><h2 id="remarks" tabindex="-1">Remarks <a class="header-anchor" href="#remarks" aria-label="Permalink to &quot;Remarks&quot;">​</a></h2><ul><li><strong>Description</strong>: Advanced Paymaster operator, can use SuperPaymaster with aPNTs collateral</li><li><strong>Permission</strong>: Infrastructure operator (higher tier)</li><li><strong>Requirement</strong>: minStake: 50 GT, entryBurn: 5 GT (line 93)</li><li><strong>Additional Requirement</strong>: aPNTs collateral in SuperPaymaster contract</li><li><strong>Exit Fee</strong>: 10% (1000 basis points), min 2 GT</li><li><strong>Lock Duration</strong>: 30 days</li><li><strong>Source</strong>: Registry.sol line 35: ROLE_PAYMASTER_SUPER = keccak256(&quot;PAYMASTER_SUPER&quot;)</li></ul>', 5)
  ])]);
}
const ROLE_PAYMASTER_SUPER = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ROLE_PAYMASTER_SUPER as default
};
