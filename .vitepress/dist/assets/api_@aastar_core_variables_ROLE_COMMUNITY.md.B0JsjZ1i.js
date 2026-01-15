import { _ as _export_sfc, c as createElementBlock, o as openBlock, ag as createStaticVNode } from "./chunks/framework.vWx6JuJ5.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/@aastar/core/variables/ROLE_COMMUNITY.md","filePath":"api/@aastar/core/variables/ROLE_COMMUNITY.md"}');
const _sfc_main = { name: "api/@aastar/core/variables/ROLE_COMMUNITY.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<blockquote><p><code>const</code> <strong>ROLE_COMMUNITY</strong>: <a href="https://viem.sh/docs/index.html" target="_blank" rel="noreferrer"><code>Hash</code></a></p></blockquote><p>Defined in: <a href="https://github.com/AAStarCommunity/aastar-sdk/blob/89f481b5e82d27cdc5d83f918ddad6748e0e7c3e/packages/core/src/roles.ts#L31" target="_blank" rel="noreferrer">packages/core/src/roles.ts:31</a></p><p>Community Role</p><h2 id="remarks" tabindex="-1">Remarks <a class="header-anchor" href="#remarks" aria-label="Permalink to &quot;Remarks&quot;">​</a></h2><ul><li><strong>Description</strong>: Community administrator, can issue xPNTs, configure SBT rules</li><li><strong>Permission</strong>: Community-level governance</li><li><strong>Requirement</strong>: minStake: 30 GT, entryBurn: 3 GT (line 99)</li><li><strong>Exit Fee</strong>: 5% (500 basis points), min 1 GT</li><li><strong>Lock Duration</strong>: 30 days</li><li><strong>Source</strong>: Registry.sol line 32: ROLE_COMMUNITY = keccak256(&quot;COMMUNITY&quot;)</li></ul>', 5)
  ])]);
}
const ROLE_COMMUNITY = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ROLE_COMMUNITY as default
};
